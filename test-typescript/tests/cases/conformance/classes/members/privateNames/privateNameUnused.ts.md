__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    462
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        122
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            122
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "name": "used",
                "range": [
                  21,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 9,
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
              "value": {
                "type": "Literal",
                "raw": "\"used\"",
                "value": "used",
                "range": [
                  29,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "range": [
                21,
                36
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "range": [
                  41,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "\"unused\"",
                "value": "unused",
                "range": [
                  51,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              },
              "range": [
                41,
                60
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
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
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
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
                  77,
                  120
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                102,
                                106
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
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "used",
                              "range": [
                                107,
                                112
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 5
                                },
                                "start": {
                                  "column": 25,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              102,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
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
                            "name": "console",
                            "optional": false,
                            "range": [
                              90,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 5
                              },
                              "start": {
                                "column": 8,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              98,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 5
                              },
                              "start": {
                                "column": 16,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            90,
                            101
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          90,
                          113
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        90,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    80,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 19,
                      "line": 4
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
                    "line": 6
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              },
              "range": [
                65,
                120
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          122
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
          "line": 7
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
        124,
        242
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            140,
            242
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "used",
                "range": [
                  146,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  151,
                  158
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    154,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
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
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "range": [
                146,
                158
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "range": [
                  164,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  171,
                  177
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    174,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
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
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "range": [
                164,
                177
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  183,
                  194
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
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
                  195,
                  240
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
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  220,
                                  224
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 13
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "used",
                                "range": [
                                  225,
                                  230
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                220,
                                230
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 13
                                },
                                "start": {
                                  "column": 20,
                                  "line": 13
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              220,
                              232
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 13
                              },
                              "start": {
                                "column": 20,
                                "line": 13
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
                            "name": "console",
                            "optional": false,
                            "range": [
                              208,
                              215
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 13
                              },
                              "start": {
                                "column": 8,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              216,
                              219
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            208,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          208,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        208,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    198,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 19,
                      "line": 12
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
                    "line": 14
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              },
              "range": [
                183,
                240
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 16,
              "line": 9
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "range": [
            137,
            139
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          131,
          242
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
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
          "column": 1,
          "line": 15
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
        244,
        462
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            260,
            462
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "used",
                "range": [
                  270,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  275,
                  290
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
                          287,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 18
                          },
                          "start": {
                            "column": 25,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        280,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 18
                        },
                        "start": {
                          "column": 18,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    278,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
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
                    "column": 28,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                }
              },
              "range": [
                266,
                290
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "used",
                "range": [
                  300,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  305,
                  325
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    321,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 19
                    },
                    "start": {
                      "column": 29,
                      "line": 19
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
                          "column": 27,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      },
                      "range": [
                        311,
                        319
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          313,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 19
                          },
                          "start": {
                            "column": 21,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      306,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 19
                  },
                  "start": {
                    "column": 13,
                    "line": 19
                  }
                }
              },
              "range": [
                296,
                325
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "range": [
                  340,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  347,
                  362
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
                          359,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 21
                          },
                          "start": {
                            "column": 27,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        352,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 21
                        },
                        "start": {
                          "column": 20,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    350,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 21
                    },
                    "start": {
                      "column": 18,
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
                    "column": 30,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              },
              "range": [
                336,
                362
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "range": [
                  372,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  379,
                  399
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    395,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 22
                    },
                    "start": {
                      "column": 31,
                      "line": 22
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
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 21,
                          "line": 22
                        }
                      },
                      "range": [
                        385,
                        393
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          387,
                          393
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 22
                          },
                          "start": {
                            "column": 23,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      380,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 16,
                        "line": 22
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              "range": [
                368,
                399
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  405,
                  416
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
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
                  417,
                  460
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                442,
                                446
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 24
                                },
                                "start": {
                                  "column": 20,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "used",
                              "range": [
                                447,
                                452
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 24
                                },
                                "start": {
                                  "column": 25,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              442,
                              452
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 24
                              },
                              "start": {
                                "column": 20,
                                "line": 24
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
                            "name": "console",
                            "optional": false,
                            "range": [
                              430,
                              437
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 24
                              },
                              "start": {
                                "column": 8,
                                "line": 24
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              438,
                              441
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 24
                              },
                              "start": {
                                "column": 16,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            430,
                            441
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 24
                            },
                            "start": {
                              "column": 8,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          430,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        430,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "range": [
                    420,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 25
                    },
                    "start": {
                      "column": 19,
                      "line": 23
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
                    "line": 25
                  },
                  "start": {
                    "column": 16,
                    "line": 23
                  }
                }
              },
              "range": [
                405,
                460
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 16,
              "line": 17
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A3",
          "optional": false,
          "range": [
            257,
            259
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 17
            },
            "start": {
              "column": 13,
              "line": 17
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          251,
          462
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 17
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
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
