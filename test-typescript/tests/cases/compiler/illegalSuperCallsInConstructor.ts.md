__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    389
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          29
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                18,
                26
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  20,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              17,
              27
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          59,
          389
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                65,
                76
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                76,
                387
              ],
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
                          "name": "r2",
                          "optional": false,
                          "range": [
                            93,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "range": [
                                104,
                                109
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 7
                                },
                                "start": {
                                  "column": 23,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              104,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 7
                              },
                              "start": {
                                "column": 23,
                                "line": 7
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            98,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          93,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      89,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                          "name": "r3",
                          "optional": false,
                          "range": [
                            125,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
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
                                    "type": "Super",
                                    "range": [
                                      138,
                                      143
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    138,
                                    145
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
                                  138,
                                  146
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              136,
                              148
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 8
                              },
                              "start": {
                                "column": 23,
                                "line": 8
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            130,
                            148
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
                          125,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      121,
                      148
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r4",
                          "optional": false,
                          "range": [
                            161,
                            163
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        "init": {
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
                                    "type": "Super",
                                    "range": [
                                      180,
                                      185
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    180,
                                    187
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  180,
                                  188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "range": [
                              178,
                              190
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 9
                              },
                              "start": {
                                "column": 29,
                                "line": 9
                              }
                            }
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            166,
                            190
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          161,
                          190
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      157,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
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
                          "name": "r5",
                          "optional": false,
                          "range": [
                            203,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
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
                                  226,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 11
                                  }
                                }
                              },
                              "kind": "get",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "range": [
                                  229,
                                  298
                                ],
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
                                          "type": "Super",
                                          "range": [
                                            250,
                                            255
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          250,
                                          257
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        250,
                                        258
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 12
                                        }
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "raw": "1",
                                        "value": 1,
                                        "range": [
                                          282,
                                          283
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "range": [
                                        275,
                                        284
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 13
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    232,
                                    298
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 11
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
                                    "column": 13,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                222,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 14
                                },
                                "start": {
                                  "column": 12,
                                  "line": 11
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  316,
                                  319
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 15
                                  }
                                }
                              },
                              "kind": "set",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "range": [
                                  319,
                                  371
                                ],
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
                                          "type": "Super",
                                          "range": [
                                            349,
                                            354
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 16
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          349,
                                          356
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 16
                                          }
                                        }
                                      },
                                      "range": [
                                        349,
                                        357
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 16
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    331,
                                    371
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 15
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
                                    "name": "v",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 15
                                        }
                                      },
                                      "range": [
                                        321,
                                        329
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          323,
                                          329
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 15
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      320,
                                      329
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 15
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                312,
                                371
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 17
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "range": [
                            208,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 18
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          203,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      199,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  79,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 18,
                    "line": 6
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
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              65,
              387
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 27,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          38,
          45
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          54,
          58
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 5
          }
        }
      },
      "range": [
        32,
        389
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
      "column": 1,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
