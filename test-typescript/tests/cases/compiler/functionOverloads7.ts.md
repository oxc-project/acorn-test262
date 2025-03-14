__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    181
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          180
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                24,
                27
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                27,
                30
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              30
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 3,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                45,
                59
              ],
              "async": false,
              "body": null,
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
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    },
                    "range": [
                      49,
                      57
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        51,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 20,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    46,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "range": [
              34,
              59
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 3,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                71,
                74
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
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
                74,
                101
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        94,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 4
                        },
                        "start": {
                          "column": 34,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      87,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  85,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
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
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    },
                    "range": [
                      79,
                      84
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        81,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 21,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    75,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "range": [
              63,
              101
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 3,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                112,
                113
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
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
                113,
                178
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            127,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 6
                            },
                            "start": {
                              "column": 9,
                              "line": 6
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                133,
                                137
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "range": [
                                138,
                                141
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 6
                                },
                                "start": {
                                  "column": 20,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              133,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 6
                              },
                              "start": {
                                "column": 15,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            133,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 6
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          127,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 9,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      123,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 5,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          150,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 7
                          },
                          "start": {
                            "column": 5,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"test\"",
                            "value": "test",
                            "range": [
                              165,
                              171
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 7
                              },
                              "start": {
                                "column": 20,
                                "line": 7
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
                              156,
                              160
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 7
                              },
                              "start": {
                                "column": 11,
                                "line": 7
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
                              161,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            156,
                            164
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          156,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 11,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        150,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 5,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      150,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 5,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 5
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
                  "column": 4,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              105,
              178
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 8
              },
              "start": {
                "column": 3,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
        180
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
