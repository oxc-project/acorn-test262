__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    186
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
        "name": "conforms",
        "optional": false,
        "range": [
          39,
          47
        ],
        "loc": {
          "end": {
            "column": 25,
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
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 79,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            },
            "range": [
              57,
              101
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      73,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 3
                      },
                      "start": {
                        "column": 51,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    73,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 3
                    },
                    "start": {
                      "column": 51,
                      "line": 3
                    }
                  }
                },
                "range": [
                  67,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 3
                  },
                  "start": {
                    "column": 45,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  62,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 3
                        },
                        "start": {
                          "column": 59,
                          "line": 3
                        }
                      },
                      "range": [
                        81,
                        87
                      ],
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              85,
                              86
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 3
                              },
                              "start": {
                                "column": 63,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            85,
                            86
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 3
                            },
                            "start": {
                              "column": 63,
                              "line": 3
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              83,
                              84
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 3
                              },
                              "start": {
                                "column": 61,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            83,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 3
                            },
                            "start": {
                              "column": 61,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          83,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 3
                          },
                          "start": {
                            "column": 61,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      78,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 3
                      },
                      "start": {
                        "column": 56,
                        "line": 3
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 3
                    },
                    "start": {
                      "column": 67,
                      "line": 3
                    }
                  },
                  "range": [
                    89,
                    99
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      92,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 3
                      },
                      "start": {
                        "column": 70,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  77,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 3
                  },
                  "start": {
                    "column": 55,
                    "line": 3
                  }
                }
              },
              "range": [
                59,
                101
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 3
                },
                "start": {
                  "column": 37,
                  "line": 3
                }
              }
            }
          },
          "range": [
            51,
            101
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 3
            },
            "start": {
              "column": 29,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 103,
            "line": 3
          },
          "start": {
            "column": 80,
            "line": 3
          }
        },
        "range": [
          102,
          125
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "column": 91,
                    "line": 3
                  },
                  "start": {
                    "column": 88,
                    "line": 3
                  }
                },
                "range": [
                  110,
                  113
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      112,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 3
                      },
                      "start": {
                        "column": 90,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    112,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 3
                    },
                    "start": {
                      "column": 90,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                105,
                113
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 3
                },
                "start": {
                  "column": 83,
                  "line": 3
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 103,
                "line": 3
              },
              "start": {
                "column": 93,
                "line": 3
              }
            },
            "range": [
              115,
              125
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                118,
                125
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 3
                },
                "start": {
                  "column": 96,
                  "line": 3
                }
              }
            }
          },
          "range": [
            104,
            125
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 3
            },
            "start": {
              "column": 82,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 25,
            "line": 3
          }
        },
        "range": [
          47,
          50
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
                48,
                49
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        126
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 3
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    169,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 4
                    },
                    "start": {
                      "column": 42,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    174,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 4
                    },
                    "start": {
                      "column": 47,
                      "line": 4
                    }
                  }
                },
                "range": [
                  169,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              167,
              183
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 4
              },
              "start": {
                "column": 40,
                "line": 4
              }
            }
          }
        ],
        "callee": {
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      138,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
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
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        158,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 18,
                              "line": 4
                            }
                          },
                          "range": [
                            145,
                            153
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              147,
                              153
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          144,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 17,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      143,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    138,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                136,
                165
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "conforms",
            "optional": false,
            "range": [
              127,
              135
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          "optional": false,
          "range": [
            127,
            166
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          127,
          184
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        127,
        185
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
