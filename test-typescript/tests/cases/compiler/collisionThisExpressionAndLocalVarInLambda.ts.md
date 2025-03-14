__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    185
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
        "name": "alert",
        "optional": false,
        "range": [
          17,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            },
            "range": [
              31,
              36
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                33,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            }
          },
          "range": [
            23,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 1
          },
          "start": {
            "column": 37,
            "line": 1
          }
        },
        "range": [
          37,
          43
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            39,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 39,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        44
      ],
      "loc": {
        "end": {
          "column": 44,
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
            "name": "x",
            "optional": false,
            "range": [
              50,
              51
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
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doStuff",
                  "optional": false,
                  "range": [
                    60,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
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
                                "name": "_this",
                                "optional": false,
                                "range": [
                                  103,
                                  108
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 5
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  111,
                                  112
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                103,
                                112
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
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
                            99,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "range": [
                                  138,
                                  142
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "range": [
                                129,
                                137
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
                              129,
                              143
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 6
                              },
                              "start": {
                                "column": 15,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            122,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        89,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 7
                        },
                        "start": {
                          "column": 33,
                          "line": 4
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      83,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 27,
                        "line": 4
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
                      "name": "callback",
                      "optional": false,
                      "range": [
                        70,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 4
                        },
                        "start": {
                          "column": 14,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    69,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "range": [
                  60,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              54,
              152
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            50,
            152
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
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
        46,
        152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        180,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 27,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alert",
                    "optional": false,
                    "range": [
                      174,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    174,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 21,
                      "line": 9
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      169,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  169,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
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
                "name": "x",
                "optional": false,
                "range": [
                  159,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 9
                  },
                  "start": {
                    "column": 6,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "range": [
                  161,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                159,
                168
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              159,
              183
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "alert",
          "optional": false,
          "range": [
            153,
            158
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          153,
          184
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        153,
        185
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 9
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
      "column": 32,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
