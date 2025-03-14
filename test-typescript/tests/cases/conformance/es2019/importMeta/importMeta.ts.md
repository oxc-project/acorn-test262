__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    115,
    470
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": true,
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
                      "name": "response",
                      "optional": false,
                      "range": [
                        138,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "NewExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "\"../hamsters.jpg\"",
                                    "value": "../hamsters.jpg",
                                    "range": [
                                      169,
                                      186
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 3
                                      }
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MetaProperty",
                                      "meta": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "import",
                                        "optional": false,
                                        "range": [
                                          188,
                                          194
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 64,
                                            "line": 3
                                          },
                                          "start": {
                                            "column": 58,
                                            "line": 3
                                          }
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "meta",
                                        "optional": false,
                                        "range": [
                                          195,
                                          199
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 69,
                                            "line": 3
                                          },
                                          "start": {
                                            "column": 65,
                                            "line": 3
                                          }
                                        }
                                      },
                                      "range": [
                                        188,
                                        199
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 69,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 58,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "url",
                                      "optional": false,
                                      "range": [
                                        200,
                                        203
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 73,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 70,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      188,
                                      203
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 73,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 58,
                                        "line": 3
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "URL",
                                  "optional": false,
                                  "range": [
                                    165,
                                    168
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  161,
                                  204
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 3
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  205,
                                  213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 83,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                161,
                                213
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 3
                                },
                                "start": {
                                  "column": 31,
                                  "line": 3
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              161,
                              215
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 3
                              },
                              "start": {
                                "column": 31,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fetch",
                          "optional": false,
                          "range": [
                            155,
                            160
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 25,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          155,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        149,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 3
                        },
                        "start": {
                          "column": 19,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      138,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  132,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
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
                      "name": "blob",
                      "optional": false,
                      "range": [
                        226,
                        230
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
                    "init": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "response",
                            "optional": false,
                            "range": [
                              239,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 4
                              },
                              "start": {
                                "column": 21,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "blob",
                            "optional": false,
                            "range": [
                              248,
                              252
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 4
                              },
                              "start": {
                                "column": 30,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            239,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 4
                            },
                            "start": {
                              "column": 21,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          239,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        233,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      226,
                      254
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
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  220,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 4
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
                      "name": "size",
                      "optional": false,
                      "range": [
                        265,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "init": {
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MetaProperty",
                              "meta": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "import",
                                "optional": false,
                                "range": [
                                  272,
                                  278
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 6
                                  }
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "meta",
                                "optional": false,
                                "range": [
                                  279,
                                  283
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                272,
                                283
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 6
                                },
                                "start": {
                                  "column": 15,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scriptElement",
                              "optional": false,
                              "range": [
                                284,
                                297
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 6
                                },
                                "start": {
                                  "column": 27,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              272,
                              297
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 6
                              },
                              "start": {
                                "column": 15,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dataset",
                            "optional": false,
                            "range": [
                              298,
                              305
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 6
                              },
                              "start": {
                                "column": 41,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            272,
                            305
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 6
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "range": [
                            306,
                            310
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 6
                            },
                            "start": {
                              "column": 49,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          272,
                          310
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "300",
                        "value": 300,
                        "range": [
                          314,
                          317
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 6
                          },
                          "start": {
                            "column": 57,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        272,
                        317
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      265,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  259,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
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
                      "name": "image",
                      "optional": false,
                      "range": [
                        328,
                        333
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
                    "init": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Image",
                        "optional": false,
                        "range": [
                          340,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 8
                          },
                          "start": {
                            "column": 20,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        336,
                        347
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      328,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  322,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 8
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "range": [
                        351,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 9
                        },
                        "start": {
                          "column": 2,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "range": [
                        357,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      351,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 9
                      },
                      "start": {
                        "column": 2,
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
                        "name": "blob",
                        "optional": false,
                        "range": [
                          383,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 9
                          },
                          "start": {
                            "column": 34,
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
                        "name": "URL",
                        "optional": false,
                        "range": [
                          363,
                          366
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createObjectURL",
                        "optional": false,
                        "range": [
                          367,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        363,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 9
                        },
                        "start": {
                          "column": 14,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      363,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 9
                      },
                      "start": {
                        "column": 14,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    351,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 9
                    },
                    "start": {
                      "column": 2,
                      "line": 9
                    }
                  }
                },
                "range": [
                  351,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "range": [
                        392,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 10
                        },
                        "start": {
                          "column": 2,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "range": [
                        398,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      392,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 10
                      },
                      "start": {
                        "column": 2,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "image",
                        "optional": false,
                        "range": [
                          406,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "height",
                        "optional": false,
                        "range": [
                          412,
                          418
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 10
                          },
                          "start": {
                            "column": 22,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        406,
                        418
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
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "range": [
                        421,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 10
                        },
                        "start": {
                          "column": 31,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      406,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 16,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    392,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 10
                    }
                  }
                },
                "range": [
                  392,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 2,
                    "line": 10
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
                      "name": "image",
                      "optional": false,
                      "range": [
                        456,
                        461
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 28,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "document",
                        "optional": false,
                        "range": [
                          430,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 12
                          },
                          "start": {
                            "column": 2,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "body",
                        "optional": false,
                        "range": [
                          439,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 12
                          },
                          "start": {
                            "column": 11,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        430,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 2,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "appendChild",
                      "optional": false,
                      "range": [
                        444,
                        455
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      430,
                      455
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 2,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    430,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 12
                    }
                  }
                },
                "range": [
                  430,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 35,
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
              128,
              465
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            116,
            465
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 1,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          115,
          468
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        115,
        469
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    104
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        27
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "range": [
                  15,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "meta",
                "optional": false,
                "range": [
                  22,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              },
              "range": [
                15,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          7,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        28,
        56
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "range": [
                  43,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "metal",
                "optional": false,
                "range": [
                  50,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                43,
                55
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              39,
              55
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          35,
          56
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        57,
        103
      ],
      "attributes": [],
      "declaration": {
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
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "range": [
                      72,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "range": [
                      79,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    72,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "range": [
                    86,
                    92
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
                },
                "range": [
                  72,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "malkovich",
                "optional": false,
                "range": [
                  93,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              },
              "range": [
                72,
                102
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              68,
              102
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          64,
          103
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 46,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    101
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
            "name": "globalA",
            "optional": false,
            "range": [
              4,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "import",
              "optional": false,
              "range": [
                14,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "range": [
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "range": [
              14,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            4,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "globalB",
            "optional": false,
            "range": [
              31,
              38
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "import",
              "optional": false,
              "range": [
                41,
                47
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metal",
              "optional": false,
              "range": [
                48,
                53
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              41,
              53
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "range": [
            31,
            53
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        27,
        54
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "globalC",
            "optional": false,
            "range": [
              59,
              66
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
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MetaProperty",
                "meta": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "range": [
                    69,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "range": [
                    76,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "range": [
                  69,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "range": [
                  83,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "range": [
                69,
                89
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "malkovich",
              "optional": false,
              "range": [
                90,
                99
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            },
            "range": [
              69,
              99
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            59,
            99
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        55,
        100
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    292
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        81
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
                    "line": 1
                  }
                },
                "range": [
                  16,
                  28
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportMeta",
                    "optional": false,
                    "range": [
                      18,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 1
                      },
                      "start": {
                        "column": 18,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    18,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                13,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "range": [
                      31,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 1
                      },
                      "start": {
                        "column": 31,
                        "line": 1
                      }
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "range": [
                      38,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 38,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    31,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 1
                    },
                    "start": {
                      "column": 31,
                      "line": 1
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "blah",
                  "optional": false,
                  "range": [
                    43,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 1
                    },
                    "start": {
                      "column": 43,
                      "line": 1
                    }
                  }
                },
                "range": [
                  31,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 31,
                    "line": 1
                  }
                }
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MetaProperty",
                    "meta": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "import",
                      "optional": false,
                      "range": [
                        50,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 1
                        },
                        "start": {
                          "column": 50,
                          "line": 1
                        }
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "meta",
                      "optional": false,
                      "range": [
                        57,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 1
                        },
                        "start": {
                          "column": 57,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      50,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 1
                      },
                      "start": {
                        "column": 50,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blue",
                    "optional": false,
                    "range": [
                      62,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 1
                      },
                      "start": {
                        "column": 62,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    50,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                },
                "right": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "range": [
                      69,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 1
                      },
                      "start": {
                        "column": 69,
                        "line": 1
                      }
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "range": [
                      76,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 1
                      },
                      "start": {
                        "column": 76,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    69,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 1
                    },
                    "start": {
                      "column": 69,
                      "line": 1
                    }
                  }
                },
                "range": [
                  50,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              "range": [
                31,
                80
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              80
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          81
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 81,
          "line": 1
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MetaProperty",
          "meta": {
            "type": "Identifier",
            "decorators": [],
            "name": "import",
            "optional": false,
            "range": [
              82,
              88
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "meta",
            "optional": false,
            "range": [
              89,
              93
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "range": [
            82,
            93
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            96,
            99
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        },
        "range": [
          82,
          99
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        82,
        100
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                172,
                238
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wellKnownProperty",
                    "optional": false,
                    "range": [
                      178,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
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
                        "column": 59,
                        "line": 7
                      },
                      "start": {
                        "column": 21,
                        "line": 7
                      }
                    },
                    "range": [
                      195,
                      233
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              199,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 7
                              },
                              "start": {
                                "column": 25,
                                "line": 7
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
                                "column": 34,
                                "line": 7
                              },
                              "start": {
                                "column": 26,
                                "line": 7
                              }
                            },
                            "range": [
                              200,
                              208
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                202,
                                208
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 7
                                },
                                "start": {
                                  "column": 28,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            199,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 7
                            },
                            "start": {
                              "column": 25,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              210,
                              211
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 7
                              },
                              "start": {
                                "column": 36,
                                "line": 7
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
                                "column": 45,
                                "line": 7
                              },
                              "start": {
                                "column": 37,
                                "line": 7
                              }
                            },
                            "range": [
                              211,
                              219
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                213,
                                219
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 7
                                },
                                "start": {
                                  "column": 39,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            210,
                            220
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 7
                            },
                            "start": {
                              "column": 36,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              221,
                              222
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 7
                              },
                              "start": {
                                "column": 47,
                                "line": 7
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
                                "column": 57,
                                "line": 7
                              },
                              "start": {
                                "column": 48,
                                "line": 7
                              }
                            },
                            "range": [
                              222,
                              231
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                224,
                                231
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 7
                                },
                                "start": {
                                  "column": 50,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            221,
                            231
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 7
                            },
                            "start": {
                              "column": 47,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        197,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 7
                        },
                        "start": {
                          "column": 23,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    178,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 7
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
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportMeta",
              "optional": false,
              "range": [
                161,
                171
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "range": [
              151,
              238
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          147,
          240
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          140,
          146
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 8,
            "line": 5
          }
        }
      },
      "kind": "global",
      "range": [
        132,
        240
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    250,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    250,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "range": [
                  250,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    253,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    253,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                },
                "range": [
                  253,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    256,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    256,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                },
                "range": [
                  256,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              248,
              259
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "range": [
                  262,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "meta",
                "optional": false,
                "range": [
                  269,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "range": [
                262,
                273
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "wellKnownProperty",
              "optional": false,
              "range": [
                274,
                291
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 11
                },
                "start": {
                  "column": 32,
                  "line": 11
                }
              }
            },
            "range": [
              262,
              291
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 11
              },
              "start": {
                "column": 20,
                "line": 11
              }
            }
          },
          "range": [
            248,
            291
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 11
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
        242,
        292
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 50,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
