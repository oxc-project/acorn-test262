__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1625
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          350
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "amount",
              "optional": false,
              "range": [
                25,
                31
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                31,
                39
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  33,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              17,
              40
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                45,
                56
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
                56,
                112
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            88,
                            92
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "range": [
                            93,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 13,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          88,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "100",
                        "value": 100,
                        "range": [
                          102,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 22,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        88,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      88,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  78,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 27,
                          "line": 3
                        }
                      },
                      "range": [
                        68,
                        76
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          70,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      64,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
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
                    57,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
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
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              45,
              112
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
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
              "name": "eat",
              "optional": false,
              "range": [
                124,
                127
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
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
                127,
                348
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            168,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "range": [
                            173,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 7
                            },
                            "start": {
                              "column": 13,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          168,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "amountToEat",
                        "optional": false,
                        "range": [
                          183,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 23,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        168,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      168,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              327,
                              331
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 13
                              },
                              "start": {
                                "column": 19,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            320,
                            332
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        306,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 12
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  240,
                                  244
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 9
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "amount",
                                "optional": false,
                                "range": [
                                  245,
                                  251
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                240,
                                251
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 9
                                },
                                "start": {
                                  "column": 12,
                                  "line": 9
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                254,
                                255
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 9
                                },
                                "start": {
                                  "column": 26,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              240,
                              255
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
                            240,
                            256
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              276,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 10
                              },
                              "start": {
                                "column": 19,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            269,
                            282
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
                        }
                      ],
                      "range": [
                        226,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 8
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            208,
                            212
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "range": [
                            213,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          208,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          223,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 8
                          },
                          "start": {
                            "column": 27,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        208,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      204,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  158,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 45,
                    "line": 6
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
                  "name": "amountToEat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    },
                    "range": [
                      139,
                      147
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        141,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 28,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    128,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 6
                  },
                  "start": {
                    "column": 35,
                    "line": 6
                  }
                },
                "range": [
                  148,
                  157
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    150,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "range": [
              117,
              348
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
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
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Food",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
        350
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
          382,
          467
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                388,
                399
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                399,
                465
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            453,
                            457
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          447,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        447,
                        458
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      447,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  437,
                  465
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 53,
                    "line": 18
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
                      }
                    },
                    "range": [
                      404,
                      412
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        406,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 18
                        },
                        "start": {
                          "column": 22,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    400,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 18
                        },
                        "start": {
                          "column": 43,
                          "line": 18
                        }
                      },
                      "range": [
                        427,
                        435
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          429,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 18
                          },
                          "start": {
                            "column": 45,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      421,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 18
                      },
                      "start": {
                        "column": 37,
                        "line": 18
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    414,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 18
                    },
                    "start": {
                      "column": 30,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              388,
              465
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 31,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "range": [
          357,
          368
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Food",
        "optional": false,
        "range": [
          377,
          381
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 17
          },
          "start": {
            "column": 26,
            "line": 17
          }
        }
      },
      "range": [
        351,
        467
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          503,
          623
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDairyFree",
              "optional": false,
              "range": [
                517,
                528
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 23
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              },
              "range": [
                528,
                537
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  530,
                  537
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 23
                  },
                  "start": {
                    "column": 25,
                    "line": 23
                  }
                }
              }
            },
            "value": null,
            "range": [
              509,
              538
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                543,
                554
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
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
                554,
                621
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
                          "type": "Literal",
                          "raw": "\"Ice Cream\"",
                          "value": "Ice Cream",
                          "range": [
                            594,
                            605
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 25
                            },
                            "start": {
                              "column": 14,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flavor",
                          "optional": false,
                          "range": [
                            607,
                            613
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 25
                            },
                            "start": {
                              "column": 27,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          588,
                          593
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        588,
                        614
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      588,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  578,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 39,
                    "line": 24
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
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 24
                        },
                        "start": {
                          "column": 29,
                          "line": 24
                        }
                      },
                      "range": [
                        568,
                        576
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          570,
                          576
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 24
                          },
                          "start": {
                            "column": 31,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      562,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 24
                      },
                      "start": {
                        "column": 23,
                        "line": 24
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    555,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 24
                    },
                    "start": {
                      "column": 16,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 15,
                  "line": 24
                }
              }
            },
            "range": [
              543,
              621
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 35,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IceCream",
        "optional": false,
        "range": [
          474,
          482
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "range": [
          491,
          502
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 22
          },
          "start": {
            "column": 23,
            "line": 22
          }
        }
      },
      "range": [
        468,
        623
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          657,
          770
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                663,
                674
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
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
                674,
                768
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
                          "type": "Literal",
                          "raw": "\"Cookie\"",
                          "value": "Cookie",
                          "range": [
                            744,
                            752
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 30
                            },
                            "start": {
                              "column": 14,
                              "line": 30
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flavor",
                          "optional": false,
                          "range": [
                            754,
                            760
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 30
                            },
                            "start": {
                              "column": 24,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          738,
                          743
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 30
                          },
                          "start": {
                            "column": 8,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        738,
                        761
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      738,
                      762
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  728,
                  768
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 69,
                    "line": 29
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
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 29
                        },
                        "start": {
                          "column": 29,
                          "line": 29
                        }
                      },
                      "range": [
                        688,
                        696
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          690,
                          696
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 29
                          },
                          "start": {
                            "column": 31,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      682,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 29
                      },
                      "start": {
                        "column": 23,
                        "line": 29
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    675,
                    696
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 29
                    },
                    "start": {
                      "column": 16,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isGlutenFree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 29
                        },
                        "start": {
                          "column": 58,
                          "line": 29
                        }
                      },
                      "range": [
                        717,
                        726
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          719,
                          726
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 29
                          },
                          "start": {
                            "column": 60,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      705,
                      726
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 29
                      },
                      "start": {
                        "column": 46,
                        "line": 29
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    698,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 29
                    },
                    "start": {
                      "column": 39,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            },
            "range": [
              663,
              768
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 33,
            "line": 28
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cookie",
        "optional": false,
        "range": [
          630,
          636
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "range": [
          645,
          656
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 28
          },
          "start": {
            "column": 21,
            "line": 28
          }
        }
      },
      "range": [
        624,
        770
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          798,
          887
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                804,
                815
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
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
                815,
                885
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            873,
                            877
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 35
                            },
                            "start": {
                              "column": 14,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          867,
                          872
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        867,
                        878
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      867,
                      879
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  857,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 57,
                    "line": 34
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 34
                      },
                      "start": {
                        "column": 20,
                        "line": 34
                      }
                    },
                    "range": [
                      820,
                      828
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        822,
                        828
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 34
                        },
                        "start": {
                          "column": 22,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    816,
                    828
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 34
                        },
                        "start": {
                          "column": 47,
                          "line": 34
                        }
                      },
                      "range": [
                        847,
                        855
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          849,
                          855
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 34
                          },
                          "start": {
                            "column": 49,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      837,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 34
                      },
                      "start": {
                        "column": 37,
                        "line": 34
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    830,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 34
                    },
                    "start": {
                      "column": 30,
                      "line": 34
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "range": [
              804,
              885
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 27,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "range": [
          777,
          784
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Food",
        "optional": false,
        "range": [
          793,
          797
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 33
          },
          "start": {
            "column": 22,
            "line": 33
          }
        }
      },
      "range": [
        771,
        887
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          934,
          1025
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                940,
                951
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
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
                951,
                1023
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
                          "type": "Literal",
                          "raw": "\"Origen\"",
                          "value": "Origen",
                          "range": [
                            995,
                            1003
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 40
                            },
                            "start": {
                              "column": 14,
                              "line": 40
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false,
                          "range": [
                            1005,
                            1015
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 40
                            },
                            "start": {
                              "column": 24,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          989,
                          994
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 40
                          },
                          "start": {
                            "column": 8,
                            "line": 40
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        989,
                        1016
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      989,
                      1017
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  979,
                  1023
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 43,
                    "line": 39
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
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 39
                        },
                        "start": {
                          "column": 33,
                          "line": 39
                        }
                      },
                      "range": [
                        969,
                        977
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          971,
                          977
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 39
                          },
                          "start": {
                            "column": 35,
                            "line": 39
                          }
                        }
                      }
                    },
                    "range": [
                      959,
                      977
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 39
                      },
                      "start": {
                        "column": 23,
                        "line": 39
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    952,
                    977
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 39
                    },
                    "start": {
                      "column": 16,
                      "line": 39
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 15,
                  "line": 39
                }
              }
            },
            "range": [
              940,
              1023
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 46,
            "line": 38
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpensiveOrganicDogFood",
        "optional": false,
        "range": [
          894,
          917
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 38
          },
          "start": {
            "column": 6,
            "line": 38
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "range": [
          926,
          933
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 38
          },
          "start": {
            "column": 38,
            "line": 38
          }
        }
      },
      "range": [
        888,
        1025
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1072,
          1201
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1078,
                1089
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
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
                1089,
                1199
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
                          "type": "Literal",
                          "raw": "\"Nature's Logic\"",
                          "value": "Nature's Logic",
                          "range": [
                            1163,
                            1179
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 45
                            },
                            "start": {
                              "column": 14,
                              "line": 45
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false,
                          "range": [
                            1181,
                            1191
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 45
                            },
                            "start": {
                              "column": 32,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          1157,
                          1162
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 45
                          },
                          "start": {
                            "column": 8,
                            "line": 45
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1157,
                        1192
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1157,
                      1193
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  1147,
                  1199
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 73,
                    "line": 44
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
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 44
                        },
                        "start": {
                          "column": 33,
                          "line": 44
                        }
                      },
                      "range": [
                        1107,
                        1115
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1109,
                          1115
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 44
                          },
                          "start": {
                            "column": 35,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      1097,
                      1115
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 44
                      },
                      "start": {
                        "column": 23,
                        "line": 44
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    1090,
                    1115
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 44
                    },
                    "start": {
                      "column": 16,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "containsFish",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 44
                        },
                        "start": {
                          "column": 62,
                          "line": 44
                        }
                      },
                      "range": [
                        1136,
                        1145
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1138,
                          1145
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 44
                          },
                          "start": {
                            "column": 64,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      1124,
                      1145
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 44
                      },
                      "start": {
                        "column": 50,
                        "line": 44
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    1117,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 44
                    },
                    "start": {
                      "column": 43,
                      "line": 44
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 15,
                  "line": 44
                }
              }
            },
            "range": [
              1078,
              1199
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 46,
            "line": 43
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpensiveOrganicCatFood",
        "optional": false,
        "range": [
          1032,
          1055
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 43
          },
          "start": {
            "column": 6,
            "line": 43
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "range": [
          1064,
          1071
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 43
          },
          "start": {
            "column": 38,
            "line": 43
          }
        }
      },
      "range": [
        1026,
        1201
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1213,
          1245
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 11,
            "line": 48
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Slug",
        "optional": false,
        "range": [
          1208,
          1212
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 48
          },
          "start": {
            "column": 6,
            "line": 48
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1202,
        1245
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "foods",
            "optional": false,
            "range": [
              1349,
              1354
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetFood",
                "optional": false,
                "range": [
                  1361,
                  1368
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 53
                  },
                  "start": {
                    "column": 16,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'Mint chocolate chip'",
                        "value": "Mint chocolate chip",
                        "range": [
                          1382,
                          1403
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 53
                          },
                          "start": {
                            "column": 37,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false,
                      "range": [
                        1373,
                        1381
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 53
                        },
                        "start": {
                          "column": 28,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1369,
                      1404
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 53
                      },
                      "start": {
                        "column": 24,
                        "line": 53
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'Chocolate chip'",
                        "value": "Chocolate chip",
                        "range": [
                          1414,
                          1430
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 53
                          },
                          "start": {
                            "column": 69,
                            "line": 53
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          1432,
                          1437
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 53
                          },
                          "start": {
                            "column": 87,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "range": [
                        1407,
                        1413
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 53
                        },
                        "start": {
                          "column": 62,
                          "line": 53
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1407,
                      1438
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 53
                      },
                      "start": {
                        "column": 62,
                        "line": 53
                      }
                    }
                  },
                  {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'Peanut butter'",
                        "value": "Peanut butter",
                        "range": [
                          1452,
                          1467
                        ],
                        "loc": {
                          "end": {
                            "column": 122,
                            "line": 53
                          },
                          "start": {
                            "column": 107,
                            "line": 53
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1469,
                          1473
                        ],
                        "loc": {
                          "end": {
                            "column": 128,
                            "line": 53
                          },
                          "start": {
                            "column": 124,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "range": [
                        1445,
                        1451
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 53
                        },
                        "start": {
                          "column": 100,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1441,
                      1474
                    ],
                    "loc": {
                      "end": {
                        "column": 129,
                        "line": 53
                      },
                      "start": {
                        "column": 96,
                        "line": 53
                      }
                    }
                  }
                ],
                "range": [
                  1369,
                  1474
                ],
                "loc": {
                  "end": {
                    "column": 129,
                    "line": 53
                  },
                  "start": {
                    "column": 24,
                    "line": 53
                  }
                }
              },
              "range": [
                1361,
                1475
              ],
              "loc": {
                "end": {
                  "column": 130,
                  "line": 53
                },
                "start": {
                  "column": 16,
                  "line": 53
                }
              }
            },
            "range": [
              1357,
              1475
            ],
            "loc": {
              "end": {
                "column": 130,
                "line": 53
              },
              "start": {
                "column": 12,
                "line": 53
              }
            }
          },
          "range": [
            1349,
            1475
          ],
          "loc": {
            "end": {
              "column": 130,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1345,
        1476
      ],
      "loc": {
        "end": {
          "column": 131,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "name": "foods2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 54
                },
                "start": {
                  "column": 10,
                  "line": 54
                }
              },
              "range": [
                1487,
                1502
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MonsterFood",
                    "optional": false,
                    "range": [
                      1489,
                      1500
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 54
                      },
                      "start": {
                        "column": 12,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1489,
                    1500
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 54
                    },
                    "start": {
                      "column": 12,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1489,
                  1502
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 54
                  },
                  "start": {
                    "column": 12,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1481,
              1502
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetFood",
                "optional": false,
                "range": [
                  1509,
                  1516
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 54
                  },
                  "start": {
                    "column": 32,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'Mint chocolate chip'",
                        "value": "Mint chocolate chip",
                        "range": [
                          1530,
                          1551
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 54
                          },
                          "start": {
                            "column": 53,
                            "line": 54
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false,
                      "range": [
                        1521,
                        1529
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 54
                        },
                        "start": {
                          "column": 44,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1517,
                      1552
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 54
                      },
                      "start": {
                        "column": 40,
                        "line": 54
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'Chocolate chip'",
                        "value": "Chocolate chip",
                        "range": [
                          1562,
                          1578
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 54
                          },
                          "start": {
                            "column": 85,
                            "line": 54
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          1580,
                          1585
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 54
                          },
                          "start": {
                            "column": 103,
                            "line": 54
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "range": [
                        1555,
                        1561
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 54
                        },
                        "start": {
                          "column": 78,
                          "line": 54
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1555,
                      1586
                    ],
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 54
                      },
                      "start": {
                        "column": 78,
                        "line": 54
                      }
                    }
                  },
                  {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'Peanut butter'",
                        "value": "Peanut butter",
                        "range": [
                          1600,
                          1615
                        ],
                        "loc": {
                          "end": {
                            "column": 138,
                            "line": 54
                          },
                          "start": {
                            "column": 123,
                            "line": 54
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1617,
                          1621
                        ],
                        "loc": {
                          "end": {
                            "column": 144,
                            "line": 54
                          },
                          "start": {
                            "column": 140,
                            "line": 54
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "range": [
                        1593,
                        1599
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 54
                        },
                        "start": {
                          "column": 116,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1589,
                      1622
                    ],
                    "loc": {
                      "end": {
                        "column": 145,
                        "line": 54
                      },
                      "start": {
                        "column": 112,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  1517,
                  1622
                ],
                "loc": {
                  "end": {
                    "column": 145,
                    "line": 54
                  },
                  "start": {
                    "column": 40,
                    "line": 54
                  }
                }
              },
              "range": [
                1509,
                1623
              ],
              "loc": {
                "end": {
                  "column": 146,
                  "line": 54
                },
                "start": {
                  "column": 32,
                  "line": 54
                }
              }
            },
            "range": [
              1505,
              1623
            ],
            "loc": {
              "end": {
                "column": 146,
                "line": 54
              },
              "start": {
                "column": 28,
                "line": 54
              }
            }
          },
          "range": [
            1481,
            1623
          ],
          "loc": {
            "end": {
              "column": 146,
              "line": 54
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1477,
        1624
      ],
      "loc": {
        "end": {
          "column": 147,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
