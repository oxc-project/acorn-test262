__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    367
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          354
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                18,
                29
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
                29,
                77
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
                          "raw": "\"a\"",
                          "value": "a",
                          "range": [
                            56,
                            59
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
                        {
                          "type": "Literal",
                          "raw": "\"b\"",
                          "value": "b",
                          "range": [
                            61,
                            64
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 4
                            },
                            "start": {
                              "column": 27,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"c\"",
                          "value": "c",
                          "range": [
                            66,
                            69
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 4
                            },
                            "start": {
                              "column": 32,
                              "line": 4
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
                            42,
                            46
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
                          "name": "register",
                          "optional": false,
                          "range": [
                            47,
                            55
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 4
                            },
                            "start": {
                              "column": 13,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          42,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        42,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      42,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
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
                  32,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 3
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
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              18,
              77
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
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "register",
              "optional": false,
              "range": [
                91,
                99
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 12,
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
                99,
                275
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
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
                                    "computed": true,
                                    "key": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "range": [
                                          203,
                                          207
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "raw": "\".a\"",
                                        "value": ".a",
                                        "range": [
                                          210,
                                          214
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        203,
                                        214
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 17,
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
                                                    234,
                                                    238
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 52,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 48,
                                                      "line": 11
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
                                                    225,
                                                    229
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 43,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 39,
                                                      "line": 11
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false,
                                                  "range": [
                                                    230,
                                                    233
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 47,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 44,
                                                      "line": 11
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  225,
                                                  233
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 47,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 39,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "range": [
                                                225,
                                                239
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 53,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 39,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "range": [
                                              225,
                                              240
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 54,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 39,
                                                "line": 11
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          223,
                                          242
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 56,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": [],
                                      "range": [
                                        217,
                                        242
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 56,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      202,
                                      242
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 11
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  184,
                                  257
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 10
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
                                  175,
                                  179
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 10
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  180,
                                  183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                175,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 10
                                },
                                "start": {
                                  "column": 12,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              175,
                              258
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            175,
                            259
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        160,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 32,
                          "line": 8
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
                            "name": "name",
                            "optional": false,
                            "range": [
                              145,
                              149
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 8
                              },
                              "start": {
                                "column": 17,
                                "line": 8
                              }
                            }
                          },
                          "init": null,
                          "range": [
                            145,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let",
                      "range": [
                        141,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "names",
                      "optional": false,
                      "range": [
                        153,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 8
                        },
                        "start": {
                          "column": 25,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      136,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  126,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 47,
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "names",
                    "optional": false,
                    "range": [
                      103,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    },
                    "range": [
                      108,
                      118
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          110,
                          116
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
                      "range": [
                        110,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
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
                    100,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 7
                    },
                    "start": {
                      "column": 21,
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
                    "column": 40,
                    "line": 7
                  }
                },
                "range": [
                  119,
                  125
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    121,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 7
                    },
                    "start": {
                      "column": 42,
                      "line": 7
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            },
            "range": [
              83,
              275
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                289,
                292
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
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
                292,
                310
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  307,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 30,
                    "line": 16
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
                        "column": 22,
                        "line": 16
                      },
                      "start": {
                        "column": 17,
                        "line": 16
                      }
                    },
                    "range": [
                      294,
                      299
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        296,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 19,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    293,
                    299
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
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 23,
                    "line": 16
                  }
                },
                "range": [
                  300,
                  306
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    302,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 25,
                      "line": 16
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              281,
              310
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                324,
                327
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
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
                327,
                351
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  348,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 18
                  },
                  "start": {
                    "column": 36,
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
                      332,
                      340
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        334,
                        340
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
                    328,
                    340
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
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 18
                  },
                  "start": {
                    "column": 29,
                    "line": 18
                  }
                },
                "range": [
                  341,
                  347
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    343,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 18
                    },
                    "start": {
                      "column": 31,
                      "line": 18
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 39,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              316,
              351
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 18
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
            "line": 20
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
        "name": "Main",
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
        354
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Main",
          "optional": false,
          "range": [
            360,
            364
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        "range": [
          356,
          366
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        356,
        367
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 11,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
