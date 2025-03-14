__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    507
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
            "name": "PRIVATE_METADATA",
            "optional": false,
            "range": [
              6,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "range": [
                29,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "range": [
              25,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          "range": [
            6,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
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
                          "name": "metadata",
                          "optional": false,
                          "range": [
                            126,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "range": [
                                  158,
                                  165
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 5
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "range": [
                                  166,
                                  174
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                158,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 5
                                },
                                "start": {
                                  "column": 44,
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
                              "name": "PRIVATE_METADATA",
                              "optional": false,
                              "range": [
                                137,
                                153
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 5
                                },
                                "start": {
                                  "column": 23,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "range": [
                                154,
                                157
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 5
                                },
                                "start": {
                                  "column": 40,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              137,
                              157
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 5
                              },
                              "start": {
                                "column": 23,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            137,
                            175
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          126,
                          175
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
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
                    "kind": "let",
                    "range": [
                      122,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
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
                              "name": "metadata",
                              "optional": false,
                              "range": [
                                215,
                                223
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 8
                                },
                                "start": {
                                  "column": 12,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "range": [
                                226,
                                228
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 8
                                },
                                "start": {
                                  "column": 23,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              215,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            215,
                            229
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
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
                                  "name": "context",
                                  "optional": false,
                                  "range": [
                                    263,
                                    270
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "metadata",
                                  "optional": false,
                                  "range": [
                                    271,
                                    279
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  263,
                                  279
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "range": [
                                  281,
                                  289
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
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
                                "name": "PRIVATE_METADATA",
                                "optional": false,
                                "range": [
                                  242,
                                  258
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
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "set",
                                "optional": false,
                                "range": [
                                  259,
                                  262
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                242,
                                262
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 9
                                },
                                "start": {
                                  "column": 12,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              242,
                              290
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 9
                              },
                              "start": {
                                "column": 12,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            242,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        201,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 23,
                          "line": 7
                        }
                      }
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "metadata",
                        "optional": false,
                        "range": [
                          191,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 13,
                            "line": 7
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        190,
                        199
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
                    "range": [
                      186,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "metadata",
                          "optional": false,
                          "range": [
                            311,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            320,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 12
                            },
                            "start": {
                              "column": 17,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          311,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          327,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 12
                          },
                          "start": {
                            "column": 24,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        311,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      311,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
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
                  112,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 27,
                    "line": 4
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
                  "name": "_",
                  "optional": false,
                  "range": [
                    97,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "range": [
                    100,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                96,
                339
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              89,
              340
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          83,
          342
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 42,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "meta",
        "optional": false,
        "range": [
          50,
          54
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              58,
              66
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                60,
                66
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
            }
          },
          "range": [
            55,
            66
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 32,
                "line": 3
              }
            },
            "range": [
              73,
              81
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                75,
                81
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            }
          },
          "range": [
            68,
            81
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          }
        }
      ],
      "range": [
        41,
        342
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          368,
          403
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        380,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 18
                        },
                        "start": {
                          "column": 10,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "'y'",
                      "value": "y",
                      "range": [
                        385,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 18
                        },
                        "start": {
                          "column": 15,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "range": [
                      375,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 5,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    375,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 18
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                },
                "range": [
                  374,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                394,
                395
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                395,
                401
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  398,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
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
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 5,
                  "line": 19
                }
              }
            },
            "range": [
              374,
              401
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
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
            "column": 8,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  350,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 6,
                    "line": 16
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'x'",
                "value": "x",
                "range": [
                  355,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "range": [
                345,
                349
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 1,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              345,
              359
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 1,
                "line": 16
              }
            }
          },
          "range": [
            344,
            359
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          366,
          367
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        344,
        403
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  426,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 21,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "range": [
                    428,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 22
                    },
                    "start": {
                      "column": 23,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "metadata",
                  "optional": false,
                  "range": [
                    435,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 22
                    },
                    "start": {
                      "column": 30,
                      "line": 22
                    }
                  }
                },
                "range": [
                  428,
                  443
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 22
                  },
                  "start": {
                    "column": 23,
                    "line": 22
                  }
                }
              },
              "range": [
                426,
                444
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 22
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
              "name": "PRIVATE_METADATA",
              "optional": false,
              "range": [
                405,
                421
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 22
                },
                "start": {
                  "column": 0,
                  "line": 22
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                422,
                425
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 22
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            },
            "range": [
              405,
              425
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          "optional": false,
          "range": [
            405,
            445
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
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
            446,
            447
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 22
            },
            "start": {
              "column": 41,
              "line": 22
            }
          }
        },
        "range": [
          405,
          447
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        405,
        448
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  477,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 23
                  },
                  "start": {
                    "column": 21,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "range": [
                    479,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 23
                    },
                    "start": {
                      "column": 23,
                      "line": 23
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "metadata",
                  "optional": false,
                  "range": [
                    486,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 23
                    },
                    "start": {
                      "column": 30,
                      "line": 23
                    }
                  }
                },
                "range": [
                  479,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 23
                  },
                  "start": {
                    "column": 23,
                    "line": 23
                  }
                }
              },
              "range": [
                477,
                495
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 23
                },
                "start": {
                  "column": 21,
                  "line": 23
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
              "name": "PRIVATE_METADATA",
              "optional": false,
              "range": [
                456,
                472
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 0,
                  "line": 23
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                473,
                476
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 23
                }
              }
            },
            "range": [
              456,
              476
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "range": [
            456,
            496
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
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
            497,
            498
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 23
            },
            "start": {
              "column": 41,
              "line": 23
            }
          }
        },
        "range": [
          456,
          498
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        456,
        499
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
