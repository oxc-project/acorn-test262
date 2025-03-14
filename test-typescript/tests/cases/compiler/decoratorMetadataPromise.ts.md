__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    225
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
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              },
              "range": [
                23,
                40
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MethodDecorator",
                  "optional": false,
                  "range": [
                    25,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                },
                "range": [
                  25,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            40
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
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
          51,
          224
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "range": [
                    58,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
                      "line": 4
                    }
                  }
                },
                "range": [
                  57,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                78,
                81
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
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
                81,
                86
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  84,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
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
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              57,
              86
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "range": [
                    92,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "range": [
                  91,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                112,
                115
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
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
                115,
                148
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        144,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 7
                        },
                        "start": {
                          "column": 42,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      137,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 7
                      },
                      "start": {
                        "column": 35,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  135,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                },
                "range": [
                  117,
                  134
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      126,
                      134
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          127,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 7
                          },
                          "start": {
                            "column": 25,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      119,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    119,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 46,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "range": [
              91,
              148
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "range": [
                    154,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
                    }
                  }
                },
                "range": [
                  153,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                168,
                171
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                171,
                222
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        218,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 9
                        },
                        "start": {
                          "column": 54,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      211,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 9
                      },
                      "start": {
                        "column": 47,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  209,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 9
                  },
                  "start": {
                    "column": 45,
                    "line": 9
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    },
                    "range": [
                      173,
                      190
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          182,
                          190
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              183,
                              189
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          175,
                          182
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 9
                          },
                          "start": {
                            "column": 11,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        175,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    172,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                },
                "range": [
                  191,
                  208
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      200,
                      208
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          201,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 9
                          },
                          "start": {
                            "column": 37,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 36,
                        "line": 9
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      193,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 29,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    193,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 29,
                      "line": 9
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 58,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              }
            },
            "range": [
              153,
              222
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
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
          49,
          50
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
        43,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
