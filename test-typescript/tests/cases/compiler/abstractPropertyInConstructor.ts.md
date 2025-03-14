__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2060
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          29,
          683
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                35,
                46
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                46,
                464
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
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "str",
                              "optional": false,
                              "range": [
                                113,
                                116
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 3
                                },
                                "start": {
                                  "column": 29,
                                  "line": 3
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parseInt",
                            "optional": false,
                            "range": [
                              104,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 3
                              },
                              "start": {
                                "column": 20,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            104,
                            117
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 3
                            },
                            "start": {
                              "column": 20,
                              "line": 3
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
                            92,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 3
                            },
                            "start": {
                              "column": 8,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "range": [
                            97,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 3
                            },
                            "start": {
                              "column": 13,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          92,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        92,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      92,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                          "name": "val",
                          "optional": false,
                          "range": [
                            132,
                            135
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  138,
                                  142
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "range": [
                                  143,
                                  147
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                138,
                                147
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 4
                                },
                                "start": {
                                  "column": 18,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "range": [
                                148,
                                159
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 4
                                },
                                "start": {
                                  "column": 28,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              138,
                              159
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 4
                              },
                              "start": {
                                "column": 18,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            138,
                            161
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 4
                            },
                            "start": {
                              "column": 18,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          132,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      128,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": null,
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
                                  196,
                                  200
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "range": [
                                  201,
                                  205
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                196,
                                205
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 7
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"Hello World\"",
                              "value": "Hello World",
                              "range": [
                                208,
                                221
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 7
                                },
                                "start": {
                                  "column": 24,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              196,
                              221
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            196,
                            222
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        182,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 18,
                          "line": 6
                        }
                      }
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "range": [
                          177,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 6
                          },
                          "start": {
                            "column": 13,
                            "line": 6
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        176,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      172,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "range": [
                            249,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
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
                            241,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            246,
                            248
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          241,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        241,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      241,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
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
                          "name": "innerFunction",
                          "optional": false,
                          "range": [
                            314,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 12
                            },
                            "start": {
                              "column": 14,
                              "line": 12
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      357,
                                      361
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
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "range": [
                                      362,
                                      366
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    357,
                                    366
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  350,
                                  367
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
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
                              336,
                              377
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 14
                              },
                              "start": {
                                "column": 36,
                                "line": 12
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            330,
                            377
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 14
                            },
                            "start": {
                              "column": 30,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          314,
                          377
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      308,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "other",
                            "optional": false,
                            "range": [
                              446,
                              451
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 17
                              },
                              "start": {
                                "column": 17,
                                "line": 17
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              452,
                              456
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 17
                              },
                              "start": {
                                "column": 23,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            446,
                            456
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 17
                            },
                            "start": {
                              "column": 17,
                              "line": 17
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
                          "name": "other",
                          "optional": false,
                          "range": [
                            437,
                            442
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            443,
                            445
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          437,
                          445
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        437,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      437,
                      458
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  82,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 51,
                    "line": 2
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    },
                    "range": [
                      50,
                      58
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        52,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 21,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    47,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 2
                      },
                      "start": {
                        "column": 34,
                        "line": 2
                      }
                    },
                    "range": [
                      65,
                      80
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "range": [
                          67,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 2
                          },
                          "start": {
                            "column": 36,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        67,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 2
                        },
                        "start": {
                          "column": 36,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    60,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 2
                    },
                    "start": {
                      "column": 29,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              35,
              464
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                479,
                483
              ],
              "loc": {
                "end": {
                  "column": 17,
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
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              },
              "range": [
                483,
                491
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  485,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 20
                  },
                  "start": {
                    "column": 19,
                    "line": 20
                  }
                }
              }
            },
            "value": null,
            "range": [
              470,
              492
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "range": [
                506,
                508
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
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
                  "column": 36,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 21
                }
              },
              "range": [
                508,
                529
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 19,
                          "line": 21
                        }
                      },
                      "range": [
                        512,
                        520
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          514,
                          520
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 21,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      511,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 18,
                        "line": 21
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 21
                    },
                    "start": {
                      "column": 29,
                      "line": 21
                    }
                  },
                  "range": [
                    522,
                    529
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      525,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 21
                      },
                      "start": {
                        "column": 32,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  510,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              }
            },
            "value": null,
            "range": [
              497,
              530
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                545,
                551
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                551,
                571
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 23
                      },
                      "start": {
                        "column": 23,
                        "line": 23
                      }
                    },
                    "range": [
                      555,
                      563
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        557,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 23
                        },
                        "start": {
                          "column": 25,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    552,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 23
                    },
                    "start": {
                      "column": 20,
                      "line": 23
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 23
                  },
                  "start": {
                    "column": 32,
                    "line": 23
                  }
                },
                "range": [
                  564,
                  570
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    566,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 23
                    },
                    "start": {
                      "column": 34,
                      "line": 23
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 39,
                  "line": 23
                },
                "start": {
                  "column": 19,
                  "line": 23
                }
              }
            },
            "range": [
              536,
              571
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "range": [
                577,
                582
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  585,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 25
                  },
                  "start": {
                    "column": 12,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  590,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 25
                  },
                  "start": {
                    "column": 17,
                    "line": 25
                  }
                }
              },
              "range": [
                585,
                594
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "range": [
              577,
              595
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "range": [
                600,
                602
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    611,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    616,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 26
                    },
                    "start": {
                      "column": 20,
                      "line": 26
                    }
                  }
                },
                "range": [
                  611,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                605,
                620
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "range": [
              600,
              621
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
              "name": "method2",
              "optional": false,
              "range": [
                627,
                634
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
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
                634,
                681
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
                            647,
                            651
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 29
                            },
                            "start": {
                              "column": 8,
                              "line": 29
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            652,
                            656
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 13,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          647,
                          656
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              659,
                              663
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 29
                              },
                              "start": {
                                "column": 20,
                                "line": 29
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              664,
                              668
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 29
                              },
                              "start": {
                                "column": 25,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            659,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 29
                            },
                            "start": {
                              "column": 20,
                              "line": 29
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"!\"",
                          "value": "!",
                          "range": [
                            671,
                            674
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 29
                            },
                            "start": {
                              "column": 32,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          659,
                          674
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        647,
                        674
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      647,
                      675
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  637,
                  681
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 28
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
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "range": [
              627,
              681
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 29,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractClass",
        "optional": false,
        "range": [
          15,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        683
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          743,
          1149
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
              "name": "cb",
              "optional": false,
              "range": [
                749,
                751
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  769,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 34
                  },
                  "start": {
                    "column": 24,
                    "line": 34
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 11,
                        "line": 34
                      }
                    },
                    "range": [
                      756,
                      764
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        758,
                        764
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 34
                        },
                        "start": {
                          "column": 13,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    755,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                754,
                771
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 34
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "range": [
              749,
              772
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
                778,
                789
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
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
                789,
                1147
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
                          "name": "str",
                          "optional": false,
                          "range": [
                            875,
                            878
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 37
                            },
                            "start": {
                              "column": 14,
                              "line": 37
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "range": [
                            880,
                            885
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 37
                            },
                            "start": {
                              "column": 19,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          869,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 37
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        869,
                        886
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 37
                        },
                        "start": {
                          "column": 8,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      869,
                      887
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  970,
                                  974
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 39
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "range": [
                                  975,
                                  979
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 39
                                  }
                                }
                              },
                              "range": [
                                970,
                                979
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 39
                                },
                                "start": {
                                  "column": 16,
                                  "line": 39
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "range": [
                                980,
                                991
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 39
                                },
                                "start": {
                                  "column": 26,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              970,
                              991
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 39
                              },
                              "start": {
                                "column": 16,
                                "line": 39
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            970,
                            993
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 39
                            },
                            "start": {
                              "column": 16,
                              "line": 39
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
                            962,
                            966
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 39
                            },
                            "start": {
                              "column": 8,
                              "line": 39
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            967,
                            969
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 39
                            },
                            "start": {
                              "column": 13,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          962,
                          969
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        962,
                        994
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      962,
                      995
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
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
                            1017,
                            1018
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 41
                            },
                            "start": {
                              "column": 20,
                              "line": 41
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
                            1005,
                            1009
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 41
                            },
                            "start": {
                              "column": 8,
                              "line": 41
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "range": [
                            1010,
                            1016
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 41
                            },
                            "start": {
                              "column": 13,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1005,
                          1016
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1005,
                        1019
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1005,
                      1020
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "other",
                            "optional": false,
                            "range": [
                              1089,
                              1094
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 44
                              },
                              "start": {
                                "column": 17,
                                "line": 44
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              1095,
                              1099
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 44
                              },
                              "start": {
                                "column": 23,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            1089,
                            1099
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 44
                            },
                            "start": {
                              "column": 17,
                              "line": 44
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
                          "name": "other",
                          "optional": false,
                          "range": [
                            1080,
                            1085
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 44
                            },
                            "start": {
                              "column": 8,
                              "line": 44
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1086,
                            1088
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 44
                            },
                            "start": {
                              "column": 14,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1080,
                          1088
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 44
                          },
                          "start": {
                            "column": 8,
                            "line": 44
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1080,
                        1100
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1080,
                      1101
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "yetAnother",
                            "optional": false,
                            "range": [
                              1124,
                              1134
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 45
                              },
                              "start": {
                                "column": 22,
                                "line": 45
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              1135,
                              1139
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 45
                              },
                              "start": {
                                "column": 33,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            1124,
                            1139
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 45
                            },
                            "start": {
                              "column": 22,
                              "line": 45
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
                          "name": "yetAnother",
                          "optional": false,
                          "range": [
                            1110,
                            1120
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 45
                            },
                            "start": {
                              "column": 8,
                              "line": 45
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1121,
                            1123
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 45
                            },
                            "start": {
                              "column": 19,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1110,
                          1123
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                        1110,
                        1140
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1110,
                      1141
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
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
                  859,
                  1147
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 85,
                    "line": 36
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 36
                      },
                      "start": {
                        "column": 19,
                        "line": 36
                      }
                    },
                    "range": [
                      793,
                      801
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        795,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 36
                        },
                        "start": {
                          "column": 21,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    790,
                    801
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 36
                    },
                    "start": {
                      "column": 16,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 36
                      },
                      "start": {
                        "column": 34,
                        "line": 36
                      }
                    },
                    "range": [
                      808,
                      823
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "range": [
                          810,
                          823
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 36
                          },
                          "start": {
                            "column": 36,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        810,
                        823
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 36
                        },
                        "start": {
                          "column": 36,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    803,
                    823
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 36
                    },
                    "start": {
                      "column": 29,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 36
                      },
                      "start": {
                        "column": 61,
                        "line": 36
                      }
                    },
                    "range": [
                      835,
                      857
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedAbstractClass",
                        "optional": false,
                        "range": [
                          837,
                          857
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 36
                          },
                          "start": {
                            "column": 63,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        837,
                        857
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 36
                        },
                        "start": {
                          "column": 63,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    825,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 36
                    },
                    "start": {
                      "column": 51,
                      "line": 36
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
                  "line": 36
                }
              }
            },
            "range": [
              778,
              1147
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 36
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
            "column": 58,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false,
        "range": [
          700,
          720
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 33
          },
          "start": {
            "column": 15,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractClass",
        "optional": false,
        "range": [
          729,
          742
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 33
          },
          "start": {
            "column": 44,
            "line": 33
          }
        }
      },
      "range": [
        685,
        1149
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
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
          1201,
          1471
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
              "name": "prop",
              "optional": false,
              "range": [
                1207,
                1211
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                1214,
                1216
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 11,
                  "line": 50
                }
              }
            },
            "range": [
              1207,
              1217
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "range": [
                1222,
                1224
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1242,
                  1244
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 51
                  },
                  "start": {
                    "column": 24,
                    "line": 51
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 51
                      },
                      "start": {
                        "column": 11,
                        "line": 51
                      }
                    },
                    "range": [
                      1229,
                      1237
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1231,
                        1237
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 51
                        },
                        "start": {
                          "column": 13,
                          "line": 51
                        }
                      }
                    }
                  },
                  "range": [
                    1228,
                    1237
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 51
                    },
                    "start": {
                      "column": 10,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                1227,
                1244
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              }
            },
            "range": [
              1222,
              1245
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
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
                1251,
                1262
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
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
                1262,
                1406
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
                          "name": "str",
                          "optional": false,
                          "range": [
                            1348,
                            1351
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 54
                            },
                            "start": {
                              "column": 14,
                              "line": 54
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "range": [
                            1353,
                            1358
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 54
                            },
                            "start": {
                              "column": 19,
                              "line": 54
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yetAnother",
                          "optional": false,
                          "range": [
                            1360,
                            1370
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 54
                            },
                            "start": {
                              "column": 26,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          1342,
                          1347
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 54
                          },
                          "start": {
                            "column": 8,
                            "line": 54
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1342,
                        1371
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1342,
                      1372
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1389,
                              1393
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 55
                              },
                              "start": {
                                "column": 16,
                                "line": 55
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              1394,
                              1398
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 55
                              },
                              "start": {
                                "column": 21,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            1389,
                            1398
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 55
                            },
                            "start": {
                              "column": 16,
                              "line": 55
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
                            1381,
                            1385
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 55
                            },
                            "start": {
                              "column": 8,
                              "line": 55
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1386,
                            1388
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 55
                            },
                            "start": {
                              "column": 13,
                              "line": 55
                            }
                          }
                        },
                        "range": [
                          1381,
                          1388
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 55
                          },
                          "start": {
                            "column": 8,
                            "line": 55
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1381,
                        1399
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 55
                        },
                        "start": {
                          "column": 8,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1381,
                      1400
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
                      }
                    }
                  }
                ],
                "range": [
                  1332,
                  1406
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 56
                  },
                  "start": {
                    "column": 85,
                    "line": 53
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 53
                      },
                      "start": {
                        "column": 19,
                        "line": 53
                      }
                    },
                    "range": [
                      1266,
                      1274
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1268,
                        1274
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 53
                        },
                        "start": {
                          "column": 21,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1263,
                    1274
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 53
                    },
                    "start": {
                      "column": 16,
                      "line": 53
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 53
                      },
                      "start": {
                        "column": 34,
                        "line": 53
                      }
                    },
                    "range": [
                      1281,
                      1296
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "range": [
                          1283,
                          1296
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 53
                          },
                          "start": {
                            "column": 36,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1283,
                        1296
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 53
                        },
                        "start": {
                          "column": 36,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1276,
                    1296
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 53
                    },
                    "start": {
                      "column": 29,
                      "line": 53
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 53
                      },
                      "start": {
                        "column": 61,
                        "line": 53
                      }
                    },
                    "range": [
                      1308,
                      1330
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedAbstractClass",
                        "optional": false,
                        "range": [
                          1310,
                          1330
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 53
                          },
                          "start": {
                            "column": 63,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1310,
                        1330
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 53
                        },
                        "start": {
                          "column": 63,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1298,
                    1330
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 53
                    },
                    "start": {
                      "column": 51,
                      "line": 53
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 15,
                  "line": 53
                }
              }
            },
            "range": [
              1251,
              1406
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 53
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
              "name": "method",
              "optional": false,
              "range": [
                1412,
                1418
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
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
                1418,
                1469
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
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1448,
                                1452
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 59
                                },
                                "start": {
                                  "column": 16,
                                  "line": 59
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "range": [
                                1453,
                                1457
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 59
                                },
                                "start": {
                                  "column": 21,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              1448,
                              1457
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 59
                              },
                              "start": {
                                "column": 16,
                                "line": 59
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              1460,
                              1461
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 59
                              },
                              "start": {
                                "column": 28,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            1448,
                            1461
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 59
                            },
                            "start": {
                              "column": 16,
                              "line": 59
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
                            1440,
                            1444
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 59
                            },
                            "start": {
                              "column": 8,
                              "line": 59
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1445,
                            1447
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 59
                            },
                            "start": {
                              "column": 13,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1440,
                          1447
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 59
                          },
                          "start": {
                            "column": 8,
                            "line": 59
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1440,
                        1462
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1440,
                      1463
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  1430,
                  1469
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 22,
                    "line": 58
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
                        "column": 20,
                        "line": 58
                      },
                      "start": {
                        "column": 12,
                        "line": 58
                      }
                    },
                    "range": [
                      1420,
                      1428
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1422,
                        1428
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 58
                        },
                        "start": {
                          "column": 14,
                          "line": 58
                        }
                      }
                    }
                  },
                  "range": [
                    1419,
                    1428
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 58
                    },
                    "start": {
                      "column": 11,
                      "line": 58
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 10,
                  "line": 58
                }
              }
            },
            "range": [
              1412,
              1469
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 50,
            "line": 49
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Implementation",
        "optional": false,
        "range": [
          1157,
          1171
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 49
          },
          "start": {
            "column": 6,
            "line": 49
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false,
        "range": [
          1180,
          1200
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 49
          },
          "start": {
            "column": 29,
            "line": 49
          }
        }
      },
      "range": [
        1151,
        1471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1484,
          1608
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1490,
                1501
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
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
                1501,
                1606
              ],
              "async": false,
              "body": {
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1530,
                          1531
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 65
                          },
                          "start": {
                            "column": 8,
                            "line": 65
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          1532,
                          1536
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 65
                          },
                          "start": {
                            "column": 10,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1530,
                        1536
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 65
                        },
                        "start": {
                          "column": 8,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1530,
                      1537
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
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
                          "raw": "\"hi\"",
                          "value": "hi",
                          "range": [
                            1551,
                            1555
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 66
                            },
                            "start": {
                              "column": 13,
                              "line": 66
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1546,
                            1547
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 66
                            },
                            "start": {
                              "column": 8,
                              "line": 66
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1548,
                            1550
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 66
                            },
                            "start": {
                              "column": 10,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1546,
                          1550
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 66
                          },
                          "start": {
                            "column": 8,
                            "line": 66
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1546,
                        1556
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 66
                        },
                        "start": {
                          "column": 8,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1546,
                      1557
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
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
                          "raw": "12",
                          "value": 12,
                          "range": [
                            1575,
                            1577
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 67
                            },
                            "start": {
                              "column": 17,
                              "line": 67
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1566,
                            1567
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 67
                            },
                            "start": {
                              "column": 8,
                              "line": 67
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "range": [
                            1568,
                            1574
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 67
                            },
                            "start": {
                              "column": 10,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1566,
                          1574
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 67
                          },
                          "start": {
                            "column": 8,
                            "line": 67
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1566,
                        1578
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1566,
                      1579
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1588,
                            1589
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 68
                            },
                            "start": {
                              "column": 8,
                              "line": 68
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method2",
                          "optional": false,
                          "range": [
                            1590,
                            1597
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 68
                            },
                            "start": {
                              "column": 10,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1588,
                          1597
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 68
                          },
                          "start": {
                            "column": 8,
                            "line": 68
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1588,
                        1599
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 68
                        },
                        "start": {
                          "column": 8,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1588,
                      1600
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1520,
                  1606
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 69
                  },
                  "start": {
                    "column": 34,
                    "line": 64
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 64
                      },
                      "start": {
                        "column": 17,
                        "line": 64
                      }
                    },
                    "range": [
                      1503,
                      1518
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "range": [
                          1505,
                          1518
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 64
                          },
                          "start": {
                            "column": 19,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1505,
                        1518
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 64
                        },
                        "start": {
                          "column": 19,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    1502,
                    1518
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 64
                    },
                    "start": {
                      "column": 16,
                      "line": 64
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 15,
                  "line": 64
                }
              }
            },
            "range": [
              1490,
              1606
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 11,
            "line": 63
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "range": [
          1479,
          1483
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 63
          },
          "start": {
            "column": 6,
            "line": 63
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1473,
        1608
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          1628,
          1850
        ],
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1643,
                1644
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 73
                },
                "start": {
                  "column": 13,
                  "line": 73
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
                  "column": 22,
                  "line": 73
                },
                "start": {
                  "column": 14,
                  "line": 73
                }
              },
              "range": [
                1644,
                1652
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1646,
                  1652
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 73
                  },
                  "start": {
                    "column": 16,
                    "line": 73
                  }
                }
              }
            },
            "value": null,
            "range": [
              1634,
              1653
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "TSAbstractPropertyDefinition",
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
                1667,
                1668
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 74
                },
                "start": {
                  "column": 13,
                  "line": 74
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
                  "column": 22,
                  "line": 74
                },
                "start": {
                  "column": 14,
                  "line": 74
                }
              },
              "range": [
                1668,
                1676
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1670,
                  1676
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 74
                  },
                  "start": {
                    "column": 16,
                    "line": 74
                  }
                }
              }
            },
            "value": null,
            "range": [
              1658,
              1677
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
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
                1683,
                1694
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
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
                1694,
                1848
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
                          "name": "self",
                          "optional": false,
                          "range": [
                            1711,
                            1715
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 77
                            },
                            "start": {
                              "column": 12,
                              "line": 77
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            1718,
                            1722
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 77
                            },
                            "start": {
                              "column": 19,
                              "line": 77
                            }
                          }
                        },
                        "range": [
                          1711,
                          1722
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
                            "line": 77
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1707,
                      1723
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 77
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
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1759,
                                  1760
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 78
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1759,
                                  1760
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 78
                                  }
                                }
                              },
                              "range": [
                                1759,
                                1760
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 78
                                },
                                "start": {
                                  "column": 14,
                                  "line": 78
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1762,
                                  1763
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 78
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
                                "name": "y1",
                                "optional": false,
                                "range": [
                                  1765,
                                  1767
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 78
                                  }
                                }
                              },
                              "range": [
                                1762,
                                1767
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 78
                                },
                                "start": {
                                  "column": 17,
                                  "line": 78
                                }
                              }
                            }
                          ],
                          "range": [
                            1757,
                            1769
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 78
                            },
                            "start": {
                              "column": 12,
                              "line": 78
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            1772,
                            1776
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 78
                            },
                            "start": {
                              "column": 27,
                              "line": 78
                            }
                          }
                        },
                        "range": [
                          1757,
                          1776
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 78
                          },
                          "start": {
                            "column": 12,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1753,
                      1777
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 78
                      },
                      "start": {
                        "column": 8,
                        "line": 78
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                1805,
                                1806
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 79
                                },
                                "start": {
                                  "column": 11,
                                  "line": 79
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1805,
                                1806
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 79
                                },
                                "start": {
                                  "column": 11,
                                  "line": 79
                                }
                              }
                            },
                            "range": [
                              1805,
                              1806
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 79
                              },
                              "start": {
                                "column": 11,
                                "line": 79
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                1808,
                                1809
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 79
                                },
                                "start": {
                                  "column": 14,
                                  "line": 79
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
                              "name": "y1",
                              "optional": false,
                              "range": [
                                1811,
                                1813
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 79
                                },
                                "start": {
                                  "column": 17,
                                  "line": 79
                                }
                              }
                            },
                            "range": [
                              1808,
                              1813
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 79
                              },
                              "start": {
                                "column": 14,
                                "line": 79
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "raw": "\"y\"",
                              "value": "y",
                              "range": [
                                1815,
                                1818
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 79
                                },
                                "start": {
                                  "column": 21,
                                  "line": 79
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
                              "name": "y1",
                              "optional": false,
                              "range": [
                                1820,
                                1822
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 79
                                },
                                "start": {
                                  "column": 26,
                                  "line": 79
                                }
                              }
                            },
                            "range": [
                              1815,
                              1822
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 79
                              },
                              "start": {
                                "column": 21,
                                "line": 79
                              }
                            }
                          }
                        ],
                        "range": [
                          1803,
                          1824
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 79
                          },
                          "start": {
                            "column": 9,
                            "line": 79
                          }
                        }
                      },
                      "right": {
                        "type": "ThisExpression",
                        "range": [
                          1827,
                          1831
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 79
                          },
                          "start": {
                            "column": 33,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1803,
                        1831
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 79
                        },
                        "start": {
                          "column": 9,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1802,
                      1833
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 79
                      },
                      "start": {
                        "column": 8,
                        "line": 79
                      }
                    }
                  }
                ],
                "range": [
                  1697,
                  1848
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 80
                  },
                  "start": {
                    "column": 18,
                    "line": 76
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
                  "column": 5,
                  "line": 80
                },
                "start": {
                  "column": 15,
                  "line": 76
                }
              }
            },
            "range": [
              1683,
              1848
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 18,
            "line": 72
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          1625,
          1627
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 72
          },
          "start": {
            "column": 15,
            "line": 72
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1610,
        1850
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1861,
          2059
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
              "name": "x",
              "optional": false,
              "range": [
                1867,
                1868
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 84
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
                  "column": 13,
                  "line": 84
                },
                "start": {
                  "column": 5,
                  "line": 84
                }
              },
              "range": [
                1868,
                1876
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1870,
                  1876
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 84
                  },
                  "start": {
                    "column": 7,
                    "line": 84
                  }
                }
              }
            },
            "value": null,
            "range": [
              1867,
              1877
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
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
                1882,
                1883
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
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
                  "column": 13,
                  "line": 85
                },
                "start": {
                  "column": 5,
                  "line": 85
                }
              },
              "range": [
                1883,
                1891
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1885,
                  1891
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 85
                  },
                  "start": {
                    "column": 7,
                    "line": 85
                  }
                }
              }
            },
            "value": null,
            "range": [
              1882,
              1892
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
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
                1898,
                1909
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
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
                1909,
                2057
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
                          "name": "self",
                          "optional": false,
                          "range": [
                            1926,
                            1930
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 88
                            },
                            "start": {
                              "column": 12,
                              "line": 88
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            1933,
                            1937
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 88
                            },
                            "start": {
                              "column": 19,
                              "line": 88
                            }
                          }
                        },
                        "range": [
                          1926,
                          1937
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 88
                          },
                          "start": {
                            "column": 12,
                            "line": 88
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1922,
                      1938
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
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
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1974,
                                  1975
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 89
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 89
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1974,
                                  1975
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 89
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 89
                                  }
                                }
                              },
                              "range": [
                                1974,
                                1975
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 89
                                },
                                "start": {
                                  "column": 14,
                                  "line": 89
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1977,
                                  1978
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 89
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 89
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
                                "name": "y1",
                                "optional": false,
                                "range": [
                                  1980,
                                  1982
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 89
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 89
                                  }
                                }
                              },
                              "range": [
                                1977,
                                1982
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 89
                                },
                                "start": {
                                  "column": 17,
                                  "line": 89
                                }
                              }
                            }
                          ],
                          "range": [
                            1972,
                            1984
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 89
                            },
                            "start": {
                              "column": 12,
                              "line": 89
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            1987,
                            1991
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 89
                            },
                            "start": {
                              "column": 27,
                              "line": 89
                            }
                          }
                        },
                        "range": [
                          1972,
                          1991
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 89
                          },
                          "start": {
                            "column": 12,
                            "line": 89
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      1968,
                      1992
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 89
                      },
                      "start": {
                        "column": 8,
                        "line": 89
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                2017,
                                2018
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 90
                                },
                                "start": {
                                  "column": 11,
                                  "line": 90
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2017,
                                2018
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 90
                                },
                                "start": {
                                  "column": 11,
                                  "line": 90
                                }
                              }
                            },
                            "range": [
                              2017,
                              2018
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 90
                              },
                              "start": {
                                "column": 11,
                                "line": 90
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                2020,
                                2021
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 90
                                },
                                "start": {
                                  "column": 14,
                                  "line": 90
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
                              "name": "y1",
                              "optional": false,
                              "range": [
                                2023,
                                2025
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 90
                                },
                                "start": {
                                  "column": 17,
                                  "line": 90
                                }
                              }
                            },
                            "range": [
                              2020,
                              2025
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 90
                              },
                              "start": {
                                "column": 14,
                                "line": 90
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "raw": "\"y\"",
                              "value": "y",
                              "range": [
                                2027,
                                2030
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 90
                                },
                                "start": {
                                  "column": 21,
                                  "line": 90
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
                              "name": "y1",
                              "optional": false,
                              "range": [
                                2032,
                                2034
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 90
                                },
                                "start": {
                                  "column": 26,
                                  "line": 90
                                }
                              }
                            },
                            "range": [
                              2027,
                              2034
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 90
                              },
                              "start": {
                                "column": 21,
                                "line": 90
                              }
                            }
                          }
                        ],
                        "range": [
                          2015,
                          2036
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 90
                          },
                          "start": {
                            "column": 9,
                            "line": 90
                          }
                        }
                      },
                      "right": {
                        "type": "ThisExpression",
                        "range": [
                          2039,
                          2043
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 90
                          },
                          "start": {
                            "column": 33,
                            "line": 90
                          }
                        }
                      },
                      "range": [
                        2015,
                        2043
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 90
                        },
                        "start": {
                          "column": 9,
                          "line": 90
                        }
                      }
                    },
                    "range": [
                      2014,
                      2045
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 90
                      }
                    }
                  }
                ],
                "range": [
                  1912,
                  2057
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 91
                  },
                  "start": {
                    "column": 18,
                    "line": 87
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
                  "column": 5,
                  "line": 91
                },
                "start": {
                  "column": 15,
                  "line": 87
                }
              }
            },
            "range": [
              1898,
              2057
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 9,
            "line": 83
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          1858,
          1860
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 83
          },
          "start": {
            "column": 6,
            "line": 83
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1852,
        2059
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 93
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
