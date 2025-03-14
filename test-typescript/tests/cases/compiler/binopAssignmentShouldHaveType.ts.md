__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    233
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
            "name": "console",
            "optional": false,
            "range": [
              12,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        20
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          21,
          33
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        21,
        34
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              50,
              226
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  67,
                  226
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getName",
                      "optional": false,
                      "range": [
                        71,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 2,
                          "line": 5
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
                        78,
                        111
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"name\"",
                              "value": "name",
                              "range": [
                                100,
                                106
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 6
                                },
                                "start": {
                                  "column": 10,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              93,
                              107
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 6
                              },
                              "start": {
                                "column": 3,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          88,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 7
                          },
                          "start": {
                            "column": 19,
                            "line": 5
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
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
                            "line": 5
                          }
                        },
                        "range": [
                          80,
                          87
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            81,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 7
                        },
                        "start": {
                          "column": 9,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      71,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 7
                      },
                      "start": {
                        "column": 2,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bug",
                      "optional": false,
                      "range": [
                        114,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 8
                        },
                        "start": {
                          "column": 2,
                          "line": 8
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
                        117,
                        223
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 9
                                      }
                                    },
                                    "range": [
                                      133,
                                      140
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        134,
                                        140
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 9
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    129,
                                    140
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 7,
                                      "line": 9
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Literal",
                                  "raw": "null",
                                  "value": null,
                                  "range": [
                                    142,
                                    146
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  129,
                                  146
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 7,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              125,
                              147
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 9
                              },
                              "start": {
                                "column": 3,
                                "line": 9
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
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "range": [
                                          208,
                                          212
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 20,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 11
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
                                          196,
                                          203
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
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "range": [
                                          204,
                                          207
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 15,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        196,
                                        207
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 15,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 4,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      196,
                                      213
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 4,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    196,
                                    214
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
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
                                190,
                                219
                              ],
                              "loc": {
                                "end": {
                                  "column": 4,
                                  "line": 12
                                },
                                "start": {
                                  "column": 42,
                                  "line": 10
                                }
                              }
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      156,
                                      160
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          162,
                                          166
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 14,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "getName",
                                        "optional": false,
                                        "range": [
                                          167,
                                          174
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        162,
                                        174
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      162,
                                      176
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 14,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    156,
                                    176
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 10
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    178,
                                    184
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  155,
                                  184
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 7,
                                    "line": 10
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  187,
                                  188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                155,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 10
                                },
                                "start": {
                                  "column": 7,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              151,
                              219
                            ],
                            "loc": {
                              "end": {
                                "column": 4,
                                "line": 12
                              },
                              "start": {
                                "column": 3,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "range": [
                          120,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 8
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
                          "line": 13
                        },
                        "start": {
                          "column": 5,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      114,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 13
                      },
                      "start": {
                        "column": 2,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "range": [
                  63,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                57,
                226
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 14
              },
              "start": {
                "column": 1,
                "line": 4
              }
            }
          }
        ],
        "range": [
          47,
          228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          42,
          46
        ],
        "decorators": [],
        "name": "Test",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "kind": "module",
      "range": [
        35,
        228
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
