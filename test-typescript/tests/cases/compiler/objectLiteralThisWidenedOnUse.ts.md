__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    203
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          31
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                16,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 16,
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
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                28
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  21,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              16,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "GlobalIns",
            "optional": false,
            "range": [
              37,
              46
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
                  "name": "prop1",
                  "optional": false,
                  "range": [
                    53,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 4
                    },
                    "start": {
                      "column": 2,
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
                  "raw": "1",
                  "value": 1,
                  "range": [
                    60,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  53,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
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
                  "name": "prop2",
                  "optional": false,
                  "range": [
                    65,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 5
                    },
                    "start": {
                      "column": 2,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    72,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                },
                "range": [
                  65,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 5
                  },
                  "start": {
                    "column": 2,
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
                  "name": "prop3",
                  "optional": false,
                  "range": [
                    77,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
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
                  "raw": "3",
                  "value": 3,
                  "range": [
                    84,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 9,
                      "line": 6
                    }
                  }
                },
                "range": [
                  77,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
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
                  "name": "test",
                  "optional": false,
                  "range": [
                    89,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 7
                    },
                    "start": {
                      "column": 2,
                      "line": 7
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
                    94,
                    129
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "range": [
                                119,
                                123
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 8
                                },
                                "start": {
                                  "column": 20,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                103,
                                107
                              ],
                              "loc": {
                                "end": {
                                  "column": 8,
                                  "line": 8
                                },
                                "start": {
                                  "column": 4,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "accept_foo",
                              "optional": false,
                              "range": [
                                108,
                                118
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 8
                                },
                                "start": {
                                  "column": 9,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              103,
                              118
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 8
                              },
                              "start": {
                                "column": 4,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            103,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 8
                            },
                            "start": {
                              "column": 4,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          103,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
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
                      97,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  89,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
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
                  "name": "accept_foo",
                  "optional": false,
                  "range": [
                    133,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 10
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
                    144,
                    200
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  179,
                                  182
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 11
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                178,
                                182
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 11
                                },
                                "start": {
                                  "column": 12,
                                  "line": 11
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              177,
                              182
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 11
                              },
                              "start": {
                                "column": 11,
                                "line": 11
                              }
                            }
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "range": [
                                    188,
                                    191
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 11
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "range": [
                                    192,
                                    195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  188,
                                  195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 11
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                187,
                                195
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 11
                                },
                                "start": {
                                  "column": 21,
                                  "line": 11
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              186,
                              195
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 11
                              },
                              "start": {
                                "column": 20,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            177,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 11
                            },
                            "start": {
                              "column": 11,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          170,
                          196
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 11
                          },
                          "start": {
                            "column": 4,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      164,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 12
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 10
                          },
                          "start": {
                            "column": 17,
                            "line": 10
                          }
                        },
                        "range": [
                          148,
                          153
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              150,
                              153
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 10
                              },
                              "start": {
                                "column": 19,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            150,
                            153
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 10
                            },
                            "start": {
                              "column": 19,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        145,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 10
                        },
                        "start": {
                          "column": 14,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    },
                    "range": [
                      154,
                      163
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        156,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 10
                        },
                        "start": {
                          "column": 25,
                          "line": 10
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  133,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 12
                  },
                  "start": {
                    "column": 2,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              49,
              202
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            37,
            202
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
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
        33,
        203
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
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
      "column": 2,
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
