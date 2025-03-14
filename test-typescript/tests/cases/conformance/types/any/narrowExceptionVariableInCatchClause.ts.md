__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    587
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
        "name": "isFooError",
        "optional": false,
        "range": [
          17,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
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
          "name": "x",
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
            28,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 71,
            "line": 1
          },
          "start": {
            "column": 35,
            "line": 1
          }
        },
        "range": [
          35,
          71
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 1
              },
              "start": {
                "column": 42,
                "line": 1
              }
            },
            "range": [
              42,
              71
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      44,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
                      }
                    },
                    "range": [
                      48,
                      55
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'foo'",
                        "value": "foo",
                        "range": [
                          50,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 1
                          },
                          "start": {
                            "column": 50,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        50,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 1
                        },
                        "start": {
                          "column": 50,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    44,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 1
                    },
                    "start": {
                      "column": 44,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dontPanic",
                    "optional": false,
                    "range": [
                      57,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 1
                      },
                      "start": {
                        "column": 57,
                        "line": 1
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "static": false,
                  "range": [
                    57,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 1
                    },
                    "start": {
                      "column": 57,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                42,
                71
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            }
          },
          "range": [
            37,
            71
          ],
          "loc": {
            "end": {
              "column": 71,
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
        72
      ],
      "loc": {
        "end": {
          "column": 72,
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                104,
                134
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": {
                      "type": "IfStatement",
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ThrowStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "err",
                              "optional": false,
                              "range": [
                                564,
                                567
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 20
                                },
                                "start": {
                                  "column": 18,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              558,
                              568
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 20
                              },
                              "start": {
                                "column": 12,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          544,
                          578
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 21
                          },
                          "start": {
                            "column": 13,
                            "line": 19
                          }
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "range": [
                                  422,
                                  425
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 15
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "message",
                                "optional": false,
                                "range": [
                                  426,
                                  433
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                422,
                                433
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 15
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              422,
                              434
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "range": [
                                  447,
                                  450
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 16
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "massage",
                                "optional": false,
                                "range": [
                                  451,
                                  458
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                447,
                                458
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 16
                                },
                                "start": {
                                  "column": 12,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              447,
                              459
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 16
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          408,
                          529
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 17
                          },
                          "start": {
                            "column": 39,
                            "line": 14
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "instanceof",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "range": [
                            386,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 14
                            },
                            "start": {
                              "column": 17,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "range": [
                            401,
                            406
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 14
                            },
                            "start": {
                              "column": 32,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          386,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        382,
                        578
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "range": [
                                  248,
                                  251
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 10
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dontPanic",
                                "optional": false,
                                "range": [
                                  252,
                                  261
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                248,
                                261
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 10
                                },
                                "start": {
                                  "column": 12,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              248,
                              263
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 10
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            248,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "range": [
                                  283,
                                  286
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 11
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doPanic",
                                "optional": false,
                                "range": [
                                  287,
                                  294
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                283,
                                294
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 11
                                },
                                "start": {
                                  "column": 12,
                                  "line": 11
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              283,
                              296
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            283,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        234,
                        367
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      }
                    },
                    "test": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "range": [
                            228,
                            231
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 9
                            },
                            "start": {
                              "column": 23,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isFooError",
                        "optional": false,
                        "range": [
                          217,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        217,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      213,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  151,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "range": [
                  146,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                139,
                584
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              100,
              584
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          94,
          586
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 20,
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
        "name": "tryCatch",
        "optional": false,
        "range": [
          83,
          91
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        74,
        586
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
