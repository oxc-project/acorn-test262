__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    383
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
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
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 9,
                        "line": 2
                      }
                    },
                    "range": [
                      34,
                      39
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        36,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    31,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "init": null,
                "range": [
                  31,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              27,
              40
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "range": [
                      239,
                      361
                    ],
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            254,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 20
                            },
                            "start": {
                              "column": 13,
                              "line": 20
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "value": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              262,
                              265
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 20
                              },
                              "start": {
                                "column": 21,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            258,
                            267
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 20
                            },
                            "start": {
                              "column": 17,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          247,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 20
                          },
                          "start": {
                            "column": 6,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            283,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 22
                            },
                            "start": {
                              "column": 13,
                              "line": 22
                            }
                          }
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "range": [
                            284,
                            315
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "NewExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "range": [
                                      301,
                                      304
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    297,
                                    306
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 23
                                    }
                                  }
                                },
                                "range": [
                                  297,
                                  307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "range": [
                              287,
                              315
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 24
                              },
                              "start": {
                                "column": 17,
                                "line": 22
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
                              "column": 7,
                              "line": 24
                            },
                            "start": {
                              "column": 14,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          276,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 24
                          },
                          "start": {
                            "column": 6,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "range": [
                            323,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 26
                            },
                            "start": {
                              "column": 6,
                              "line": 26
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
                            324,
                            355
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "NewExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "range": [
                                      341,
                                      344
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "range": [
                                    337,
                                    346
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 27
                                    }
                                  }
                                },
                                "range": [
                                  337,
                                  347
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 27
                                  }
                                }
                              }
                            ],
                            "range": [
                              327,
                              355
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 28
                              },
                              "start": {
                                "column": 10,
                                "line": 26
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
                              "column": 7,
                              "line": 28
                            },
                            "start": {
                              "column": 7,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          323,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 28
                          },
                          "start": {
                            "column": 6,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 29
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      235,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 19
                      },
                      "start": {
                        "column": 10,
                        "line": 19
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    229,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        371,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      367,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 31
                      },
                      "start": {
                        "column": 4,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    367,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                223,
                381
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 32
                },
                "start": {
                  "column": 7,
                  "line": 18
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        56,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "ClassExpression",
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "range": [
                          72,
                          194
                        ],
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "computed": false,
                            "declare": false,
                            "decorators": [],
                            "definite": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                87,
                                88
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 5
                                },
                                "start": {
                                  "column": 13,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "override": false,
                            "readonly": false,
                            "static": true,
                            "value": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "range": [
                                  95,
                                  98
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                91,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 5
                                },
                                "start": {
                                  "column": 17,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              80,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 5
                              },
                              "start": {
                                "column": 6,
                                "line": 5
                              }
                            }
                          },
                          {
                            "type": "MethodDefinition",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                116,
                                117
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 7
                                },
                                "start": {
                                  "column": 13,
                                  "line": 7
                                }
                              }
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": true,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                117,
                                148
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "NewExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "range": [
                                          134,
                                          137
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 15,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "range": [
                                        130,
                                        139
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      130,
                                      140
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  120,
                                  148
                                ],
                                "loc": {
                                  "end": {
                                    "column": 7,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 7
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
                                  "column": 7,
                                  "line": 9
                                },
                                "start": {
                                  "column": 14,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              109,
                              148
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 9
                              },
                              "start": {
                                "column": 6,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "MethodDefinition",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "range": [
                                156,
                                157
                              ],
                              "loc": {
                                "end": {
                                  "column": 7,
                                  "line": 11
                                },
                                "start": {
                                  "column": 6,
                                  "line": 11
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
                                157,
                                188
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "NewExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "range": [
                                          174,
                                          177
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 15,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        170,
                                        179
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "range": [
                                      170,
                                      180
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 12
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  160,
                                  188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 7,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 11
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
                                  "column": 7,
                                  "line": 13
                                },
                                "start": {
                                  "column": 7,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              156,
                              188
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 13
                              },
                              "start": {
                                "column": 6,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 14
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        }
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          68,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "implements": [],
                      "superClass": null,
                      "range": [
                        62,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 14
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      56,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    56,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        205,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      201,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 16
                      },
                      "start": {
                        "column": 4,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    201,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                50,
                215
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                47,
                48
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
            "range": [
              43,
              381
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          23,
          383
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          9,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            },
            "range": [
              12,
              21
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                14,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            }
          },
          "range": [
            11,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 11,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        383
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
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
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
