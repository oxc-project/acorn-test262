__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    67,
    807
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        67,
        125
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            101,
            125
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "range": [
                  107,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
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
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                },
                "range": [
                  114,
                  122
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    116,
                    122
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
                }
              },
              "range": [
                107,
                123
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 34,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IValidationError",
          "optional": false,
          "range": [
            84,
            100
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          74,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        127,
        807
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            158,
            807
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateParameters",
                "optional": false,
                "range": [
                  164,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
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
                  182,
                  805
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
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 8
                                },
                                "start": {
                                  "column": 18,
                                  "line": 8
                                }
                              },
                              "range": [
                                253,
                                280
                              ],
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IValidationError",
                                        "optional": false,
                                        "range": [
                                          255,
                                          271
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "range": [
                                        255,
                                        271
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      255,
                                      273
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 8
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSNullKeyword",
                                    "range": [
                                      276,
                                      280
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  255,
                                  280
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              247,
                              280
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              283,
                              287
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 8
                              },
                              "start": {
                                "column": 48,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            247,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let",
                      "range": [
                        243,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    {
                      "type": "ForOfStatement",
                      "await": false,
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
                                  "name": "parameter",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 10
                                      }
                                    },
                                    "range": [
                                      387,
                                      392
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        389,
                                        392
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 10
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    378,
                                    392
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 10
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
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "ThisExpression",
                                        "range": [
                                          396,
                                          400
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "range": [
                                          404,
                                          407
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        396,
                                        407
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "getParameter",
                                      "optional": false,
                                      "range": [
                                        409,
                                        421
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      395,
                                      421
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    395,
                                    423
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  378,
                                  423
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              372,
                              424
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 10
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          },
                          {
                            "type": "EmptyStatement",
                            "range": [
                              424,
                              425
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 10
                              },
                              "start": {
                                "column": 64,
                                "line": 10
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
                                  "name": "values",
                                  "optional": false,
                                  "range": [
                                    444,
                                    450
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 11
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
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "ThisExpression",
                                        "range": [
                                          454,
                                          458
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "range": [
                                          462,
                                          465
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        454,
                                        465
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "getValues",
                                      "optional": false,
                                      "range": [
                                        467,
                                        476
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      453,
                                      476
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    453,
                                    478
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  444,
                                  478
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              438,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
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
                                  "name": "innerResult",
                                  "optional": false,
                                  "range": [
                                    499,
                                    510
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 13
                                    }
                                  }
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "values",
                                        "optional": false,
                                        "range": [
                                          532,
                                          538
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 57,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 51,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "parameter",
                                            "optional": false,
                                            "range": [
                                              539,
                                              548
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 67,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 58,
                                                "line": 13
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "oaParameter",
                                            "optional": false,
                                            "range": [
                                              549,
                                              560
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 79,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 68,
                                                "line": 13
                                              }
                                            }
                                          },
                                          "range": [
                                            539,
                                            560
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 79,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 58,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "range": [
                                            561,
                                            565
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 84,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 80,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "range": [
                                          539,
                                          565
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 84,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 58,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "range": [
                                        532,
                                        566
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 85,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 51,
                                          "line": 13
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
                                      "name": "parameter",
                                      "optional": false,
                                      "range": [
                                        513,
                                        522
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "validate",
                                      "optional": false,
                                      "range": [
                                        523,
                                        531
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      513,
                                      531
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    513,
                                    567
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  499,
                                  567
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              493,
                              568
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
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
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "range": [
                                        707,
                                        713
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "innerResult",
                                          "optional": false,
                                          "range": [
                                            738,
                                            749
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 58,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 47,
                                              "line": 16
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "LogicalExpression",
                                          "operator": "||",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "range": [
                                              717,
                                              723
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 16
                                              },
                                              "start": {
                                                "column": 26,
                                                "line": 16
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "range": [
                                              727,
                                              729
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 38,
                                                "line": 16
                                              },
                                              "start": {
                                                "column": 36,
                                                "line": 16
                                              }
                                            }
                                          },
                                          "range": [
                                            717,
                                            729
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 16
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "concat",
                                          "optional": false,
                                          "range": [
                                            731,
                                            737
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 46,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 16
                                            }
                                          }
                                        },
                                        "range": [
                                          716,
                                          737
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 46,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 16
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        716,
                                        750
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 59,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      707,
                                      750
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    707,
                                    751
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 16
                                    }
                                  }
                                }
                              ],
                              "range": [
                                623,
                                765
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 17
                                },
                                "start": {
                                  "column": 54,
                                  "line": 14
                                }
                              }
                            },
                            "test": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "innerResult",
                                "optional": false,
                                "range": [
                                  584,
                                  595
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 14
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "innerResult",
                                    "optional": false,
                                    "range": [
                                      599,
                                      610
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 14
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
                                      611,
                                      617
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    599,
                                    617
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 14
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "0",
                                  "value": 0,
                                  "range": [
                                    620,
                                    621
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 14
                                    }
                                  }
                                },
                                "range": [
                                  599,
                                  621
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                584,
                                621
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 14
                                },
                                "start": {
                                  "column": 15,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              581,
                              765
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 17
                              },
                              "start": {
                                "column": 12,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          358,
                          775
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 18
                          },
                          "start": {
                            "column": 69,
                            "line": 9
                          }
                        }
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parameterLocation",
                              "optional": false,
                              "range": [
                                307,
                                324
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 9
                                },
                                "start": {
                                  "column": 18,
                                  "line": 9
                                }
                              }
                            },
                            "init": null,
                            "range": [
                              307,
                              324
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 9
                              },
                              "start": {
                                "column": 18,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          301,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parameterValues",
                            "optional": false,
                            "range": [
                              340,
                              355
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 9
                              },
                              "start": {
                                "column": 51,
                                "line": 9
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
                            "name": "Object",
                            "optional": false,
                            "range": [
                              328,
                              334
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 9
                              },
                              "start": {
                                "column": 39,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "keys",
                            "optional": false,
                            "range": [
                              335,
                              339
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 9
                              },
                              "start": {
                                "column": 46,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            328,
                            339
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 9
                            },
                            "start": {
                              "column": 39,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          328,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 9
                          },
                          "start": {
                            "column": 39,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        297,
                        775
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          792,
                          798
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        785,
                        799
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    233,
                    805
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 73,
                      "line": 7
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
                    "name": "parameterValues",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 7
                        },
                        "start": {
                          "column": 38,
                          "line": 7
                        }
                      },
                      "range": [
                        198,
                        203
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          200,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
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
                      183,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 7
                      },
                      "start": {
                        "column": 23,
                        "line": 7
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 7
                    },
                    "start": {
                      "column": 45,
                      "line": 7
                    }
                  },
                  "range": [
                    205,
                    232
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IValidationError",
                            "optional": false,
                            "range": [
                              207,
                              223
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 7
                              },
                              "start": {
                                "column": 47,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            207,
                            223
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 7
                            },
                            "start": {
                              "column": 47,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          207,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 7
                          },
                          "start": {
                            "column": 47,
                            "line": 7
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          228,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 7
                          },
                          "start": {
                            "column": 68,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      207,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 7
                      },
                      "start": {
                        "column": 47,
                        "line": 7
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "range": [
                164,
                805
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 31,
              "line": 6
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Operation",
          "optional": false,
          "range": [
            148,
            157
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 6
            },
            "start": {
              "column": 21,
              "line": 6
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          142,
          807
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
      "column": 1,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
