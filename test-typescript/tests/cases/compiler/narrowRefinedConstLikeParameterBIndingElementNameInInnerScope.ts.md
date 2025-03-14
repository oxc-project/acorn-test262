__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    146
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        95,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    "right": {
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 4
                                      }
                                    },
                                    "range": [
                                      120,
                                      128
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        122,
                                        128
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 15,
                                          "line": 4
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    119,
                                    128
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 4
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    131,
                                    132
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
                                  119,
                                  132
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              113,
                              133
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 4
                              },
                              "start": {
                                "column": 6,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          105,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        99,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      95,
                      139
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
                  },
                  "range": [
                    95,
                    139
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
                89,
                143
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  72,
                  73
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  78,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "range": [
                72,
                87
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              }
            },
            "range": [
              68,
              143
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          64,
          145
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 64,
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
        "name": "ff",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
                "name": "a",
                "optional": false,
                "range": [
                  14,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
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
                "name": "a",
                "optional": false,
                "range": [
                  14,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              },
              "range": [
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
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
                  17,
                  18
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
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
                "name": "b",
                "optional": false,
                "range": [
                  17,
                  18
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              },
              "range": [
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            },
            "range": [
              20,
              62
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      24,
                      25
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 1
                      },
                      "start": {
                        "column": 24,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    },
                    "range": [
                      25,
                      45
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            27,
                            33
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 1
                            },
                            "start": {
                              "column": 27,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            36,
                            45
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 1
                            },
                            "start": {
                              "column": 36,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "range": [
                        27,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 1
                        },
                        "start": {
                          "column": 27,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    24,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      47,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 1
                      },
                      "start": {
                        "column": 47,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
                      }
                    },
                    "range": [
                      48,
                      60
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 1
                          },
                          "start": {
                            "column": 53,
                            "line": 1
                          }
                        },
                        "range": [
                          53,
                          60
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            56,
                            60
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 1
                            },
                            "start": {
                              "column": 56,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        50,
                        60
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 1
                        },
                        "start": {
                          "column": 50,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    47,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 1
                    },
                    "start": {
                      "column": 47,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                22,
                62
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            }
          },
          "range": [
            12,
            62
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        145
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
