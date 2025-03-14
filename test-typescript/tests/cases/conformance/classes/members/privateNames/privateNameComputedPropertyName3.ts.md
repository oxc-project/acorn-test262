__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    351
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          305
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "name",
              "range": [
                16,
                21
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              16,
              22
            ],
            "loc": {
              "end": {
                "column": 10,
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
                28,
                39
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                39,
                80
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
                            56,
                            60
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "name",
                          "range": [
                            61,
                            66
                          ],
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
                          56,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          69,
                          73
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 5
                          },
                          "start": {
                            "column": 21,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        56,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      56,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  46,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 22,
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    40,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              28,
              80
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "range": [
                86,
                94
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                94,
                303
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
                          "name": "obj",
                          "optional": false,
                          "range": [
                            114,
                            117
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            120,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          114,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      108,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        145,
                        257
                      ],
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "name": "y",
                            "range": [
                              159,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "value": {
                            "type": "Literal",
                            "raw": "100",
                            "value": 100,
                            "range": [
                              164,
                              167
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
                            159,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "computed": true,
                          "decorators": [],
                          "key": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "range": [
                                183,
                                186
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 14
                                },
                                "start": {
                                  "column": 13,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "name",
                              "range": [
                                187,
                                192
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 14
                                },
                                "start": {
                                  "column": 17,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              183,
                              192
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 14
                              },
                              "start": {
                                "column": 13,
                                "line": 14
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
                              193,
                              247
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        221,
                                        222
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "right": {
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
                                            "column": 31,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "y",
                                        "range": [
                                          230,
                                          232
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "range": [
                                        225,
                                        232
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      221,
                                      232
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "range": [
                                    214,
                                    233
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 15
                                    }
                                  }
                                }
                              ],
                              "range": [
                                196,
                                247
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 16
                                },
                                "start": {
                                  "column": 26,
                                  "line": 14
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
                                "column": 13,
                                "line": 16
                              },
                              "start": {
                                "column": 23,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            182,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 11
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "range": [
                        141,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      135,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "range": [
                              278,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 19
                              },
                              "start": {
                                "column": 19,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            274,
                            283
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 19
                            },
                            "start": {
                              "column": 15,
                              "line": 19
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
                            "name": "obj",
                            "optional": false,
                            "range": [
                              284,
                              287
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 19
                              },
                              "start": {
                                "column": 25,
                                "line": 19
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "name",
                            "range": [
                              288,
                              293
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 19
                              },
                              "start": {
                                "column": 29,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            284,
                            293
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 19
                            },
                            "start": {
                              "column": 25,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          274,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 19
                          },
                          "start": {
                            "column": 15,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        274,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 19
                        },
                        "start": {
                          "column": 15,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      267,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
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
                  98,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
                    "line": 8
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    95,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
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
                  "column": 12,
                  "line": 8
                }
              }
            },
            "range": [
              86,
              303
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
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
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 1
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
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
        305
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "100",
                "value": 100,
                "range": [
                  344,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 23
                  },
                  "start": {
                    "column": 37,
                    "line": 23
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"NAME\"",
                    "value": "NAME",
                    "range": [
                      327,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 20,
                        "line": 23
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    323,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 23
                    },
                    "start": {
                      "column": 16,
                      "line": 23
                    }
                  }
                },
                "range": [
                  319,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 23
                  },
                  "start": {
                    "column": 12,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getValue",
                "optional": false,
                "range": [
                  335,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 28,
                    "line": 23
                  }
                }
              },
              "range": [
                319,
                343
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              319,
              348
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 23
              },
              "start": {
                "column": 12,
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
            "name": "console",
            "optional": false,
            "range": [
              307,
              314
            ],
            "loc": {
              "end": {
                "column": 7,
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
            "name": "log",
            "optional": false,
            "range": [
              315,
              318
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            307,
            318
          ],
          "loc": {
            "end": {
              "column": 11,
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
          307,
          349
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
        307,
        350
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
