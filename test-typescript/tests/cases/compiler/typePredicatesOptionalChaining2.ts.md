__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    344
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "range": [
          5,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                16,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 16,
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
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              },
              "range": [
                20,
                28
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  22,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              16,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "range": [
          14,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "getName1",
            "optional": false,
            "range": [
              39,
              47
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
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
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        140,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 4
                        },
                        "start": {
                          "column": 59,
                          "line": 4
                        }
                      }
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "range": [
                            125,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 4
                            },
                            "start": {
                              "column": 44,
                              "line": 4
                            }
                          }
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            133,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 4
                            },
                            "start": {
                              "column": 52,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          125,
                          137
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        125,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 4
                        },
                        "start": {
                          "column": 44,
                          "line": 4
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "range": [
                                97,
                                103
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 4
                                },
                                "start": {
                                  "column": 16,
                                  "line": 4
                                }
                              }
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                105,
                                109
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 4
                                },
                                "start": {
                                  "column": 24,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              97,
                              109
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            97,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          90,
                          109
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 4
                          },
                          "start": {
                            "column": 9,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "'string'",
                        "value": "string",
                        "range": [
                          114,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 4
                          },
                          "start": {
                            "column": 33,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        90,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 4
                        },
                        "start": {
                          "column": 9,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      90,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    83,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 4
                    },
                    "start": {
                      "column": 2,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                79,
                145
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 46,
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
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  },
                  "range": [
                    58,
                    66
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "range": [
                        60,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 27,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      60,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  51,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              },
              "range": [
                67,
                75
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  69,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              50,
              145
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          "range": [
            39,
            145
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        33,
        146
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
        },
        "start": {
          "column": 0,
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
            "name": "isString",
            "optional": false,
            "range": [
              154,
              162
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
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
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          216,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 16,
                            "line": 8
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        209,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        226,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      209,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    202,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 8
                    },
                    "start": {
                      "column": 2,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                198,
                237
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 9
                },
                "start": {
                  "column": 50,
                  "line": 7
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  },
                  "range": [
                    171,
                    176
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      173,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 25,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  166,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              },
              "range": [
                177,
                194
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    179,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 31,
                      "line": 7
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 7
                    },
                    "start": {
                      "column": 40,
                      "line": 7
                    }
                  },
                  "range": [
                    188,
                    194
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      188,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 7
                      },
                      "start": {
                        "column": 40,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  179,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              165,
              237
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 7
              }
            }
          },
          "range": [
            154,
            237
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        148,
        238
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "getName2",
            "optional": false,
            "range": [
              246,
              254
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
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
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        337,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 12
                        },
                        "start": {
                          "column": 49,
                          "line": 12
                        }
                      }
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "range": [
                            322,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 12
                            },
                            "start": {
                              "column": 34,
                              "line": 12
                            }
                          }
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            330,
                            334
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 12
                            },
                            "start": {
                              "column": 42,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          322,
                          334
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 12
                          },
                          "start": {
                            "column": 34,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        322,
                        334
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 12
                        },
                        "start": {
                          "column": 34,
                          "line": 12
                        }
                      }
                    },
                    "test": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "range": [
                                306,
                                312
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 12
                                },
                                "start": {
                                  "column": 18,
                                  "line": 12
                                }
                              }
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                314,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 12
                                },
                                "start": {
                                  "column": 26,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              306,
                              318
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 12
                              },
                              "start": {
                                "column": 18,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            306,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 12
                            },
                            "start": {
                              "column": 18,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isString",
                        "optional": false,
                        "range": [
                          297,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 12
                          },
                          "start": {
                            "column": 9,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        297,
                        319
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 9,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      297,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    290,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                286,
                342
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 46,
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
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 25,
                      "line": 11
                    }
                  },
                  "range": [
                    265,
                    273
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "range": [
                        267,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 27,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      267,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 11
                      },
                      "start": {
                        "column": 27,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  258,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 34,
                  "line": 11
                }
              },
              "range": [
                274,
                282
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  276,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 11
                  },
                  "start": {
                    "column": 36,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              257,
              342
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 17,
                "line": 11
              }
            }
          },
          "range": [
            246,
            342
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        240,
        343
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
