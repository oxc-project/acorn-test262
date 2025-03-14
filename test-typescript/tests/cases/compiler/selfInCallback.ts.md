__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    119
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          119
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
              "name": "p1",
              "optional": false,
              "range": [
                18,
                20
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 8,
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
              "raw": "0",
              "value": 0,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "range": [
              11,
              25
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
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
              "name": "callback",
              "optional": false,
              "range": [
                34,
                42
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 8,
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
                42,
                63
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cb",
                        "optional": false,
                        "range": [
                          57,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 3
                          },
                          "start": {
                            "column": 31,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        57,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 31,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      57,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 31,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  56,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 30,
                    "line": 3
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
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    },
                    "range": [
                      45,
                      54
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        },
                        "range": [
                          48,
                          54
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            50,
                            54
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 3
                            },
                            "start": {
                              "column": 24,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        46,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
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
                    43,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "range": [
              27,
              63
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 1,
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
              "name": "doit",
              "optional": false,
              "range": [
                72,
                76
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                76,
                117
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
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        102,
                                        106
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p1",
                                      "optional": false,
                                      "range": [
                                        107,
                                        109
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "range": [
                                      102,
                                      109
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      110,
                                      111
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    102,
                                    111
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  102,
                                  111
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "range": [
                              101,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
                                "line": 5
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            97,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
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
                            83,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 5
                            },
                            "start": {
                              "column": 2,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "callback",
                          "optional": false,
                          "range": [
                            88,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 5
                            },
                            "start": {
                              "column": 7,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          83,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 2,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        83,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 2,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      83,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 2,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  79,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
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
                  "column": 2,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "range": [
              65,
              117
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 4
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
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        119
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
