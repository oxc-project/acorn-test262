__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    272
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
        "name": "assert",
        "optional": false,
        "range": [
          17,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            },
            "range": [
              29,
              34
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                31,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            }
          },
          "range": [
            24,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 1
          },
          "start": {
            "column": 35,
            "line": 1
          }
        },
        "range": [
          35,
          50
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              45,
              50
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          },
          "typeAnnotation": null,
          "range": [
            37,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 1
            },
            "start": {
              "column": 37,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        51
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 1
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
                  "name": "val",
                  "optional": false,
                  "range": [
                    128,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "range": [
                      134,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      144,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    134,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "range": [
                  128,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              122,
              154
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  211,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 5
                  },
                  "start": {
                    "column": 56,
                    "line": 5
                  }
                }
              },
              "consequent": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "range": [
                            180,
                            185
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
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "range": [
                            190,
                            199
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 5
                            },
                            "start": {
                              "column": 35,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          180,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 5
                          },
                          "start": {
                            "column": 25,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "range": [
                        173,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      173,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "range": [
                      202,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 5
                      },
                      "start": {
                        "column": 47,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  173,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "range": [
                  166,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                166,
                215
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              159,
              216
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          116,
          272
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 63,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          62,
          66
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            },
            "range": [
              72,
              99
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    74,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    83,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 30,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    90,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 3
                    },
                    "start": {
                      "column": 37,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                74,
                99
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            }
          },
          "range": [
            67,
            99
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 3
          },
          "start": {
            "column": 47,
            "line": 3
          }
        },
        "range": [
          100,
          115
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "range": [
                102,
                108
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 49,
                  "line": 3
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                111,
                115
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 3
                },
                "start": {
                  "column": 58,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            102,
            115
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 3
            },
            "start": {
              "column": 49,
              "line": 3
            }
          }
        }
      },
      "range": [
        53,
        272
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
      "column": 1,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
