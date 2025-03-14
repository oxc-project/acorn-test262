__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    245
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
        "name": "test",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            },
            "range": [
              127,
              137
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "range": [
                  129,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "range": [
                129,
                137
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            }
          },
          "range": [
            120,
            137
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 2,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "methods",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 28,
                "line": 4
              }
            },
            "range": [
              146,
              156
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMethods",
                "optional": false,
                "range": [
                  148,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              },
              "range": [
                148,
                156
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            }
          },
          "range": [
            139,
            156
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 4
            },
            "start": {
              "column": 21,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 4
          },
          "start": {
            "column": 39,
            "line": 4
          }
        },
        "range": [
          157,
          163
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            159,
            163
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 4
            },
            "start": {
              "column": 41,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 21,
            "line": 1
          }
        },
        "range": [
          21,
          119
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                25,
                33
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              25,
              33
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  60,
                  116
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      61,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ctx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 3
                            },
                            "start": {
                              "column": 38,
                              "line": 3
                            }
                          },
                          "range": [
                            73,
                            83
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "range": [
                                75,
                                83
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 3
                                },
                                "start": {
                                  "column": 40,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              75,
                              83
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 3
                              },
                              "start": {
                                "column": 40,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          70,
                          83
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 3
                          },
                          "start": {
                            "column": 35,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            88,
                            92
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
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 3
                            },
                            "start": {
                              "column": 57,
                              "line": 3
                            }
                          },
                          "range": [
                            92,
                            103
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      95,
                                      96
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 60,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "range": [
                                    95,
                                    96
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 61,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 3
                                    }
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "2",
                                    "value": 2,
                                    "range": [
                                      99,
                                      100
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 65,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 64,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "range": [
                                    99,
                                    100
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 65,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 64,
                                      "line": 3
                                    }
                                  }
                                }
                              ],
                              "range": [
                                95,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 3
                                },
                                "start": {
                                  "column": 60,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              94,
                              103
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 3
                              },
                              "start": {
                                "column": 59,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          85,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 3
                          },
                          "start": {
                            "column": 50,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 3
                        },
                        "start": {
                          "column": 70,
                          "line": 3
                        }
                      },
                      "range": [
                        105,
                        115
                      ],
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          108,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 3
                          },
                          "start": {
                            "column": 73,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      69,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  54,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                54,
                116
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMethods",
              "optional": false,
              "range": [
                37,
                45
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              37,
              116
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        0,
        164
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 4
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "range": [
                    180,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    187,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  180,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              174,
              193
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "checkLimit",
                  "optional": false,
                  "range": [
                    203,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
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
                    "body": [],
                    "range": [
                      233,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
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
                      "name": "ctx",
                      "optional": false,
                      "range": [
                        216,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 17,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "range": [
                          221,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 22,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          227,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 11
                          },
                          "start": {
                            "column": 28,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        221,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    215,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "range": [
                  203,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              197,
              240
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            166,
            170
          ],
          "loc": {
            "end": {
              "column": 4,
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
          166,
          243
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        166,
        244
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
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
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
