__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    60,
    504
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          103,
          504
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                109,
                120
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                120,
                141
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  138,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 3
                        },
                        "start": {
                          "column": 28,
                          "line": 3
                        }
                      },
                      "range": [
                        133,
                        136
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            135,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 3
                            },
                            "start": {
                              "column": 30,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          135,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 3
                          },
                          "start": {
                            "column": 30,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      128,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    121,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              109,
              141
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "then",
              "optional": false,
              "range": [
                146,
                150
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
                150,
                502
              ],
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            213,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  225,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 5
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "range": [
                                  230,
                                  235
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                225,
                                235
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 5
                                },
                                "start": {
                                  "column": 24,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cb",
                            "optional": false,
                            "range": [
                              222,
                              224
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 5
                              },
                              "start": {
                                "column": 21,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            222,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 21,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          213,
                          236
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      209,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "range": [
                            316,
                            317
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    387,
                                    388
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 84,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 7
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    389,
                                    395
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 91,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 85,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  387,
                                  395
                                ],
                                "loc": {
                                  "end": {
                                    "column": 91,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 83,
                                    "line": 7
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
                                  "range": [
                                    382,
                                    383
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 79,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 7
                                    }
                                  }
                                }
                              ],
                              "range": [
                                382,
                                395
                              ],
                              "loc": {
                                "end": {
                                  "column": 91,
                                  "line": 7
                                },
                                "start": {
                                  "column": 78,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "raw": "\"abc\"",
                                    "value": "abc",
                                    "range": [
                                      358,
                                      363
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 7
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
                                      "range": [
                                        353,
                                        354
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 7
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    353,
                                    363
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 7
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "async": false,
                                      "body": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "range": [
                                          335,
                                          341
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 7
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
                                          "range": [
                                            330,
                                            331
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 7
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        330,
                                        341
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 7
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
                                        320,
                                        324
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "range": [
                                        325,
                                        329
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      320,
                                      329
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    320,
                                    342
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 7
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "range": [
                                    348,
                                    352
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  320,
                                  352
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                320,
                                364
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "range": [
                                377,
                                381
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 7
                                },
                                "start": {
                                  "column": 73,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              320,
                              381
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            320,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 92,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          316,
                          396
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      312,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "range": [
                            488,
                            494
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 8
                            },
                            "start": {
                              "column": 26,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Chain2",
                        "optional": false,
                        "range": [
                          481,
                          487
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 8
                          },
                          "start": {
                            "column": 19,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        477,
                        495
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      470,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                  199,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 57,
                    "line": 4
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
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
                        "line": 4
                      }
                    },
                    "range": [
                      173,
                      186
                    ],
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
                                "column": 38,
                                "line": 4
                              },
                              "start": {
                                "column": 35,
                                "line": 4
                              }
                            },
                            "range": [
                              177,
                              180
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  179,
                                  180
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                179,
                                180
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 4
                                },
                                "start": {
                                  "column": 37,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            176,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 4
                            },
                            "start": {
                              "column": 34,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 4
                          },
                          "start": {
                            "column": 40,
                            "line": 4
                          }
                        },
                        "range": [
                          182,
                          186
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              185,
                              186
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 4
                              },
                              "start": {
                                "column": 43,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            185,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 4
                            },
                            "start": {
                              "column": 43,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        175,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 33,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    171,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 4
                    },
                    "start": {
                      "column": 29,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 4
                  },
                  "start": {
                    "column": 45,
                    "line": 4
                  }
                },
                "range": [
                  187,
                  198
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      195,
                      198
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "range": [
                            196,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 4
                            },
                            "start": {
                              "column": 54,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          196,
                          197
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 4
                          },
                          "start": {
                            "column": 54,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 4
                      },
                      "start": {
                        "column": 53,
                        "line": 4
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false,
                    "range": [
                      189,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    189,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 4
                    },
                    "start": {
                      "column": 47,
                      "line": 4
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                },
                "range": [
                  150,
                  170
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "range": [
                          161,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 4
                          },
                          "start": {
                            "column": 19,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        161,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        151,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 4
                        },
                        "start": {
                          "column": 9,
                          "line": 4
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      151,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              146,
              502
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 4
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
            "column": 43,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain2",
        "optional": false,
        "range": [
          66,
          72
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 2
          },
          "start": {
            "column": 12,
            "line": 2
          }
        },
        "range": [
          72,
          102
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      85,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
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
                        "line": 2
                      },
                      "start": {
                        "column": 31,
                        "line": 2
                      }
                    },
                    "range": [
                      91,
                      99
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        93,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 33,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    85,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                83,
                101
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
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
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              73,
              101
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        60,
        504
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
