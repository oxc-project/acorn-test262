__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    184
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
        "name": "repro",
        "optional": false,
        "range": [
          34,
          39
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 32,
                "line": 3
              }
            },
            "range": [
              49,
              108
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
                    "name": "params",
                    "optional": false,
                    "range": [
                      55,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 4
                      },
                      "start": {
                        "column": 2,
                        "line": 4
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
                        "column": 11,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    },
                    "range": [
                      61,
                      64
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          63,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        63,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 4
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    55,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 2,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "range": [
                      68,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 5
                      },
                      "start": {
                        "column": 2,
                        "line": 5
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
                        "column": 39,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    },
                    "range": [
                      76,
                      105
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        },
                        "range": [
                          81,
                          105
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 5
                                  }
                                },
                                "range": [
                                  91,
                                  94
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      93,
                                      94
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
                                    93,
                                    94
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
                                }
                              },
                              "range": [
                                85,
                                94
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 19,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 5
                              },
                              "start": {
                                "column": 30,
                                "line": 5
                              }
                            },
                            "range": [
                              96,
                              105
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                99,
                                105
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 5
                                },
                                "start": {
                                  "column": 33,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            84,
                            105
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 5
                            },
                            "start": {
                              "column": 18,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        78,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    68,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
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
                51,
                108
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            }
          },
          "range": [
            43,
            108
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 8,
            "line": 6
          },
          "start": {
            "column": 2,
            "line": 6
          }
        },
        "range": [
          109,
          115
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            111,
            115
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        },
        "range": [
          39,
          42
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        17,
        116
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 6
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "range": [
                    128,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 9
                    },
                    "start": {
                      "column": 2,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 9
                    },
                    "start": {
                      "column": 10,
                      "line": 9
                    }
                  }
                },
                "range": [
                  128,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "range": [
                    141,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 10
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
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                171,
                                172
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 10
                                },
                                "start": {
                                  "column": 32,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                175,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 10
                                },
                                "start": {
                                  "column": 36,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              171,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 10
                              },
                              "start": {
                                "column": 32,
                                "line": 10
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                166,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 10
                                },
                                "start": {
                                  "column": 27,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "range": [
                            166,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 10
                            },
                            "start": {
                              "column": 27,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          159,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      157,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    151,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "range": [
                  141,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 2,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              124,
              181
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "repro",
          "optional": false,
          "range": [
            118,
            123
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          118,
          182
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        118,
        183
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
