__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    189
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              },
              "range": [
                17,
                65
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"a\"",
                          "value": "a",
                          "range": [
                            20,
                            23
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 1
                            },
                            "start": {
                              "column": 20,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          20,
                          23
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 1
                          },
                          "start": {
                            "column": 20,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          25,
                          31
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 1
                          },
                          "start": {
                            "column": 25,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          33,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 1
                          },
                          "start": {
                            "column": 33,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      19,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 1
                      },
                      "start": {
                        "column": 19,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"b\"",
                          "value": "b",
                          "range": [
                            44,
                            47
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 1
                            },
                            "start": {
                              "column": 44,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          44,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 1
                          },
                          "start": {
                            "column": 44,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          49,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 1
                          },
                          "start": {
                            "column": 49,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          57,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 1
                          },
                          "start": {
                            "column": 57,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      43,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 1
                      },
                      "start": {
                        "column": 43,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  19,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              65
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            65
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        66
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        68,
        188
      ],
      "attributes": [],
      "declaration": {
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
                          "name": "index",
                          "optional": false,
                          "range": [
                            126,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 10,
                              "line": 4
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "AssignmentPattern",
                          "range": [
                            126,
                            135
                          ],
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "range": [
                              126,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 4
                              },
                              "start": {
                                "column": 10,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              134,
                              135
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 18,
                                "line": 4
                              }
                            }
                          },
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 10,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          126,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      124,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "range": [
                      140,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    124,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
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
              "kind": "const",
              "range": [
                118,
                144
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        178,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      178,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  172,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      152,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 6,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "range": [
                      156,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    152,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    167,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                },
                "range": [
                  152,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 6,
                    "line": 6
                  }
                }
              },
              "range": [
                148,
                186
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            114,
            188
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 46,
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
          "name": "test",
          "optional": false,
          "range": [
            84,
            88
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              },
              "range": [
                92,
                112
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
                      "name": "index",
                      "optional": false,
                      "range": [
                        96,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 28,
                          "line": 3
                        }
                      }
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 34,
                          "line": 3
                        }
                      },
                      "range": [
                        102,
                        110
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          104,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 3
                          },
                          "start": {
                            "column": 36,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      96,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  94,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              89,
              112
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          }
        ],
        "range": [
          75,
          188
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
