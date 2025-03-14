__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    286
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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              },
              "range": [
                11,
                48
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    20,
                    48
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "elementType": {
                            "type": "TSNumberKeyword",
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
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "range": [
                              22,
                              25
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 1
                              },
                              "start": {
                                "column": 22,
                                "line": 1
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            22,
                            33
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 1
                            },
                            "start": {
                              "column": 22,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "range": [
                              40,
                              46
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 1
                              },
                              "start": {
                                "column": 40,
                                "line": 1
                              }
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "range": [
                              35,
                              38
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 1
                              },
                              "start": {
                                "column": 35,
                                "line": 1
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            35,
                            46
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 1
                            },
                            "start": {
                              "column": 35,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "range": [
                        21,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 21,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    13,
                    20
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 1
                    },
                    "start": {
                      "column": 13,
                      "line": 1
                    }
                  }
                },
                "range": [
                  13,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 1
                  },
                  "start": {
                    "column": 13,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            78,
                            79
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 2
                            },
                            "start": {
                              "column": 12,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "'two'",
                          "value": "two",
                          "range": [
                            81,
                            86
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 2
                            },
                            "start": {
                              "column": 15,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        77,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      70,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  64,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 64,
                    "line": 1
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                52,
                90
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              51,
              93
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 3
              },
              "start": {
                "column": 51,
                "line": 1
              }
            }
          },
          "range": [
            6,
            93
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        94
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 3
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              },
              "range": [
                107,
                144
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    116,
                    144
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "range": [
                              123,
                              129
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 5
                              },
                              "start": {
                                "column": 27,
                                "line": 5
                              }
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "range": [
                              118,
                              121
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 22,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            118,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 5
                            },
                            "start": {
                              "column": 22,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "range": [
                              136,
                              142
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 5
                              },
                              "start": {
                                "column": 40,
                                "line": 5
                              }
                            }
                          },
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "range": [
                              131,
                              134
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 5
                              },
                              "start": {
                                "column": 35,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            131,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 5
                            },
                            "start": {
                              "column": 35,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        117,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    109,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "range": [
                  109,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              102,
              144
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            186,
                            187
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 6
                            },
                            "start": {
                              "column": 26,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "'two'",
                          "value": "two",
                          "range": [
                            189,
                            194
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 6
                            },
                            "start": {
                              "column": 29,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        185,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 6
                        },
                        "start": {
                          "column": 25,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "range": [
                      177,
                      184
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
                  "range": [
                    177,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
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
                    "name": "resolve",
                    "optional": false,
                    "range": [
                      165,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 5,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  164,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                151,
                158
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 5
                },
                "start": {
                  "column": 55,
                  "line": 5
                }
              }
            },
            "range": [
              147,
              199
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 51,
                "line": 5
              }
            }
          },
          "range": [
            102,
            199
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        96,
        200
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              },
              "range": [
                211,
                248
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        215,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
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
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      },
                      "range": [
                        218,
                        246
                      ],
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "range": [
                                226,
                                232
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 9
                                },
                                "start": {
                                  "column": 24,
                                  "line": 9
                                }
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "one",
                              "optional": false,
                              "range": [
                                221,
                                224
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 9
                                },
                                "start": {
                                  "column": 19,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              221,
                              232
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "range": [
                                239,
                                245
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 9
                                },
                                "start": {
                                  "column": 37,
                                  "line": 9
                                }
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "two",
                              "optional": false,
                              "range": [
                                234,
                                237
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 9
                                },
                                "start": {
                                  "column": 32,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              234,
                              245
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 9
                              },
                              "start": {
                                "column": 32,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          220,
                          246
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      215,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  213,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              208,
              248
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    257,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            270,
                            271
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 10
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "'two'",
                          "value": "two",
                          "range": [
                            273,
                            278
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        269,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      263,
                      279
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 10,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    262,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "range": [
                  257,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              251,
              284
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 49,
                "line": 9
              }
            }
          },
          "range": [
            208,
            284
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        202,
        285
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
