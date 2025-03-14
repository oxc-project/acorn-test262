__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    178
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
            "name": "localeName",
            "optional": false,
            "range": [
              6,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"zh-CN\"",
            "value": "zh-CN",
            "range": [
              19,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          "range": [
            6,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
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
                          87,
                          88
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          91,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        87,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    83,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
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
                77,
                97
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 49,
                  "line": 2
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  70,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 42,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              70,
              97
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 42,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "range": [
                    48,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "./locales/",
                    "raw": "./locales/"
                  },
                  "range": [
                    35,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": ".js",
                    "raw": ".js"
                  },
                  "range": [
                    58,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 2
                    },
                    "start": {
                      "column": 30,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                35,
                63
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "range": [
              28,
              64
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              65,
              69
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 2
              },
              "start": {
                "column": 37,
                "line": 2
              }
            }
          },
          "range": [
            28,
            69
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          28,
          98
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        28,
        99
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
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
                          165,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          169,
                          172
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
                      "range": [
                        165,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    161,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
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
                155,
                175
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 54,
                  "line": 6
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  148,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 6
                  },
                  "start": {
                    "column": 47,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              148,
              175
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 47,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "\"./locales/\"",
                  "value": "./locales/",
                  "range": [
                    108,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 6
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "range": [
                    123,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                "range": [
                  108,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\".js\"",
                "value": ".js",
                "range": [
                  136,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 35,
                    "line": 6
                  }
                }
              },
              "range": [
                108,
                141
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "range": [
              101,
              142
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              143,
              147
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 42,
                "line": 6
              }
            }
          },
          "range": [
            101,
            147
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          101,
          176
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        101,
        177
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
