__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    115
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              12,
              111
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  27,
                  111
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        39,
                        40
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 3
                        },
                        "start": {
                          "column": 10,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        43,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      32,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        57,
                        60
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
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        60,
                        108
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
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression",
                                              "range": [
                                                93,
                                                97
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 50,
                                                  "line": 4
                                                },
                                                "start": {
                                                  "column": 46,
                                                  "line": 4
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "n",
                                              "optional": false,
                                              "range": [
                                                98,
                                                99
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 52,
                                                  "line": 4
                                                },
                                                "start": {
                                                  "column": 51,
                                                  "line": 4
                                                }
                                              }
                                            },
                                            "range": [
                                              93,
                                              99
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 52,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 46,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "range": [
                                              102,
                                              103
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 56,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 55,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            93,
                                            103
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 56,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 46,
                                              "line": 4
                                            }
                                          }
                                        },
                                        "range": [
                                          86,
                                          104
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 57,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 4
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      84,
                                      106
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 4
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
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        78,
                                        79
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 4
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    77,
                                    106
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 4
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        66,
                                        67
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 4
                                        }
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "raw": "2",
                                      "value": 2,
                                      "range": [
                                        68,
                                        69
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 4
                                        }
                                      }
                                    },
                                    {
                                      "type": "Literal",
                                      "raw": "3",
                                      "value": 3,
                                      "range": [
                                        70,
                                        71
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 4
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    65,
                                    72
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 4
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "map",
                                  "optional": false,
                                  "range": [
                                    73,
                                    76
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  65,
                                  76
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                65,
                                107
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 4
                                },
                                "start": {
                                  "column": 18,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              65,
                              107
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 4
                              },
                              "start": {
                                "column": 18,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          63,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
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
                          "column": 61,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      50,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 4
                      },
                      "start": {
                        "column": 3,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 2
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
                  25,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                19,
                111
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          }
        ],
        "range": [
          9,
          113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        113
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
