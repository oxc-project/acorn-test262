__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    330
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          157
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
                16,
                17
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
            "value": {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                20,
                27
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              28
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
              "name": "bar",
              "optional": false,
              "range": [
                33,
                36
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                36,
                155
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          49,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          54,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 4
                          },
                          "start": {
                            "column": 13,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        49,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      49,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
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
                          "name": "f",
                          "optional": false,
                          "range": [
                            93,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
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
                                  "column": 26,
                                  "line": 5
                                },
                                "start": {
                                  "column": 22,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                108,
                                109
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 27,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              103,
                              109
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 22,
                                "line": 5
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            97,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          93,
                          109
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      89,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
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
                  39,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 3
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
                  "column": 7,
                  "line": 3
                }
              }
            },
            "range": [
              33,
              155
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 3
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
        "name": "Foo",
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
        157
      ],
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          180,
          183
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myFn",
        "optional": false,
        "range": [
          168,
          172
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
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
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 15,
                "line": 9
              }
            },
            "range": [
              174,
              178
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                175,
                178
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            }
          },
          "range": [
            173,
            178
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "range": [
        159,
        183
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          196,
          330
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                202,
                213
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                214,
                328
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
                                                    285,
                                                    286
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 21,
                                                      "line": 14
                                                    },
                                                    "start": {
                                                      "column": 20,
                                                      "line": 14
                                                    }
                                                  }
                                                },
                                                "init": {
                                                  "type": "ThisExpression",
                                                  "range": [
                                                    289,
                                                    293
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 28,
                                                      "line": 14
                                                    },
                                                    "start": {
                                                      "column": 24,
                                                      "line": 14
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  285,
                                                  293
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 14
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 14
                                                  }
                                                }
                                              }
                                            ],
                                            "declare": false,
                                            "kind": "var",
                                            "range": [
                                              281,
                                              294
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 14
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 14
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          263,
                                          308
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 13,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": [],
                                      "range": [
                                        257,
                                        308
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 13,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 13
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "myFn",
                                    "optional": false,
                                    "range": [
                                      252,
                                      256
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    252,
                                    309
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  252,
                                  310
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "range": [
                              238,
                              320
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 16
                              },
                              "start": {
                                "column": 19,
                                "line": 12
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            232,
                            320
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 16
                            },
                            "start": {
                              "column": 13,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myFn",
                        "optional": false,
                        "range": [
                          227,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        227,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      227,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  217,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 19,
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
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "range": [
              202,
              328
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 12,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myCls",
        "optional": false,
        "range": [
          190,
          195
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        184,
        330
      ],
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
