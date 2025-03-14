__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    364
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  34,
                  183
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        44,
                        55
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
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
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        55,
                        130
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
                                  "raw": "\"hello\"",
                                  "value": "hello",
                                  "range": [
                                    84,
                                    91
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 4
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
                                    72,
                                    79
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 4
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
                                    80,
                                    83
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  72,
                                  83
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                72,
                                92
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 4
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              72,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    110,
                                    111
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 5
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "foo2",
                                  "range": [
                                    112,
                                    117
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  110,
                                  117
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                106,
                                119
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 5
                                },
                                "start": {
                                  "column": 12,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              106,
                              120
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          58,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
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
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      44,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                      "name": "test",
                      "optional": false,
                      "range": [
                        146,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        153,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 22,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      139,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                      "name": "field",
                      "optional": false,
                      "range": [
                        166,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        174,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      166,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "range": [
                28,
                183
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              184
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 2
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
              "type": "PrivateIdentifier",
              "name": "foo2",
              "range": [
                196,
                201
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  214,
                  254
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
                      "name": "otherClass",
                      "optional": false,
                      "range": [
                        231,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        244,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 28,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      224,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 29,
                    "line": 10
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
                  210,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 25,
                    "line": 10
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                204,
                254
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            },
            "range": [
              189,
              255
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
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
                261,
                262
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
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
                262,
                359
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                287,
                                288
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 15
                                },
                                "start": {
                                  "column": 20,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "foo",
                              "range": [
                                289,
                                293
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 15
                                },
                                "start": {
                                  "column": 22,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              287,
                              293
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 15
                              },
                              "start": {
                                "column": 20,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              294,
                              298
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
                          "range": [
                            287,
                            298
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 15
                            },
                            "start": {
                              "column": 20,
                              "line": 15
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
                            275,
                            282
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
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
                            283,
                            286
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 16,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          275,
                          286
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        275,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      275,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
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
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              308,
                              309
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 16
                              },
                              "start": {
                                "column": 8,
                                "line": 16
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "foo",
                            "range": [
                              310,
                              314
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 16
                              },
                              "start": {
                                "column": 10,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            308,
                            314
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "range": [
                            315,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          308,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          322,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 16
                          },
                          "start": {
                            "column": 22,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        308,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      308,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
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
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              338,
                              339
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 17
                              },
                              "start": {
                                "column": 12,
                                "line": 17
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "foo",
                            "range": [
                              340,
                              344
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 17
                              },
                              "start": {
                                "column": 14,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            338,
                            344
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          334,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                        "name": "field",
                        "optional": false,
                        "range": [
                          347,
                          352
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 21,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        334,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      334,
                      353
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                  265,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
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
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              }
            },
            "range": [
              261,
              359
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        361
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
      "column": 0,
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
