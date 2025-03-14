__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    268
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
        "name": "getT",
        "optional": false,
        "range": [
          74,
          78
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 26,
            "line": 3
          }
        },
        "range": [
          83,
          86
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            }
          },
          "range": [
            85,
            86
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        },
        "range": [
          78,
          81
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                79,
                80
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              79,
              80
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        87
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 3
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
                        "name": "head",
                        "optional": false,
                        "range": [
                          162,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "range": [
                            169,
                            175
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 6
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            176,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          169,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        162,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    156,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
                      "line": 6
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
                        "name": "tail",
                        "optional": false,
                        "range": [
                          198,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              218,
                              219
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 7
                              },
                              "start": {
                                "column": 28,
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
                            "name": "result",
                            "optional": false,
                            "range": [
                              205,
                              211
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 7
                              },
                              "start": {
                                "column": 15,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "range": [
                              212,
                              217
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            205,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          205,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        198,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    192,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 2,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TSSatisfiesExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tail",
                      "optional": false,
                      "range": [
                        233,
                        237
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 8
                        },
                        "start": {
                          "column": 2,
                          "line": 8
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          248,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        248,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      233,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 2,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    233,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 2,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                152,
                265
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 9
                },
                "start": {
                  "column": 63,
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
                "name": "result",
                "optional": false,
                "range": [
                  141,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 5
                  },
                  "start": {
                    "column": 52,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              140,
              265
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 51,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getT",
                      "optional": false,
                      "range": [
                        102,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        106,
                        114
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            107,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 5
                            },
                            "start": {
                              "column": 18,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      102,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getT",
                        "optional": false,
                        "range": [
                          121,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 32,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          125,
                          130
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              126,
                              129
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 37,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 5
                          },
                          "start": {
                            "column": 36,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        121,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      118,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
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
                  101,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
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
                  89,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 5
                  },
                  "start": {
                    "column": 0,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "range": [
                  97,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "range": [
                89,
                100
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 0,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              89,
              134
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              135,
              139
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 46,
                "line": 5
              }
            }
          },
          "range": [
            89,
            139
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          89,
          266
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        89,
        267
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
