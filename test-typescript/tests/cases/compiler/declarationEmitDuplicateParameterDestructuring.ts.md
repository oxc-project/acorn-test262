__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    163
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        69
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "range": [
                13,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
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
                    63,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 1
                    },
                    "start": {
                      "column": 63,
                      "line": 1
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    67,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 1
                    },
                    "start": {
                      "column": 67,
                      "line": 1
                    }
                  }
                },
                "range": [
                  63,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 1
                  },
                  "start": {
                    "column": 63,
                    "line": 1
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          22,
                          26
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 1
                          },
                          "start": {
                            "column": 22,
                            "line": 1
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          28,
                          29
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 1
                          },
                          "start": {
                            "column": 28,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        22,
                        29
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 1
                        },
                        "start": {
                          "column": 22,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          31,
                          35
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 1
                          },
                          "start": {
                            "column": 31,
                            "line": 1
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
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
                      "range": [
                        31,
                        38
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 1
                        },
                        "start": {
                          "column": 31,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 1
                      },
                      "start": {
                        "column": 40,
                        "line": 1
                      }
                    },
                    "range": [
                      40,
                      58
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
                            "name": "prop",
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
                                "column": 56,
                                "line": 1
                              },
                              "start": {
                                "column": 48,
                                "line": 1
                              }
                            },
                            "range": [
                              48,
                              56
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                50,
                                56
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
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
                        }
                      ],
                      "range": [
                        42,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
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
                    20,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                19,
                68
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              68
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          69
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 69,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        71,
        162
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "range": [
                84,
                87
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
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
                    156,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 3
                    },
                    "start": {
                      "column": 85,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    160,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 3
                    },
                    "start": {
                      "column": 89,
                      "line": 3
                    }
                  }
                },
                "range": [
                  156,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 3
                  },
                  "start": {
                    "column": 85,
                    "line": 3
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          93,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          99,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        93,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 3
                      },
                      "start": {
                        "column": 31,
                        "line": 3
                      }
                    },
                    "range": [
                      102,
                      120
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
                            "name": "prop",
                            "optional": false,
                            "range": [
                              106,
                              110
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 3
                              },
                              "start": {
                                "column": 35,
                                "line": 3
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
                                "column": 47,
                                "line": 3
                              },
                              "start": {
                                "column": 39,
                                "line": 3
                              }
                            },
                            "range": [
                              110,
                              118
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                112,
                                118
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 3
                                },
                                "start": {
                                  "column": 41,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            106,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 3
                            },
                            "start": {
                              "column": 35,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        104,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 3
                        },
                        "start": {
                          "column": 33,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    91,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          124,
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 3
                          },
                          "start": {
                            "column": 53,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          130,
                          131
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 3
                          },
                          "start": {
                            "column": 59,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        124,
                        131
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 3
                        },
                        "start": {
                          "column": 53,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 3
                      },
                      "start": {
                        "column": 62,
                        "line": 3
                      }
                    },
                    "range": [
                      133,
                      151
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
                            "name": "prop",
                            "optional": false,
                            "range": [
                              137,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 3
                              },
                              "start": {
                                "column": 66,
                                "line": 3
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
                                "column": 78,
                                "line": 3
                              },
                              "start": {
                                "column": 70,
                                "line": 3
                              }
                            },
                            "range": [
                              141,
                              149
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                143,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 3
                                },
                                "start": {
                                  "column": 72,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            137,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 3
                            },
                            "start": {
                              "column": 66,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        135,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 3
                        },
                        "start": {
                          "column": 64,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    122,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 3
                    },
                    "start": {
                      "column": 51,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                90,
                161
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "range": [
              84,
              161
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          78,
          162
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 91,
          "line": 3
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
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
