__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    192
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              26
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                23,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 27,
            "line": 1
          }
        },
        "range": [
          27,
          32
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            29,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        33
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          51,
          54
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            },
            "range": [
              56,
              60
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                57,
                60
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            }
          },
          "range": [
            55,
            60
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 27,
            "line": 2
          }
        },
        "range": [
          61,
          66
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            63,
            66
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 29,
              "line": 2
            }
          }
        }
      },
      "range": [
        34,
        67
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          83,
          191
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                89,
                100
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                100,
                188
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
                          "type": "ArrowFunctionExpression",
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
                                                  "range": [
                                                    163,
                                                    164
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 21,
                                                      "line": 8
                                                    },
                                                    "start": {
                                                      "column": 20,
                                                      "line": 8
                                                    }
                                                  }
                                                },
                                                "init": {
                                                  "type": "ThisExpression",
                                                  "range": [
                                                    167,
                                                    171
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 28,
                                                      "line": 8
                                                    },
                                                    "start": {
                                                      "column": 24,
                                                      "line": 8
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  163,
                                                  171
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 8
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 8
                                                  }
                                                }
                                              }
                                            ],
                                            "declare": false,
                                            "kind": "var",
                                            "range": [
                                              159,
                                              172
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 8
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 8
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          141,
                                          177
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 4,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": [],
                                      "range": [
                                        135,
                                        177
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 4,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 7
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "range": [
                                      131,
                                      134
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    131,
                                    178
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 5,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  131,
                                  179
                                ],
                                "loc": {
                                  "end": {
                                    "column": 6,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "range": [
                              117,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 10
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            111,
                            183
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 10
                            },
                            "start": {
                              "column": 6,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          107,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 6
                          },
                          "start": {
                            "column": 2,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        107,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 4,
                          "line": 10
                        },
                        "start": {
                          "column": 2,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      107,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 2,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  103,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
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
                  "column": 2,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              89,
              188
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "range": [
          75,
          82
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        69,
        191
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 4
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
