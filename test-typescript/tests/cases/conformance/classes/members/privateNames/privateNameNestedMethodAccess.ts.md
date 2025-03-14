__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    455
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          454
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
                14,
                18
              ],
              "loc": {
                "end": {
                  "column": 8,
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
            "value": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                21,
                23
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              24
            ],
            "loc": {
              "end": {
                "column": 14,
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
              "type": "PrivateIdentifier",
              "name": "bar",
              "range": [
                29,
                33
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                33,
                53
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
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            42,
                            43
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 3
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          38,
                          45
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 13,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "range": [
                          46,
                          50
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 3
                          },
                          "start": {
                            "column": 21,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        38,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 3
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      38,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  36,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
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
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              29,
              53
            ],
            "loc": {
              "end": {
                "column": 28,
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
              "type": "PrivateIdentifier",
              "name": "baz",
              "range": [
                62,
                66
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                66,
                83
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        78,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      71,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  69,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
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
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "range": [
              58,
              83
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
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
              "name": "m",
              "optional": false,
              "range": [
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
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
                90,
                452
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ClassExpression",
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "range": [
                          118,
                          446
                        ],
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "PrivateIdentifier",
                              "name": "bar",
                              "range": [
                                132,
                                136
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
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                136,
                                141
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "range": [
                                  139,
                                  141
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 8
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
                                  "column": 21,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              132,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
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
                                154,
                                165
                              ],
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
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
                            "kind": "constructor",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                165,
                                312
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
                                        "type": "NewExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "range": [
                                            190,
                                            191
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "range": [
                                          186,
                                          193
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "range": [
                                          194,
                                          198
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        186,
                                        198
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      186,
                                      199
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 10
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "range": [
                                            220,
                                            221
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "range": [
                                          216,
                                          223
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "range": [
                                          224,
                                          228
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
                                        216,
                                        228
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      216,
                                      229
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 11
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "range": [
                                            259,
                                            260
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "range": [
                                          255,
                                          262
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "baz",
                                        "range": [
                                          263,
                                          267
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        255,
                                        267
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "range": [
                                      255,
                                      268
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 12
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "D",
                                          "optional": false,
                                          "range": [
                                            289,
                                            290
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "range": [
                                          285,
                                          292
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "range": [
                                          293,
                                          297
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
                                        285,
                                        297
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      285,
                                      298
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 13
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  168,
                                  312
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 9
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
                                  "line": 14
                                },
                                "start": {
                                  "column": 23,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              154,
                              312
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 14
                              },
                              "start": {
                                "column": 12,
                                "line": 9
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
                              "name": "n",
                              "optional": false,
                              "range": [
                                326,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
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
                                327,
                                436
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
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          354,
                                          355
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "range": [
                                          356,
                                          360
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "range": [
                                        354,
                                        360
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      354,
                                      361
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 17
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          378,
                                          379
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 18
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 18
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "range": [
                                          380,
                                          384
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 18
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 18
                                          }
                                        }
                                      },
                                      "range": [
                                        378,
                                        384
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 18
                                        }
                                      }
                                    },
                                    "range": [
                                      378,
                                      385
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 18
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          402,
                                          403
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "unknown",
                                        "range": [
                                          404,
                                          412
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "range": [
                                        402,
                                        412
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "range": [
                                      402,
                                      413
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 19
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  336,
                                  436
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 22,
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 16
                                      }
                                    },
                                    "range": [
                                      329,
                                      334
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        331,
                                        334
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 16
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    328,
                                    334
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 16
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 20
                                },
                                "start": {
                                  "column": 13,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              326,
                              436
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 20
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 21
                          },
                          "start": {
                            "column": 23,
                            "line": 7
                          }
                        }
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          116,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      },
                      "implements": [],
                      "superClass": null,
                      "range": [
                        110,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      103,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  93,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 6
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
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              }
            },
            "range": [
              89,
              452
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
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
            "line": 23
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
        "name": "C",
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
        454
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
