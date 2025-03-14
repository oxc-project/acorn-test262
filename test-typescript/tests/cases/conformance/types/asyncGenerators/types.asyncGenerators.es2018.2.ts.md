__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2352
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  49,
                  51
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
              "delegate": true,
              "range": [
                42,
                51
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              42,
              52
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
          }
        ],
        "range": [
          36,
          54
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 36,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType1",
        "optional": false,
        "range": [
          17,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inferReturnType2",
                  "optional": false,
                  "range": [
                    104,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "range": [
                  104,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "delegate": true,
              "range": [
                97,
                122
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              97,
              123
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          91,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 36,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType2",
        "optional": false,
        "range": [
          72,
          88
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "params": [],
      "range": [
        55,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          192,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 8
                          },
                          "start": {
                            "column": 28,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          195,
                          196
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 8
                          },
                          "start": {
                            "column": 31,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      191,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 27,
                        "line": 8
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
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      175,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "range": [
                      183,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    175,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  175,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "delegate": true,
              "range": [
                168,
                198
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              168,
              199
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          162,
          201
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 36,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType3",
        "optional": false,
        "range": [
          143,
          159
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [],
      "range": [
        126,
        201
      ],
      "loc": {
        "end": {
          "column": 1,
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
            "name": "assignability1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              },
              "range": [
                222,
                259
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  },
                  "range": [
                    227,
                    259
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        251,
                        259
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            252,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 10
                            },
                            "start": {
                              "column": 50,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 10
                        },
                        "start": {
                          "column": 49,
                          "line": 10
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "range": [
                        230,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 10
                        },
                        "start": {
                          "column": 28,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      230,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  224,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              208,
              259
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        294,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 11
                        },
                        "start": {
                          "column": 10,
                          "line": 11
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      288,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    288,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                282,
                300
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 80,
                  "line": 10
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              262,
              300
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 60,
                "line": 10
              }
            }
          },
          "range": [
            208,
            300
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        202,
        301
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "name": "assignability2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              },
              "range": [
                322,
                359
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 13
                    },
                    "start": {
                      "column": 25,
                      "line": 13
                    }
                  },
                  "range": [
                    327,
                    359
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        351,
                        359
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            352,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 13
                            },
                            "start": {
                              "column": 50,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 13
                        },
                        "start": {
                          "column": 49,
                          "line": 13
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "range": [
                        330,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 13
                        },
                        "start": {
                          "column": 28,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      330,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 13
                      },
                      "start": {
                        "column": 28,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  324,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              308,
              359
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"a\"",
                          "value": "a",
                          "range": [
                            396,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"b\"",
                          "value": "b",
                          "range": [
                            401,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 14
                            },
                            "start": {
                              "column": 17,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        395,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      388,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    388,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                382,
                408
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 15
                },
                "start": {
                  "column": 80,
                  "line": 13
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              362,
              408
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 60,
                "line": 13
              }
            }
          },
          "range": [
            308,
            408
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        302,
        409
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "assignability3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              },
              "range": [
                430,
                467
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 16
                    },
                    "start": {
                      "column": 25,
                      "line": 16
                    }
                  },
                  "range": [
                    435,
                    467
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        459,
                        467
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            460,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 16
                            },
                            "start": {
                              "column": 50,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 16
                        },
                        "start": {
                          "column": 49,
                          "line": 16
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "range": [
                        438,
                        459
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 16
                        },
                        "start": {
                          "column": 28,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      438,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 16
                      },
                      "start": {
                        "column": 28,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  432,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 16
                  },
                  "start": {
                    "column": 22,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              416,
              467
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "YieldExpression",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "\"a\"",
                                  "value": "a",
                                  "range": [
                                    532,
                                    535
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 17
                                    }
                                  }
                                },
                                "delegate": false,
                                "range": [
                                  526,
                                  535
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                526,
                                536
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 17
                                },
                                "start": {
                                  "column": 34,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "range": [
                            524,
                            538
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 17
                            },
                            "start": {
                              "column": 32,
                              "line": 17
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "range": [
                          504,
                          538
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        503,
                        541
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 17
                        },
                        "start": {
                          "column": 11,
                          "line": 17
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      496,
                      541
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    496,
                    542
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                490,
                544
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 18
                },
                "start": {
                  "column": 80,
                  "line": 16
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              470,
              544
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 60,
                "line": 16
              }
            }
          },
          "range": [
            416,
            544
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        410,
        545
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "assignability4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 19
                }
              },
              "range": [
                566,
                595
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 19
                    },
                    "start": {
                      "column": 25,
                      "line": 19
                    }
                  },
                  "range": [
                    571,
                    595
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        587,
                        595
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            588,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 19
                            },
                            "start": {
                              "column": 42,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 19
                        },
                        "start": {
                          "column": 41,
                          "line": 19
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "range": [
                        574,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 19
                        },
                        "start": {
                          "column": 28,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      574,
                      595
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 19
                      },
                      "start": {
                        "column": 28,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  568,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 19
                  },
                  "start": {
                    "column": 22,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              552,
              595
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        630,
                        633
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 20
                        },
                        "start": {
                          "column": 10,
                          "line": 20
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      624,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 20
                      },
                      "start": {
                        "column": 4,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    624,
                    634
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 20
                    },
                    "start": {
                      "column": 4,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                618,
                636
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 21
                },
                "start": {
                  "column": 72,
                  "line": 19
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              598,
              636
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 52,
                "line": 19
              }
            }
          },
          "range": [
            552,
            636
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        546,
        637
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "assignability5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 22
                },
                "start": {
                  "column": 20,
                  "line": 22
                }
              },
              "range": [
                658,
                687
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 22
                    },
                    "start": {
                      "column": 25,
                      "line": 22
                    }
                  },
                  "range": [
                    663,
                    687
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        679,
                        687
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            680,
                            686
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 22
                            },
                            "start": {
                              "column": 42,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 22
                        },
                        "start": {
                          "column": 41,
                          "line": 22
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "range": [
                        666,
                        679
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 22
                        },
                        "start": {
                          "column": 28,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      666,
                      687
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 22
                      },
                      "start": {
                        "column": 28,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  660,
                  687
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              644,
              687
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"a\"",
                          "value": "a",
                          "range": [
                            724,
                            727
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 23
                            },
                            "start": {
                              "column": 12,
                              "line": 23
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"b\"",
                          "value": "b",
                          "range": [
                            729,
                            732
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
                        }
                      ],
                      "range": [
                        723,
                        733
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      716,
                      733
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    716,
                    734
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                710,
                736
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 24
                },
                "start": {
                  "column": 72,
                  "line": 22
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              690,
              736
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 52,
                "line": 22
              }
            }
          },
          "range": [
            644,
            736
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        638,
        737
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "assignability6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 25
                },
                "start": {
                  "column": 20,
                  "line": 25
                }
              },
              "range": [
                758,
                787
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 25
                    },
                    "start": {
                      "column": 25,
                      "line": 25
                    }
                  },
                  "range": [
                    763,
                    787
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        779,
                        787
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            780,
                            786
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 25
                            },
                            "start": {
                              "column": 42,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 25
                        },
                        "start": {
                          "column": 41,
                          "line": 25
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "range": [
                        766,
                        779
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 25
                        },
                        "start": {
                          "column": 28,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      766,
                      787
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 25
                      },
                      "start": {
                        "column": 28,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  760,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 25
                  },
                  "start": {
                    "column": 22,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              744,
              787
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "YieldExpression",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "\"a\"",
                                  "value": "a",
                                  "range": [
                                    852,
                                    855
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 26
                                    }
                                  }
                                },
                                "delegate": false,
                                "range": [
                                  846,
                                  855
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                846,
                                856
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 26
                                },
                                "start": {
                                  "column": 34,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            844,
                            858
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 26
                            },
                            "start": {
                              "column": 32,
                              "line": 26
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "range": [
                          824,
                          858
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 26
                          },
                          "start": {
                            "column": 12,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        823,
                        861
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 26
                        },
                        "start": {
                          "column": 11,
                          "line": 26
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      816,
                      861
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 26
                      },
                      "start": {
                        "column": 4,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    816,
                    862
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                810,
                864
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 27
                },
                "start": {
                  "column": 72,
                  "line": 25
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              790,
              864
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 52,
                "line": 25
              }
            }
          },
          "range": [
            744,
            864
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        738,
        865
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "assignability7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              },
              "range": [
                886,
                915
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 28
                    },
                    "start": {
                      "column": 25,
                      "line": 28
                    }
                  },
                  "range": [
                    891,
                    915
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        907,
                        915
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            908,
                            914
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 28
                            },
                            "start": {
                              "column": 42,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 28
                        },
                        "start": {
                          "column": 41,
                          "line": 28
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "range": [
                        894,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 28
                        },
                        "start": {
                          "column": 28,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      894,
                      915
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 28
                      },
                      "start": {
                        "column": 28,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  888,
                  915
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 28
                  },
                  "start": {
                    "column": 22,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              872,
              915
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        950,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 29
                        },
                        "start": {
                          "column": 10,
                          "line": 29
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      944,
                      953
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    944,
                    954
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                938,
                956
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 30
                },
                "start": {
                  "column": 72,
                  "line": 28
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              918,
              956
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 30
              },
              "start": {
                "column": 52,
                "line": 28
              }
            }
          },
          "range": [
            872,
            956
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        866,
        957
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "assignability8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              },
              "range": [
                978,
                1007
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 31
                    },
                    "start": {
                      "column": 25,
                      "line": 31
                    }
                  },
                  "range": [
                    983,
                    1007
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        999,
                        1007
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1000,
                            1006
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 31
                            },
                            "start": {
                              "column": 42,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 31
                        },
                        "start": {
                          "column": 41,
                          "line": 31
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "range": [
                        986,
                        999
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 31
                        },
                        "start": {
                          "column": 28,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      986,
                      1007
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 31
                      },
                      "start": {
                        "column": 28,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  980,
                  1007
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 31
                  },
                  "start": {
                    "column": 22,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              964,
              1007
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"a\"",
                          "value": "a",
                          "range": [
                            1044,
                            1047
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 32
                            },
                            "start": {
                              "column": 12,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"b\"",
                          "value": "b",
                          "range": [
                            1049,
                            1052
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 32
                            },
                            "start": {
                              "column": 17,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        1043,
                        1053
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 32
                        },
                        "start": {
                          "column": 11,
                          "line": 32
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      1036,
                      1053
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 32
                      },
                      "start": {
                        "column": 4,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    1036,
                    1054
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 32
                    },
                    "start": {
                      "column": 4,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                1030,
                1056
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 33
                },
                "start": {
                  "column": 72,
                  "line": 31
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1010,
              1056
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 33
              },
              "start": {
                "column": 52,
                "line": 31
              }
            }
          },
          "range": [
            964,
            1056
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        958,
        1057
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "assignability9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 34
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              },
              "range": [
                1078,
                1107
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 34
                    },
                    "start": {
                      "column": 25,
                      "line": 34
                    }
                  },
                  "range": [
                    1083,
                    1107
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1099,
                        1107
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1100,
                            1106
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 34
                            },
                            "start": {
                              "column": 42,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 34
                        },
                        "start": {
                          "column": 41,
                          "line": 34
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "range": [
                        1086,
                        1099
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 34
                        },
                        "start": {
                          "column": 28,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1086,
                      1107
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 34
                      },
                      "start": {
                        "column": 28,
                        "line": 34
                      }
                    }
                  }
                },
                "range": [
                  1080,
                  1107
                ],
                "loc": {
                  "end": {
                    "column": 49,
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
              1064,
              1107
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "FunctionExpression",
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "YieldExpression",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "\"a\"",
                                  "value": "a",
                                  "range": [
                                    1172,
                                    1175
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 35
                                    }
                                  }
                                },
                                "delegate": false,
                                "range": [
                                  1166,
                                  1175
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 35
                                  }
                                }
                              },
                              "range": [
                                1166,
                                1176
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 35
                                },
                                "start": {
                                  "column": 34,
                                  "line": 35
                                }
                              }
                            }
                          ],
                          "range": [
                            1164,
                            1178
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 35
                            },
                            "start": {
                              "column": 32,
                              "line": 35
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "range": [
                          1144,
                          1178
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 35
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1143,
                        1181
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      1136,
                      1181
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 35
                      },
                      "start": {
                        "column": 4,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1136,
                    1182
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                1130,
                1184
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 36
                },
                "start": {
                  "column": 72,
                  "line": 34
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1110,
              1184
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 36
              },
              "start": {
                "column": 52,
                "line": 34
              }
            }
          },
          "range": [
            1064,
            1184
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1058,
        1185
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  1268,
                  1271
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              },
              "delegate": false,
              "range": [
                1262,
                1271
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              1262,
              1272
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          1256,
          1274
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 70,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType1",
        "optional": false,
        "range": [
          1203,
          1222
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 37
          },
          "start": {
            "column": 17,
            "line": 37
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 37
          },
          "start": {
            "column": 38,
            "line": 37
          }
        },
        "range": [
          1224,
          1255
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1247,
              1255
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1248,
                  1254
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 37
                  },
                  "start": {
                    "column": 62,
                    "line": 37
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 37
              },
              "start": {
                "column": 61,
                "line": 37
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              1226,
              1247
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 37
              },
              "start": {
                "column": 40,
                "line": 37
              }
            }
          },
          "range": [
            1226,
            1255
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 37
            },
            "start": {
              "column": 40,
              "line": 37
            }
          }
        }
      },
      "range": [
        1186,
        1274
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      1359,
                      1362
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 41
                      },
                      "start": {
                        "column": 12,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      1364,
                      1367
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 41
                      },
                      "start": {
                        "column": 17,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  1358,
                  1368
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 41
                  },
                  "start": {
                    "column": 11,
                    "line": 41
                  }
                }
              },
              "delegate": true,
              "range": [
                1351,
                1368
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              1351,
              1369
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          1345,
          1371
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 70,
            "line": 40
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType2",
        "optional": false,
        "range": [
          1292,
          1311
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 40
          },
          "start": {
            "column": 17,
            "line": 40
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 40
          },
          "start": {
            "column": 38,
            "line": 40
          }
        },
        "range": [
          1313,
          1344
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1336,
              1344
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1337,
                  1343
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 40
                  },
                  "start": {
                    "column": 62,
                    "line": 40
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 40
              },
              "start": {
                "column": 61,
                "line": 40
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              1315,
              1336
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 40
              },
              "start": {
                "column": 40,
                "line": 40
              }
            }
          },
          "range": [
            1315,
            1344
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 40
            },
            "start": {
              "column": 40,
              "line": 40
            }
          }
        }
      },
      "range": [
        1275,
        1371
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "\"a\"",
                            "value": "a",
                            "range": [
                              1484,
                              1487
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 44
                              },
                              "start": {
                                "column": 40,
                                "line": 44
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            1478,
                            1487
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 44
                            },
                            "start": {
                              "column": 34,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1478,
                          1488
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 44
                          },
                          "start": {
                            "column": 34,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "range": [
                      1476,
                      1490
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 44
                      },
                      "start": {
                        "column": 32,
                        "line": 44
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "range": [
                    1456,
                    1490
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 44
                    },
                    "start": {
                      "column": 12,
                      "line": 44
                    }
                  }
                },
                "optional": false,
                "range": [
                  1455,
                  1493
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 44
                  },
                  "start": {
                    "column": 11,
                    "line": 44
                  }
                }
              },
              "delegate": true,
              "range": [
                1448,
                1493
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              1448,
              1494
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          1442,
          1496
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 70,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType3",
        "optional": false,
        "range": [
          1389,
          1408
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 43
          },
          "start": {
            "column": 17,
            "line": 43
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 43
          },
          "start": {
            "column": 38,
            "line": 43
          }
        },
        "range": [
          1410,
          1441
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1433,
              1441
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1434,
                  1440
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 43
                  },
                  "start": {
                    "column": 62,
                    "line": 43
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 43
              },
              "start": {
                "column": 61,
                "line": 43
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              1412,
              1433
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 43
              },
              "start": {
                "column": 40,
                "line": 43
              }
            }
          },
          "range": [
            1412,
            1441
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 43
            },
            "start": {
              "column": 40,
              "line": 43
            }
          }
        }
      },
      "range": [
        1372,
        1496
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  1571,
                  1574
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 47
                  },
                  "start": {
                    "column": 10,
                    "line": 47
                  }
                }
              },
              "delegate": false,
              "range": [
                1565,
                1574
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1565,
              1575
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          1559,
          1577
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 62,
            "line": 46
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType4",
        "optional": false,
        "range": [
          1514,
          1533
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 46
          },
          "start": {
            "column": 17,
            "line": 46
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 46
          },
          "start": {
            "column": 38,
            "line": 46
          }
        },
        "range": [
          1535,
          1558
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1550,
              1558
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1551,
                  1557
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 46
                  },
                  "start": {
                    "column": 54,
                    "line": 46
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 46
              },
              "start": {
                "column": 53,
                "line": 46
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              1537,
              1550
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 46
              },
              "start": {
                "column": 40,
                "line": 46
              }
            }
          },
          "range": [
            1537,
            1558
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 46
            },
            "start": {
              "column": 40,
              "line": 46
            }
          }
        }
      },
      "range": [
        1497,
        1577
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      1654,
                      1657
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 50
                      },
                      "start": {
                        "column": 12,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      1659,
                      1662
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 50
                      },
                      "start": {
                        "column": 17,
                        "line": 50
                      }
                    }
                  }
                ],
                "range": [
                  1653,
                  1663
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 50
                  },
                  "start": {
                    "column": 11,
                    "line": 50
                  }
                }
              },
              "delegate": true,
              "range": [
                1646,
                1663
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1646,
              1664
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1640,
          1666
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 62,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType5",
        "optional": false,
        "range": [
          1595,
          1614
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 49
          },
          "start": {
            "column": 17,
            "line": 49
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 49
          },
          "start": {
            "column": 38,
            "line": 49
          }
        },
        "range": [
          1616,
          1639
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1631,
              1639
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1632,
                  1638
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 49
                  },
                  "start": {
                    "column": 54,
                    "line": 49
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 49
              },
              "start": {
                "column": 53,
                "line": 49
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              1618,
              1631
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 49
              },
              "start": {
                "column": 40,
                "line": 49
              }
            }
          },
          "range": [
            1618,
            1639
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 49
            },
            "start": {
              "column": 40,
              "line": 49
            }
          }
        }
      },
      "range": [
        1578,
        1666
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "\"a\"",
                            "value": "a",
                            "range": [
                              1771,
                              1774
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 53
                              },
                              "start": {
                                "column": 40,
                                "line": 53
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            1765,
                            1774
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 53
                            },
                            "start": {
                              "column": 34,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          1765,
                          1775
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 53
                          },
                          "start": {
                            "column": 34,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "range": [
                      1763,
                      1777
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 53
                      },
                      "start": {
                        "column": 32,
                        "line": 53
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "range": [
                    1743,
                    1777
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 53
                    },
                    "start": {
                      "column": 12,
                      "line": 53
                    }
                  }
                },
                "optional": false,
                "range": [
                  1742,
                  1780
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 53
                  }
                }
              },
              "delegate": true,
              "range": [
                1735,
                1780
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1735,
              1781
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          1729,
          1783
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 62,
            "line": 52
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType6",
        "optional": false,
        "range": [
          1684,
          1703
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 52
          },
          "start": {
            "column": 17,
            "line": 52
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 52
          },
          "start": {
            "column": 38,
            "line": 52
          }
        },
        "range": [
          1705,
          1728
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1720,
              1728
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1721,
                  1727
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 52
                  },
                  "start": {
                    "column": 54,
                    "line": 52
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 52
              },
              "start": {
                "column": 53,
                "line": 52
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              1707,
              1720
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 52
              },
              "start": {
                "column": 40,
                "line": 52
              }
            }
          },
          "range": [
            1707,
            1728
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 52
            },
            "start": {
              "column": 40,
              "line": 52
            }
          }
        }
      },
      "range": [
        1667,
        1783
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  1858,
                  1861
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 56
                  },
                  "start": {
                    "column": 10,
                    "line": 56
                  }
                }
              },
              "delegate": false,
              "range": [
                1852,
                1861
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1852,
              1862
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1846,
          1864
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 62,
            "line": 55
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType7",
        "optional": false,
        "range": [
          1801,
          1820
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 55
          },
          "start": {
            "column": 17,
            "line": 55
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 55
          },
          "start": {
            "column": 38,
            "line": 55
          }
        },
        "range": [
          1822,
          1845
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1837,
              1845
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1838,
                  1844
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 55
                  },
                  "start": {
                    "column": 54,
                    "line": 55
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 55
              },
              "start": {
                "column": 53,
                "line": 55
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              1824,
              1837
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 55
              },
              "start": {
                "column": 40,
                "line": 55
              }
            }
          },
          "range": [
            1824,
            1845
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 55
            },
            "start": {
              "column": 40,
              "line": 55
            }
          }
        }
      },
      "range": [
        1784,
        1864
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      1941,
                      1944
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 59
                      },
                      "start": {
                        "column": 12,
                        "line": 59
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      1946,
                      1949
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 59
                      },
                      "start": {
                        "column": 17,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  1940,
                  1950
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 59
                  },
                  "start": {
                    "column": 11,
                    "line": 59
                  }
                }
              },
              "delegate": true,
              "range": [
                1933,
                1950
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1933,
              1951
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          1927,
          1953
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 62,
            "line": 58
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType8",
        "optional": false,
        "range": [
          1882,
          1901
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 58
          },
          "start": {
            "column": 17,
            "line": 58
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 58
          },
          "start": {
            "column": 38,
            "line": 58
          }
        },
        "range": [
          1903,
          1926
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1918,
              1926
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1919,
                  1925
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 58
                  },
                  "start": {
                    "column": 54,
                    "line": 58
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 58
              },
              "start": {
                "column": 53,
                "line": 58
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              1905,
              1918
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 58
              },
              "start": {
                "column": 40,
                "line": 58
              }
            }
          },
          "range": [
            1905,
            1926
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 58
            },
            "start": {
              "column": 40,
              "line": 58
            }
          }
        }
      },
      "range": [
        1865,
        1953
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "\"a\"",
                            "value": "a",
                            "range": [
                              2058,
                              2061
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 62
                              },
                              "start": {
                                "column": 40,
                                "line": 62
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            2052,
                            2061
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 62
                            },
                            "start": {
                              "column": 34,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          2052,
                          2062
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 62
                          },
                          "start": {
                            "column": 34,
                            "line": 62
                          }
                        }
                      }
                    ],
                    "range": [
                      2050,
                      2064
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 62
                      },
                      "start": {
                        "column": 32,
                        "line": 62
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "range": [
                    2030,
                    2064
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 62
                    },
                    "start": {
                      "column": 12,
                      "line": 62
                    }
                  }
                },
                "optional": false,
                "range": [
                  2029,
                  2067
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 62
                  },
                  "start": {
                    "column": 11,
                    "line": 62
                  }
                }
              },
              "delegate": true,
              "range": [
                2022,
                2067
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "range": [
              2022,
              2068
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "range": [
          2016,
          2070
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 62,
            "line": 61
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType9",
        "optional": false,
        "range": [
          1971,
          1990
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 61
          },
          "start": {
            "column": 17,
            "line": 61
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 61
          },
          "start": {
            "column": 38,
            "line": 61
          }
        },
        "range": [
          1992,
          2015
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2007,
              2015
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2008,
                  2014
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 61
                  },
                  "start": {
                    "column": 54,
                    "line": 61
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 61
              },
              "start": {
                "column": 53,
                "line": 61
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              1994,
              2007
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 61
              },
              "start": {
                "column": 40,
                "line": 61
              }
            }
          },
          "range": [
            1994,
            2015
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 61
            },
            "start": {
              "column": 40,
              "line": 61
            }
          }
        }
      },
      "range": [
        1954,
        2070
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2149,
                  2150
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 65
                  },
                  "start": {
                    "column": 10,
                    "line": 65
                  }
                }
              },
              "delegate": false,
              "range": [
                2143,
                2150
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              2143,
              2151
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          2137,
          2153
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 66,
            "line": 64
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType10",
        "optional": false,
        "range": [
          2088,
          2108
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 64
          },
          "start": {
            "column": 17,
            "line": 64
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 64
          },
          "start": {
            "column": 39,
            "line": 64
          }
        },
        "range": [
          2110,
          2136
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2128,
              2136
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2129,
                  2135
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 64
                  },
                  "start": {
                    "column": 58,
                    "line": 64
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 64
              },
              "start": {
                "column": 57,
                "line": 64
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "range": [
              2112,
              2128
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 64
              },
              "start": {
                "column": 41,
                "line": 64
              }
            }
          },
          "range": [
            2112,
            2136
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 64
            },
            "start": {
              "column": 41,
              "line": 64
            }
          }
        }
      },
      "range": [
        2071,
        2153
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2224,
                  2225
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 68
                  },
                  "start": {
                    "column": 10,
                    "line": 68
                  }
                }
              },
              "delegate": false,
              "range": [
                2218,
                2225
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              2218,
              2226
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "range": [
          2212,
          2228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 58,
            "line": 67
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType11",
        "optional": false,
        "range": [
          2171,
          2191
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 67
          },
          "start": {
            "column": 17,
            "line": 67
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 67
          },
          "start": {
            "column": 39,
            "line": 67
          }
        },
        "range": [
          2193,
          2211
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2203,
              2211
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2204,
                  2210
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 67
                  },
                  "start": {
                    "column": 50,
                    "line": 67
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 67
              },
              "start": {
                "column": 49,
                "line": 67
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Iterable",
            "optional": false,
            "range": [
              2195,
              2203
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 67
              },
              "start": {
                "column": 41,
                "line": 67
              }
            }
          },
          "range": [
            2195,
            2211
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 67
            },
            "start": {
              "column": 41,
              "line": 67
            }
          }
        }
      },
      "range": [
        2154,
        2228
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2299,
                  2300
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 71
                  },
                  "start": {
                    "column": 10,
                    "line": 71
                  }
                }
              },
              "delegate": false,
              "range": [
                2293,
                2300
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            },
            "range": [
              2293,
              2301
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          }
        ],
        "range": [
          2287,
          2303
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 58,
            "line": 70
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType12",
        "optional": false,
        "range": [
          2246,
          2266
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 70
          },
          "start": {
            "column": 17,
            "line": 70
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 70
          },
          "start": {
            "column": 39,
            "line": 70
          }
        },
        "range": [
          2268,
          2286
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2278,
              2286
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2279,
                  2285
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 70
                  },
                  "start": {
                    "column": 50,
                    "line": 70
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 70
              },
              "start": {
                "column": 49,
                "line": 70
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "range": [
              2270,
              2278
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 70
              },
              "start": {
                "column": 41,
                "line": 70
              }
            }
          },
          "range": [
            2270,
            2286
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 70
            },
            "start": {
              "column": 41,
              "line": 70
            }
          }
        }
      },
      "range": [
        2229,
        2303
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  2346,
                  2348
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 74
                  },
                  "start": {
                    "column": 11,
                    "line": 74
                  }
                }
              },
              "delegate": true,
              "range": [
                2339,
                2348
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              2339,
              2349
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "range": [
          2333,
          2351
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 29,
            "line": 73
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "yieldStar",
        "optional": false,
        "range": [
          2321,
          2330
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 73
          },
          "start": {
            "column": 17,
            "line": 73
          }
        }
      },
      "params": [],
      "range": [
        2304,
        2351
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 76
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
