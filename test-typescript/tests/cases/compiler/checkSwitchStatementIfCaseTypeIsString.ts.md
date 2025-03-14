__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    206
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
        "name": "use",
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
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              27
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                24,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
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
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 28,
            "line": 1
          }
        },
        "range": [
          28,
          34
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            30,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        35
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          45,
          206
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doIt",
              "optional": false,
              "range": [
                51,
                55
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
                55,
                204
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
                                "type": "SwitchStatement",
                                "cases": [
                                  {
                                    "type": "SwitchCase",
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                166,
                                                170
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 7
                                                },
                                                "start": {
                                                  "column": 33,
                                                  "line": 7
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "use",
                                            "optional": false,
                                            "range": [
                                              162,
                                              165
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 7
                                              },
                                              "start": {
                                                "column": 29,
                                                "line": 7
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            162,
                                            171
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 29,
                                              "line": 7
                                            }
                                          }
                                        },
                                        "range": [
                                          162,
                                          172
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 29,
                                            "line": 7
                                          }
                                        }
                                      }
                                    ],
                                    "test": {
                                      "type": "Literal",
                                      "raw": "\"test\"",
                                      "value": "test",
                                      "range": [
                                        154,
                                        160
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      149,
                                      172
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 7
                                      }
                                    }
                                  }
                                ],
                                "discriminant": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "range": [
                                    128,
                                    129
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  121,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              107,
                              196
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 9
                              },
                              "start": {
                                "column": 25,
                                "line": 5
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
                              "name": "v",
                              "optional": false,
                              "range": [
                                101,
                                102
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 5
                                },
                                "start": {
                                  "column": 19,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "range": [
                            100,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 9
                            },
                            "start": {
                              "column": 18,
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            90,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
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
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            92,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 5
                            },
                            "start": {
                              "column": 10,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          90,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
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
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      90,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 9
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
                  204
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 33,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    },
                    "range": [
                      57,
                      72
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          64,
                          72
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              65,
                              71
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 18,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 17,
                            "line": 4
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "range": [
                          59,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        59,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    56,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                },
                "range": [
                  73,
                  79
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    75,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 28,
                      "line": 4
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              51,
              204
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
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
            "line": 11
          },
          "start": {
            "column": 8,
            "line": 3
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
          43,
          44
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        37,
        206
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
