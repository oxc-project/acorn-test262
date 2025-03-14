__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    233
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    14,
                    15
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        49,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 2
                        },
                        "start": {
                          "column": 39,
                          "line": 2
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 2
                            },
                            "start": {
                              "column": 29,
                              "line": 2
                            }
                          },
                          "range": [
                            39,
                            44
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              41,
                              44
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 2
                              },
                              "start": {
                                "column": 31,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          38,
                          44
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      37,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 27,
                        "line": 2
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                              "column": 17,
                              "line": 2
                            },
                            "start": {
                              "column": 14,
                              "line": 2
                            }
                          },
                          "range": [
                            24,
                            27
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                26,
                                27
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 2
                                },
                                "start": {
                                  "column": 16,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              26,
                              27
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 2
                              },
                              "start": {
                                "column": 16,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          23,
                          27
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 2
                          },
                          "start": {
                            "column": 13,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      },
                      "range": [
                        29,
                        33
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            32,
                            33
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 2
                            },
                            "start": {
                              "column": 22,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          32,
                          33
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 22,
                            "line": 2
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      },
                      "range": [
                        19,
                        22
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
                              20,
                              21
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 2
                              },
                              "start": {
                                "column": 10,
                                "line": 2
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            20,
                            21
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 2
                            },
                            "start": {
                              "column": 10,
                              "line": 2
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      19,
                      33
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 9,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    17,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                },
                "range": [
                  14,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    57,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            75,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 3
                            },
                            "start": {
                              "column": 22,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          75,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      73,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
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
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        },
                        "range": [
                          65,
                          68
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              67,
                              68
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 3
                              },
                              "start": {
                                "column": 14,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            67,
                            68
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 3
                            },
                            "start": {
                              "column": 14,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        64,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 3
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    },
                    "range": [
                      60,
                      63
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
                            61,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 3
                            },
                            "start": {
                              "column": 8,
                              "line": 3
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          61,
                          62
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    60,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 3
                    },
                    "start": {
                      "column": 7,
                      "line": 3
                    }
                  }
                },
                "range": [
                  57,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              8,
              80
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            80
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        80
      ],
      "loc": {
        "end": {
          "column": 1,
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
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              93,
              94
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 12,
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
              81,
              82
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              83,
              84
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          },
          "range": [
            81,
            84
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            84,
            92
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                85,
                91
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 5
            },
            "start": {
              "column": 3,
              "line": 5
            }
          }
        },
        "range": [
          81,
          95
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        81,
        96
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "x",
            "optional": false,
            "range": [
              210,
              211
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              212,
              213
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          "range": [
            210,
            213
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            213,
            221
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                214,
                220
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 6
            },
            "start": {
              "column": 3,
              "line": 6
            }
          }
        },
        "range": [
          210,
          223
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        210,
        224
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 6
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
      "column": 23,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
