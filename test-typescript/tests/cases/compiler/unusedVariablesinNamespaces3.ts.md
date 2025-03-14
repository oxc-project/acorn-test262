__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    293
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "lettersRegexp",
                  "optional": false,
                  "range": [
                    33,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  },
                  "value": null,
                  "range": [
                    49,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 26,
                      "line": 2
                    }
                  }
                },
                "range": [
                  33,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              27,
              63
            ],
            "loc": {
              "end": {
                "column": 40,
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
                  "name": "numberRegexp",
                  "optional": false,
                  "range": [
                    74,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[0-9]+$"
                  },
                  "value": null,
                  "range": [
                    89,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                },
                "range": [
                  74,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              68,
              100
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              105,
              156
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
                    "name": "anotherUnusedVariable",
                    "optional": false,
                    "range": [
                      118,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "\"Dummy value\"",
                    "value": "Dummy value",
                    "range": [
                      142,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 4
                      },
                      "start": {
                        "column": 41,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    118,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                112,
                156
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 55,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              162,
              291
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  196,
                  291
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "range": [
                        206,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
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
                        218,
                        285
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "range": [
                                    271,
                                    273
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 8
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
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "range": [
                                    252,
                                    265
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 8
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "range": [
                                    266,
                                    270
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  252,
                                  270
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 8
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                252,
                                274
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 8
                                },
                                "start": {
                                  "column": 19,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              245,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "range": [
                          231,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 9
                          },
                          "start": {
                            "column": 33,
                            "line": 7
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
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 7
                              },
                              "start": {
                                "column": 23,
                                "line": 7
                              }
                            },
                            "range": [
                              221,
                              229
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                223,
                                229
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 7
                                },
                                "start": {
                                  "column": 25,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            219,
                            229
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      206,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "range": [
                  175,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                169,
                291
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          21,
          293
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          20
        ],
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        293
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
      "column": 1,
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
