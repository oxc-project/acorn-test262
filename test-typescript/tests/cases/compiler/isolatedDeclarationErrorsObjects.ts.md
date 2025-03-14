__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1306
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        38
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      21,
                      22
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      24,
                      25
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 2
                      },
                      "start": {
                        "column": 7,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    21,
                    25
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
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
                      31,
                      32
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      34,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    31,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                15,
                38
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              38
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          7,
          38
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
        40,
        83
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oBad",
              "optional": false,
              "range": [
                51,
                55
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      64,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "range": [
                          67,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 7
                          },
                          "start": {
                            "column": 7,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "range": [
                          72,
                          78
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        67,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 7
                        },
                        "start": {
                          "column": 7,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      67,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 7,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    64,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                58,
                83
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "range": [
              51,
              83
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          47,
          83
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        84,
        103
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                97,
                98
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              }
            },
            "range": [
              97,
              102
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          91,
          103
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 19,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        104,
        211
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oBad2",
              "optional": false,
              "range": [
                115,
                120
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 11,
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      129,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            142,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Math",
                              "optional": false,
                              "range": [
                                145,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 12
                                },
                                "start": {
                                  "column": 11,
                                  "line": 12
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "random",
                              "optional": false,
                              "range": [
                                150,
                                156
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 12
                                },
                                "start": {
                                  "column": 16,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              145,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 12
                              },
                              "start": {
                                "column": 11,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            145,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 12
                            },
                            "start": {
                              "column": 11,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          142,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      132,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 13
                      },
                      "start": {
                        "column": 7,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    129,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
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
                    "name": "c",
                    "optional": false,
                    "range": [
                      171,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            184,
                            185
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
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            187,
                            188
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 15
                            },
                            "start": {
                              "column": 11,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          184,
                          188
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
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
                          "name": "e",
                          "optional": false,
                          "range": [
                            198,
                            199
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            201,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 16
                            },
                            "start": {
                              "column": 11,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          198,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      174,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 7,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    171,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                123,
                211
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            },
            "range": [
              115,
              211
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          111,
          211
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        213,
        321
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithMethods",
              "optional": false,
              "range": [
                224,
                236
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
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
                    "name": "method",
                    "optional": false,
                    "range": [
                      245,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 21
                      },
                      "start": {
                        "column": 4,
                        "line": 21
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
                      251,
                      257
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        254,
                        257
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 21
                        },
                        "start": {
                          "column": 13,
                          "line": 21
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
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
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
                      "line": 21
                    },
                    "start": {
                      "column": 4,
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
                    "name": "okMethod",
                    "optional": false,
                    "range": [
                      263,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 22
                      },
                      "start": {
                        "column": 4,
                        "line": 22
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
                      271,
                      283
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        280,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 22
                        },
                        "start": {
                          "column": 21,
                          "line": 22
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      },
                      "range": [
                        273,
                        279
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          275,
                          279
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 22
                          },
                          "start": {
                            "column": 16,
                            "line": 22
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    263,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      289,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
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
                      292,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 23
                      },
                      "start": {
                        "column": 7,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    289,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
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
                    "name": "bad",
                    "optional": false,
                    "range": [
                      299,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 24
                      },
                      "start": {
                        "column": 4,
                        "line": 24
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
                      302,
                      308
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        305,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 10,
                          "line": 24
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
                        "line": 24
                      },
                      "start": {
                        "column": 7,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    299,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 24
                    },
                    "start": {
                      "column": 4,
                      "line": 24
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
                      314,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 25
                      },
                      "start": {
                        "column": 4,
                        "line": 25
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      317,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 25
                      },
                      "start": {
                        "column": 7,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    314,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                239,
                321
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 26
                },
                "start": {
                  "column": 26,
                  "line": 20
                }
              }
            },
            "range": [
              224,
              321
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          220,
          321
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        322,
        458
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithMethodsNested",
              "optional": false,
              "range": [
                333,
                351
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
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
                      360,
                      363
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 28
                      },
                      "start": {
                        "column": 4,
                        "line": 28
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "range": [
                            375,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 29
                            },
                            "start": {
                              "column": 8,
                              "line": 29
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
                            381,
                            387
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              384,
                              387
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 29
                              },
                              "start": {
                                "column": 17,
                                "line": 29
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
                              "column": 20,
                              "line": 29
                            },
                            "start": {
                              "column": 14,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          375,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            397,
                            398
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 30
                            },
                            "start": {
                              "column": 8,
                              "line": 30
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
                            400,
                            401
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 30
                            },
                            "start": {
                              "column": 11,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          397,
                          401
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 30
                          },
                          "start": {
                            "column": 8,
                            "line": 30
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "okMethod",
                          "optional": false,
                          "range": [
                            411,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 31
                            },
                            "start": {
                              "column": 8,
                              "line": 31
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
                            419,
                            431
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              428,
                              431
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 31
                              },
                              "start": {
                                "column": 25,
                                "line": 31
                              }
                            }
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 31
                              },
                              "start": {
                                "column": 18,
                                "line": 31
                              }
                            },
                            "range": [
                              421,
                              427
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                423,
                                427
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 31
                                },
                                "start": {
                                  "column": 20,
                                  "line": 31
                                }
                              }
                            }
                          },
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 31
                            },
                            "start": {
                              "column": 16,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          411,
                          431
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bad",
                          "optional": false,
                          "range": [
                            441,
                            444
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 32
                            },
                            "start": {
                              "column": 8,
                              "line": 32
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
                            444,
                            450
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              447,
                              450
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 32
                              },
                              "start": {
                                "column": 14,
                                "line": 32
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
                              "column": 17,
                              "line": 32
                            },
                            "start": {
                              "column": 11,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          441,
                          450
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "range": [
                      365,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 33
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    360,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                354,
                458
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 34
                },
                "start": {
                  "column": 32,
                  "line": 27
                }
              }
            },
            "range": [
              333,
              458
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 34
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          329,
          458
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 7,
            "line": 27
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        462,
        862
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithAccessor",
              "optional": false,
              "range": [
                473,
                486
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
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
                    "name": "singleGetterBad",
                    "optional": false,
                    "range": [
                      499,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
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
                      514,
                      529
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              526,
                              527
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 39
                              },
                              "start": {
                                "column": 35,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            519,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 39
                            },
                            "start": {
                              "column": 28,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        517,
                        529
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 39
                        },
                        "start": {
                          "column": 26,
                          "line": 39
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
                        "column": 38,
                        "line": 39
                      },
                      "start": {
                        "column": 23,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    495,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "singleSetterBad",
                    "optional": false,
                    "range": [
                      539,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
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
                      554,
                      565
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        562,
                        565
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 40
                        },
                        "start": {
                          "column": 31,
                          "line": 40
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          555,
                          560
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 40
                          },
                          "start": {
                            "column": 24,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 40
                      },
                      "start": {
                        "column": 23,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    535,
                    565
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 40
                    },
                    "start": {
                      "column": 4,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetBad",
                    "optional": false,
                    "range": [
                      576,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
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
                      585,
                      600
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              597,
                              598
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 42
                              },
                              "start": {
                                "column": 29,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            590,
                            598
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 42
                            },
                            "start": {
                              "column": 22,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        588,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 42
                        },
                        "start": {
                          "column": 20,
                          "line": 42
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
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 17,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    572,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetBad",
                    "optional": false,
                    "range": [
                      610,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
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
                      619,
                      630
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        627,
                        630
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 43
                        },
                        "start": {
                          "column": 25,
                          "line": 43
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          620,
                          625
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 43
                          },
                          "start": {
                            "column": 18,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 43
                      },
                      "start": {
                        "column": 17,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    606,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk",
                    "optional": false,
                    "range": [
                      641,
                      649
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
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
                      649,
                      672
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              669,
                              670
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 45
                              },
                              "start": {
                                "column": 36,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            662,
                            670
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 45
                            },
                            "start": {
                              "column": 29,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "range": [
                        660,
                        672
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 45
                        },
                        "start": {
                          "column": 27,
                          "line": 45
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 45
                        },
                        "start": {
                          "column": 18,
                          "line": 45
                        }
                      },
                      "range": [
                        651,
                        659
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          653,
                          659
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 45
                          },
                          "start": {
                            "column": 20,
                            "line": 45
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 45
                      },
                      "start": {
                        "column": 16,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    637,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk",
                    "optional": false,
                    "range": [
                      682,
                      690
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
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
                      690,
                      701
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        698,
                        701
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 46
                        },
                        "start": {
                          "column": 24,
                          "line": 46
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          691,
                          696
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 46
                          },
                          "start": {
                            "column": 17,
                            "line": 46
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 46
                      },
                      "start": {
                        "column": 16,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    678,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 46
                    },
                    "start": {
                      "column": 4,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk2",
                    "optional": false,
                    "range": [
                      712,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
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
                      721,
                      736
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              733,
                              734
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 48
                              },
                              "start": {
                                "column": 29,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            726,
                            734
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 48
                            },
                            "start": {
                              "column": 22,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "range": [
                        724,
                        736
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 48
                        },
                        "start": {
                          "column": 20,
                          "line": 48
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
                        "column": 32,
                        "line": 48
                      },
                      "start": {
                        "column": 17,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    708,
                    736
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk2",
                    "optional": false,
                    "range": [
                      746,
                      755
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
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
                      755,
                      774
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        771,
                        774
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 49
                        },
                        "start": {
                          "column": 33,
                          "line": 49
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 49
                            },
                            "start": {
                              "column": 23,
                              "line": 49
                            }
                          },
                          "range": [
                            761,
                            769
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              763,
                              769
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 49
                              },
                              "start": {
                                "column": 25,
                                "line": 49
                              }
                            }
                          }
                        },
                        "range": [
                          756,
                          769
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 49
                          },
                          "start": {
                            "column": 18,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 49
                      },
                      "start": {
                        "column": 17,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    742,
                    774
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk3",
                    "optional": false,
                    "range": [
                      789,
                      798
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
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
                      798,
                      821
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              818,
                              819
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 51
                              },
                              "start": {
                                "column": 37,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            811,
                            819
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 51
                            },
                            "start": {
                              "column": 30,
                              "line": 51
                            }
                          }
                        }
                      ],
                      "range": [
                        809,
                        821
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 51
                        },
                        "start": {
                          "column": 28,
                          "line": 51
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 51
                        },
                        "start": {
                          "column": 19,
                          "line": 51
                        }
                      },
                      "range": [
                        800,
                        808
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          802,
                          808
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 51
                          },
                          "start": {
                            "column": 21,
                            "line": 51
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 51
                      },
                      "start": {
                        "column": 17,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    785,
                    821
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 51
                    },
                    "start": {
                      "column": 4,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk3",
                    "optional": false,
                    "range": [
                      831,
                      840
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
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
                      840,
                      859
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        856,
                        859
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 52
                        },
                        "start": {
                          "column": 33,
                          "line": 52
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 52
                            },
                            "start": {
                              "column": 23,
                              "line": 52
                            }
                          },
                          "range": [
                            846,
                            854
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              848,
                              854
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 52
                              },
                              "start": {
                                "column": 25,
                                "line": 52
                              }
                            }
                          }
                        },
                        "range": [
                          841,
                          854
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 52
                          },
                          "start": {
                            "column": 18,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 52
                      },
                      "start": {
                        "column": 17,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    827,
                    859
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 52
                    },
                    "start": {
                      "column": 4,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                489,
                862
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 53
                },
                "start": {
                  "column": 27,
                  "line": 38
                }
              }
            },
            "range": [
              473,
              862
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 53
              },
              "start": {
                "column": 11,
                "line": 38
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          469,
          862
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 7,
            "line": 38
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "range": [
                899,
                900
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 55
                },
                "start": {
                  "column": 35,
                  "line": 55
                }
              }
            },
            "range": [
              892,
              900
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 55
              },
              "start": {
                "column": 28,
                "line": 55
              }
            }
          }
        ],
        "range": [
          890,
          902
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 55
          },
          "start": {
            "column": 26,
            "line": 55
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "prop",
        "optional": false,
        "range": [
          873,
          877
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
          }
        }
      },
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
                "column": 21,
                "line": 55
              },
              "start": {
                "column": 18,
                "line": 55
              }
            },
            "range": [
              882,
              885
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  884,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 55
                  },
                  "start": {
                    "column": 20,
                    "line": 55
                  }
                }
              },
              "range": [
                884,
                885
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 55
                },
                "start": {
                  "column": 20,
                  "line": 55
                }
              }
            }
          },
          "range": [
            881,
            885
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 55
            },
            "start": {
              "column": 17,
              "line": 55
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 25,
            "line": 55
          },
          "start": {
            "column": 22,
            "line": 55
          }
        },
        "range": [
          886,
          889
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              888,
              889
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 55
              },
              "start": {
                "column": 24,
                "line": 55
              }
            }
          },
          "range": [
            888,
            889
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 55
            },
            "start": {
              "column": 24,
              "line": 55
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 55
          },
          "start": {
            "column": 13,
            "line": 55
          }
        },
        "range": [
          877,
          880
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
                878,
                879
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 55
                },
                "start": {
                  "column": 14,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              878,
              879
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 55
              },
              "start": {
                "column": 14,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        864,
        902
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 57
                },
                "start": {
                  "column": 7,
                  "line": 57
                }
              },
              "range": [
                911,
                926
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    920,
                    926
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 57
                    },
                    "start": {
                      "column": 16,
                      "line": 57
                    }
                  }
                },
                "range": [
                  913,
                  926
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 57
                  },
                  "start": {
                    "column": 9,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              910,
              926
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                929,
                935
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 57
                },
                "start": {
                  "column": 25,
                  "line": 57
                }
              }
            },
            "optional": false,
            "range": [
              929,
              937
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 57
              },
              "start": {
                "column": 25,
                "line": 57
              }
            }
          },
          "range": [
            910,
            937
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        904,
        938
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 58
                },
                "start": {
                  "column": 9,
                  "line": 58
                }
              },
              "range": [
                948,
                956
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  950,
                  956
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 58
                  },
                  "start": {
                    "column": 11,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              945,
              956
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 58
              },
              "start": {
                "column": 6,
                "line": 58
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              959,
              961
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 58
              },
              "start": {
                "column": 20,
                "line": 58
              }
            }
          },
          "range": [
            945,
            961
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 58
            },
            "start": {
              "column": 6,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        939,
        962
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          970,
          985
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                976,
                977
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                980,
                982
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 60
                }
              }
            },
            "range": [
              976,
              982
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 7,
            "line": 59
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          968,
          969
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 59
          },
          "start": {
            "column": 5,
            "line": 59
          }
        }
      },
      "range": [
        963,
        985
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        986,
        1114
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithComputedProperties",
              "optional": false,
              "range": [
                999,
                1022
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 62
                },
                "start": {
                  "column": 13,
                  "line": 62
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
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1032,
                      1033
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 63
                      },
                      "start": {
                        "column": 5,
                        "line": 63
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
                      1036,
                      1037
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 63
                      },
                      "start": {
                        "column": 9,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1031,
                    1037
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 63
                    },
                    "start": {
                      "column": 4,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1044,
                        1045
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 64
                        },
                        "start": {
                          "column": 5,
                          "line": 64
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        1048,
                        1049
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 64
                        },
                        "start": {
                          "column": 9,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1044,
                      1049
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 64
                      },
                      "start": {
                        "column": 5,
                        "line": 64
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
                      1052,
                      1053
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 64
                      },
                      "start": {
                        "column": 13,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1043,
                    1053
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 64
                    },
                    "start": {
                      "column": 4,
                      "line": 64
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          1065,
                          1066
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 65
                          },
                          "start": {
                            "column": 10,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "range": [
                        1060,
                        1064
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 65
                        },
                        "start": {
                          "column": 5,
                          "line": 65
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1060,
                      1067
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 65
                      },
                      "start": {
                        "column": 5,
                        "line": 65
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
                      1070,
                      1071
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 65
                      },
                      "start": {
                        "column": 15,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1059,
                    1071
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 65
                    },
                    "start": {
                      "column": 4,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      1078,
                      1079
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 66
                      },
                      "start": {
                        "column": 5,
                        "line": 66
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
                      1082,
                      1083
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 66
                      },
                      "start": {
                        "column": 9,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1077,
                    1083
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 66
                    },
                    "start": {
                      "column": 4,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        1090,
                        1091
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 67
                        },
                        "start": {
                          "column": 5,
                          "line": 67
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        1092,
                        1093
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 67
                        },
                        "start": {
                          "column": 7,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1090,
                      1093
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 67
                      },
                      "start": {
                        "column": 5,
                        "line": 67
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
                      1096,
                      1097
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 67
                      },
                      "start": {
                        "column": 11,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1089,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 67
                    },
                    "start": {
                      "column": 4,
                      "line": 67
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "range": [
                      1104,
                      1107
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 68
                      },
                      "start": {
                        "column": 5,
                        "line": 68
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1110,
                      1111
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 68
                      },
                      "start": {
                        "column": 11,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1103,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 68
                    },
                    "start": {
                      "column": 4,
                      "line": 68
                    }
                  }
                }
              ],
              "range": [
                1025,
                1114
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 69
                },
                "start": {
                  "column": 39,
                  "line": 62
                }
              }
            },
            "range": [
              999,
              1114
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 69
              },
              "start": {
                "column": 13,
                "line": 62
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          993,
          1114
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 7,
            "line": 62
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "part",
            "optional": false,
            "range": [
              1122,
              1126
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 71
              },
              "start": {
                "column": 6,
                "line": 71
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1131,
                    1132
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 71
                    },
                    "start": {
                      "column": 15,
                      "line": 71
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
                    1134,
                    1135
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 71
                    },
                    "start": {
                      "column": 18,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1131,
                  1135
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 71
                  },
                  "start": {
                    "column": 15,
                    "line": 71
                  }
                }
              }
            ],
            "range": [
              1129,
              1137
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 71
              },
              "start": {
                "column": 13,
                "line": 71
              }
            }
          },
          "range": [
            1122,
            1137
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 71
            },
            "start": {
              "column": 6,
              "line": 71
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1116,
        1138
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1140,
        1213
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithSpread",
              "optional": false,
              "range": [
                1153,
                1164
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 73
                },
                "start": {
                  "column": 13,
                  "line": 73
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      1173,
                      1174
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 74
                      },
                      "start": {
                        "column": 4,
                        "line": 74
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
                      1176,
                      1177
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 74
                      },
                      "start": {
                        "column": 7,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1173,
                    1177
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 74
                    },
                    "start": {
                      "column": 4,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "range": [
                      1186,
                      1190
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 75
                      },
                      "start": {
                        "column": 7,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    1183,
                    1190
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 75
                    },
                    "start": {
                      "column": 4,
                      "line": 75
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
                      1196,
                      1197
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 76
                      },
                      "start": {
                        "column": 4,
                        "line": 76
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
                      1199,
                      1200
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 76
                      },
                      "start": {
                        "column": 7,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1196,
                    1200
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 76
                    },
                    "start": {
                      "column": 4,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "range": [
                      1206,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 77
                      },
                      "start": {
                        "column": 4,
                        "line": 77
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
                    "name": "part",
                    "optional": false,
                    "range": [
                      1206,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 77
                      },
                      "start": {
                        "column": 4,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    1206,
                    1210
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 77
                    },
                    "start": {
                      "column": 4,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                1167,
                1213
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 78
                },
                "start": {
                  "column": 27,
                  "line": 73
                }
              }
            },
            "range": [
              1153,
              1213
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 78
              },
              "start": {
                "column": 13,
                "line": 73
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1147,
          1213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 7,
            "line": 73
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1216,
        1305
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithSpread2",
              "optional": false,
              "range": [
                1229,
                1241
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 81
                },
                "start": {
                  "column": 13,
                  "line": 81
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      1250,
                      1251
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 82
                      },
                      "start": {
                        "column": 4,
                        "line": 82
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
                      1253,
                      1254
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 82
                      },
                      "start": {
                        "column": 7,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1250,
                    1254
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 82
                    },
                    "start": {
                      "column": 4,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "range": [
                      1260,
                      1266
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 83
                      },
                      "start": {
                        "column": 4,
                        "line": 83
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "part",
                          "optional": false,
                          "range": [
                            1281,
                            1285
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 84
                            },
                            "start": {
                              "column": 11,
                              "line": 84
                            }
                          }
                        },
                        "range": [
                          1278,
                          1285
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 84
                          },
                          "start": {
                            "column": 8,
                            "line": 84
                          }
                        }
                      }
                    ],
                    "range": [
                      1268,
                      1292
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 85
                      },
                      "start": {
                        "column": 12,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    1260,
                    1292
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 85
                    },
                    "start": {
                      "column": 4,
                      "line": 83
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
                      1298,
                      1299
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 86
                      },
                      "start": {
                        "column": 4,
                        "line": 86
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
                      1301,
                      1302
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 86
                      },
                      "start": {
                        "column": 7,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1298,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 86
                    },
                    "start": {
                      "column": 4,
                      "line": 86
                    }
                  }
                }
              ],
              "range": [
                1244,
                1305
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 87
                },
                "start": {
                  "column": 28,
                  "line": 81
                }
              }
            },
            "range": [
              1229,
              1305
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 87
              },
              "start": {
                "column": 13,
                "line": 81
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1223,
          1305
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 7,
            "line": 81
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 88
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
