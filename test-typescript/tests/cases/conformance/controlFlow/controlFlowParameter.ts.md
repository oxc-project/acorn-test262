__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    563
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
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
                  "raw": "\"ok\"",
                  "value": "ok",
                  "range": [
                    97,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
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
                    85,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
                      "line": 6
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
                    93,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "range": [
                  85,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                85,
                102
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "range": [
              85,
              103
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          81,
          156
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 2,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                23,
                32
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  25,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              15,
              32
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"bad\"",
                          "value": "bad",
                          "range": [
                            64,
                            69
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          58,
                          63
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        54,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 10,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      48,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  42,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 4
                  },
                  "start": {
                    "column": 29,
                    "line": 2
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                36,
                75
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              35,
              78
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          "range": [
            15,
            78
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 4
            },
            "start": {
              "column": 2,
              "line": 2
            }
          }
        }
      ],
      "range": [
        0,
        156
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                260,
                261
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
                }
              }
            },
            "range": [
              260,
              262
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          }
        ],
        "range": [
          256,
          305
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 2,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          167,
          169
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
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
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            },
            "range": [
              174,
              203
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    176,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    185,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    194,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                176,
                203
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              }
            }
          },
          "range": [
            173,
            203
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 10
            },
            "start": {
              "column": 2,
              "line": 10
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              },
              "range": [
                215,
                224
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  217,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              207,
              224
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          240,
                          241
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 12
                          },
                          "start": {
                            "column": 4,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          244,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        240,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 4,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      240,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  234,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 13
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                228,
                250
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              227,
              253
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          },
          "range": [
            207,
            253
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 13
            },
            "start": {
              "column": 2,
              "line": 11
            }
          }
        }
      ],
      "range": [
        158,
        305
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                414,
                415
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 24
                },
                "start": {
                  "column": 2,
                  "line": 24
                }
              }
            },
            "range": [
              414,
              416
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          }
        ],
        "range": [
          410,
          447
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 2,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          316,
          318
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 19
                },
                "start": {
                  "column": 3,
                  "line": 19
                }
              },
              "range": [
                323,
                352
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      325,
                      331
                    ],
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
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      334,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      343,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 23,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  325,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              322,
              352
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              355,
              356
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 35,
                "line": 19
              }
            }
          },
          "range": [
            322,
            356
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 19
            },
            "start": {
              "column": 2,
              "line": 19
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 20
                }
              },
              "range": [
                368,
                377
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  370,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              360,
              377
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          393,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 21
                          },
                          "start": {
                            "column": 4,
                            "line": 21
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"\"",
                        "value": "",
                        "range": [
                          397,
                          399
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 21
                          },
                          "start": {
                            "column": 8,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        393,
                        399
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 21
                        },
                        "start": {
                          "column": 4,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      393,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 21
                      },
                      "start": {
                        "column": 4,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  387,
                  404
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 22
                  },
                  "start": {
                    "column": 29,
                    "line": 20
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                381,
                404
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 22
                },
                "start": {
                  "column": 23,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              380,
              407
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 20
              }
            }
          },
          "range": [
            360,
            407
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 22
            },
            "start": {
              "column": 2,
              "line": 20
            }
          }
        }
      ],
      "range": [
        307,
        447
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 18
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                538,
                539
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 31
                },
                "start": {
                  "column": 2,
                  "line": 31
                }
              }
            },
            "range": [
              538,
              540
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          }
        ],
        "range": [
          534,
          562
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 2,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          458,
          460
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 28
                },
                "start": {
                  "column": 3,
                  "line": 28
                }
              },
              "range": [
                465,
                494
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      467,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 28
                      },
                      "start": {
                        "column": 5,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      476,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 28
                      },
                      "start": {
                        "column": 14,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      485,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  467,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              464,
              494
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              497,
              498
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 28
              },
              "start": {
                "column": 35,
                "line": 28
              }
            }
          },
          "range": [
            464,
            498
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 28
            },
            "start": {
              "column": 2,
              "line": 28
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      506,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 29
                      },
                      "start": {
                        "column": 6,
                        "line": 29
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      510,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 29
                      },
                      "start": {
                        "column": 10,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    506,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 29
                    },
                    "start": {
                      "column": 6,
                      "line": 29
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    516,
                    517
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 29
                    },
                    "start": {
                      "column": 16,
                      "line": 29
                    }
                  }
                },
                "range": [
                  504,
                  517
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
              502,
              519
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          "optional": false,
          "right": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                522,
                524
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                528,
                531
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 29
                },
                "start": {
                  "column": 28,
                  "line": 29
                }
              }
            },
            "range": [
              522,
              531
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            }
          },
          "range": [
            502,
            531
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 29
            },
            "start": {
              "column": 2,
              "line": 29
            }
          }
        }
      ],
      "range": [
        449,
        562
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
