__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    184
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                20
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
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
              }
            },
            "range": [
              12,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            20
          ],
          "loc": {
            "end": {
              "column": 20,
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
      "kind": "let",
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "field3",
            "optional": false,
            "range": [
              29,
              35
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"field3\"",
            "value": "field3",
            "range": [
              38,
              46
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "range": [
            29,
            46
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        23,
        47
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          57,
          183
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        68,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      64,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 6
                      },
                      "start": {
                        "column": 5,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    64,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "range": [
                  63,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field1",
              "optional": false,
              "range": [
                86,
                92
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                95,
                96
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 6
                },
                "start": {
                  "column": 36,
                  "line": 6
                }
              }
            },
            "range": [
              63,
              97
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        107,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 7
                        },
                        "start": {
                          "column": 9,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      103,
                      106
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
                  "optional": false,
                  "range": [
                    103,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "range": [
                  102,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"field2\"",
              "value": "field2",
              "range": [
                126,
                134
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                138,
                139
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 7
                }
              }
            },
            "range": [
              102,
              140
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        150,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      146,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 8
                      },
                      "start": {
                        "column": 5,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    146,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
                    }
                  }
                },
                "range": [
                  145,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field3",
              "optional": false,
              "range": [
                169,
                175
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 28,
                  "line": 8
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                179,
                180
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 8
                },
                "start": {
                  "column": 38,
                  "line": 8
                }
              }
            },
            "range": [
              145,
              181
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
            "column": 8,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          55,
          56
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        49,
        183
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
