__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3989
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          36,
          39
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
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
        39
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
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
              "argument": null,
              "delegate": false,
              "range": [
                82,
                87
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              82,
              88
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          76,
          90
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 36,
            "line": 3
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
          57,
          73
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        40,
        90
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "delegate": false,
              "range": [
                133,
                140
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              133,
              141
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          127,
          143
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 36,
            "line": 6
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
          108,
          124
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "params": [],
      "range": [
        91,
        143
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      208,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 26,
                        "line": 10
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
                      192,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 10,
                        "line": 10
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
                      200,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    192,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  192,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "delegate": false,
              "range": [
                186,
                210
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              186,
              211
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          180,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 36,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType4",
        "optional": false,
        "range": [
          161,
          177
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "params": [],
      "range": [
        144,
        213
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
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
                  262,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              "delegate": false,
              "range": [
                256,
                263
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              256,
              264
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      291,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
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
                      275,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 14
                      },
                      "start": {
                        "column": 10,
                        "line": 14
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
                      283,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    275,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "range": [
                  275,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "delegate": false,
              "range": [
                269,
                293
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              269,
              294
            ],
            "loc": {
              "end": {
                "column": 29,
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
          250,
          296
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 36,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType5",
        "optional": false,
        "range": [
          231,
          247
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        }
      },
      "params": [],
      "range": [
        214,
        296
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      347,
                      348
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
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      350,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  346,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
                339,
                352
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              339,
              353
            ],
            "loc": {
              "end": {
                "column": 18,
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
          333,
          355
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 36,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType6",
        "optional": false,
        "range": [
          314,
          330
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        }
      },
      "params": [],
      "range": [
        297,
        355
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          422,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 20
                          },
                          "start": {
                            "column": 28,
                            "line": 20
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
                          406,
                          413
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
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "range": [
                          414,
                          421
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 20
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        406,
                        421
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 20
                        },
                        "start": {
                          "column": 12,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      406,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  405,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              },
              "delegate": true,
              "range": [
                398,
                425
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              398,
              426
            ],
            "loc": {
              "end": {
                "column": 32,
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
          392,
          428
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 36,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType7",
        "optional": false,
        "range": [
          373,
          389
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
          }
        }
      },
      "params": [],
      "range": [
        356,
        428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
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
                            "raw": "1",
                            "value": 1,
                            "range": [
                              507,
                              508
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 23
                              },
                              "start": {
                                "column": 40,
                                "line": 23
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            501,
                            508
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 23
                            },
                            "start": {
                              "column": 34,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          501,
                          509
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 23
                          },
                          "start": {
                            "column": 34,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      499,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 23
                      },
                      "start": {
                        "column": 32,
                        "line": 23
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "range": [
                    479,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
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
                  478,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 47,
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
                471,
                514
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              471,
              515
            ],
            "loc": {
              "end": {
                "column": 48,
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
          465,
          517
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 36,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType8",
        "optional": false,
        "range": [
          446,
          462
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 22
          }
        }
      },
      "params": [],
      "range": [
        429,
        517
      ],
      "loc": {
        "end": {
          "column": 1,
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
            "name": "assignability1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 25
                },
                "start": {
                  "column": 20,
                  "line": 25
                }
              },
              "range": [
                538,
                575
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 25
                    },
                    "start": {
                      "column": 25,
                      "line": 25
                    }
                  },
                  "range": [
                    543,
                    575
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        567,
                        575
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            568,
                            574
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 25
                            },
                            "start": {
                              "column": 50,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 25
                        },
                        "start": {
                          "column": 49,
                          "line": 25
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "range": [
                        546,
                        567
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
                    },
                    "range": [
                      546,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
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
                  540,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 57,
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
              524,
              575
            ],
            "loc": {
              "end": {
                "column": 57,
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
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        610,
                        611
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 26
                        },
                        "start": {
                          "column": 10,
                          "line": 26
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      604,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 26
                      },
                      "start": {
                        "column": 4,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    604,
                    612
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
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
                598,
                614
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 27
                },
                "start": {
                  "column": 80,
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
              578,
              614
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 60,
                "line": 25
              }
            }
          },
          "range": [
            524,
            614
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
        518,
        615
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
            "name": "assignability2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              },
              "range": [
                636,
                673
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 28
                    },
                    "start": {
                      "column": 25,
                      "line": 28
                    }
                  },
                  "range": [
                    641,
                    673
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        665,
                        673
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            666,
                            672
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 28
                            },
                            "start": {
                              "column": 50,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 28
                        },
                        "start": {
                          "column": 49,
                          "line": 28
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "range": [
                        644,
                        665
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
                    },
                    "range": [
                      644,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
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
                  638,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 57,
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
              622,
              673
            ],
            "loc": {
              "end": {
                "column": 57,
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
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            724,
                            725
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 29
                            },
                            "start": {
                              "column": 26,
                              "line": 29
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
                            708,
                            715
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 10,
                              "line": 29
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
                            716,
                            723
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 29
                            },
                            "start": {
                              "column": 18,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          708,
                          723
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 29
                          },
                          "start": {
                            "column": 10,
                            "line": 29
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        708,
                        726
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
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
                      702,
                      726
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    702,
                    727
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
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
                696,
                729
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 30
                },
                "start": {
                  "column": 80,
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
              676,
              729
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 30
              },
              "start": {
                "column": 60,
                "line": 28
              }
            }
          },
          "range": [
            622,
            729
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
        616,
        730
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
            "name": "assignability3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              },
              "range": [
                751,
                788
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 31
                    },
                    "start": {
                      "column": 25,
                      "line": 31
                    }
                  },
                  "range": [
                    756,
                    788
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        780,
                        788
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            781,
                            787
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 31
                            },
                            "start": {
                              "column": 50,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 31
                        },
                        "start": {
                          "column": 49,
                          "line": 31
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "range": [
                        759,
                        780
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
                    },
                    "range": [
                      759,
                      788
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
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
                  753,
                  788
                ],
                "loc": {
                  "end": {
                    "column": 57,
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
              737,
              788
            ],
            "loc": {
              "end": {
                "column": 57,
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
                          "raw": "1",
                          "value": 1,
                          "range": [
                            825,
                            826
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
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
                          "raw": "2",
                          "value": 2,
                          "range": [
                            828,
                            829
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 32
                            },
                            "start": {
                              "column": 15,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        824,
                        830
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
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
                      817,
                      830
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 32
                      },
                      "start": {
                        "column": 4,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    817,
                    831
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                811,
                833
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 33
                },
                "start": {
                  "column": 80,
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
              791,
              833
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 33
              },
              "start": {
                "column": 60,
                "line": 31
              }
            }
          },
          "range": [
            737,
            833
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
        731,
        834
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
            "name": "assignability4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 34
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              },
              "range": [
                855,
                892
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 34
                    },
                    "start": {
                      "column": 25,
                      "line": 34
                    }
                  },
                  "range": [
                    860,
                    892
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        884,
                        892
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            885,
                            891
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 34
                            },
                            "start": {
                              "column": 50,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 34
                        },
                        "start": {
                          "column": 49,
                          "line": 34
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "range": [
                        863,
                        884
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
                    },
                    "range": [
                      863,
                      892
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
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
                  857,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 57,
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
              841,
              892
            ],
            "loc": {
              "end": {
                "column": 57,
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
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                945,
                                946
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 35
                                },
                                "start": {
                                  "column": 28,
                                  "line": 35
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
                                929,
                                936
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 35
                                },
                                "start": {
                                  "column": 12,
                                  "line": 35
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
                                937,
                                944
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 35
                                },
                                "start": {
                                  "column": 20,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              929,
                              944
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
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
                            929,
                            947
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        928,
                        948
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
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
                      921,
                      948
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 35
                      },
                      "start": {
                        "column": 4,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    921,
                    949
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
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
                915,
                951
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 36
                },
                "start": {
                  "column": 80,
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
              895,
              951
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 36
              },
              "start": {
                "column": 60,
                "line": 34
              }
            }
          },
          "range": [
            841,
            951
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
        835,
        952
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
                  "column": 57,
                  "line": 37
                },
                "start": {
                  "column": 20,
                  "line": 37
                }
              },
              "range": [
                973,
                1010
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 37
                    },
                    "start": {
                      "column": 25,
                      "line": 37
                    }
                  },
                  "range": [
                    978,
                    1010
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1002,
                        1010
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1003,
                            1009
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 37
                            },
                            "start": {
                              "column": 50,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 37
                        },
                        "start": {
                          "column": 49,
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
                        981,
                        1002
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 37
                        },
                        "start": {
                          "column": 28,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      981,
                      1010
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 37
                      },
                      "start": {
                        "column": 28,
                        "line": 37
                      }
                    }
                  }
                },
                "range": [
                  975,
                  1010
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 37
                  },
                  "start": {
                    "column": 22,
                    "line": 37
                  }
                }
              }
            },
            "range": [
              959,
              1010
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
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
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    1075,
                                    1076
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 38
                                    }
                                  }
                                },
                                "delegate": false,
                                "range": [
                                  1069,
                                  1076
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                1069,
                                1077
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 38
                                },
                                "start": {
                                  "column": 34,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "range": [
                            1067,
                            1079
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 38
                            },
                            "start": {
                              "column": 32,
                              "line": 38
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "range": [
                          1047,
                          1079
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1046,
                        1082
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 38
                        },
                        "start": {
                          "column": 11,
                          "line": 38
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      1039,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 38
                      },
                      "start": {
                        "column": 4,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1039,
                    1083
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
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
                1033,
                1085
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 39
                },
                "start": {
                  "column": 80,
                  "line": 37
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1013,
              1085
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 39
              },
              "start": {
                "column": 60,
                "line": 37
              }
            }
          },
          "range": [
            959,
            1085
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        953,
        1086
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
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
                  "line": 40
                },
                "start": {
                  "column": 20,
                  "line": 40
                }
              },
              "range": [
                1107,
                1136
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 40
                    },
                    "start": {
                      "column": 25,
                      "line": 40
                    }
                  },
                  "range": [
                    1112,
                    1136
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1128,
                        1136
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1129,
                            1135
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 40
                            },
                            "start": {
                              "column": 42,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 40
                        },
                        "start": {
                          "column": 41,
                          "line": 40
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "range": [
                        1115,
                        1128
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 40
                        },
                        "start": {
                          "column": 28,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1115,
                      1136
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 40
                      },
                      "start": {
                        "column": 28,
                        "line": 40
                      }
                    }
                  }
                },
                "range": [
                  1109,
                  1136
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 40
                  },
                  "start": {
                    "column": 22,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              1093,
              1136
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
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
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1171,
                        1172
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 41
                        },
                        "start": {
                          "column": 10,
                          "line": 41
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      1165,
                      1172
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 41
                      },
                      "start": {
                        "column": 4,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1165,
                    1173
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
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
                1159,
                1175
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 42
                },
                "start": {
                  "column": 72,
                  "line": 40
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1139,
              1175
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 42
              },
              "start": {
                "column": 52,
                "line": 40
              }
            }
          },
          "range": [
            1093,
            1175
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1087,
        1176
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
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
                  "line": 43
                },
                "start": {
                  "column": 20,
                  "line": 43
                }
              },
              "range": [
                1197,
                1226
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 43
                    },
                    "start": {
                      "column": 25,
                      "line": 43
                    }
                  },
                  "range": [
                    1202,
                    1226
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1218,
                        1226
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1219,
                            1225
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 43
                            },
                            "start": {
                              "column": 42,
                              "line": 43
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 43
                        },
                        "start": {
                          "column": 41,
                          "line": 43
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterable",
                      "optional": false,
                      "range": [
                        1205,
                        1218
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 43
                        },
                        "start": {
                          "column": 28,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      1205,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 43
                      },
                      "start": {
                        "column": 28,
                        "line": 43
                      }
                    }
                  }
                },
                "range": [
                  1199,
                  1226
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 43
                  },
                  "start": {
                    "column": 22,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              1183,
              1226
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 43
              },
              "start": {
                "column": 6,
                "line": 43
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1277,
                            1278
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 44
                            },
                            "start": {
                              "column": 26,
                              "line": 44
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
                            1261,
                            1268
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 44
                            },
                            "start": {
                              "column": 10,
                              "line": 44
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
                            1269,
                            1276
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 44
                            },
                            "start": {
                              "column": 18,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1261,
                          1276
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 44
                          },
                          "start": {
                            "column": 10,
                            "line": 44
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1261,
                        1279
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 44
                        },
                        "start": {
                          "column": 10,
                          "line": 44
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      1255,
                      1279
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 44
                      },
                      "start": {
                        "column": 4,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1255,
                    1280
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
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
                1249,
                1282
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 45
                },
                "start": {
                  "column": 72,
                  "line": 43
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1229,
              1282
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 45
              },
              "start": {
                "column": 52,
                "line": 43
              }
            }
          },
          "range": [
            1183,
            1282
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1177,
        1283
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
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
                  "line": 46
                },
                "start": {
                  "column": 20,
                  "line": 46
                }
              },
              "range": [
                1304,
                1333
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 46
                    },
                    "start": {
                      "column": 25,
                      "line": 46
                    }
                  },
                  "range": [
                    1309,
                    1333
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1325,
                        1333
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1326,
                            1332
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 46
                            },
                            "start": {
                              "column": 42,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 46
                        },
                        "start": {
                          "column": 41,
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
                        1312,
                        1325
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 46
                        },
                        "start": {
                          "column": 28,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1312,
                      1333
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 46
                      },
                      "start": {
                        "column": 28,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  1306,
                  1333
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1290,
              1333
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
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
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1370,
                            1371
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 47
                            },
                            "start": {
                              "column": 12,
                              "line": 47
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            1373,
                            1374
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 47
                            },
                            "start": {
                              "column": 15,
                              "line": 47
                            }
                          }
                        }
                      ],
                      "range": [
                        1369,
                        1375
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 47
                        },
                        "start": {
                          "column": 11,
                          "line": 47
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      1362,
                      1375
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 47
                      },
                      "start": {
                        "column": 4,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1362,
                    1376
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                1356,
                1378
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 48
                },
                "start": {
                  "column": 72,
                  "line": 46
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1336,
              1378
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 48
              },
              "start": {
                "column": 52,
                "line": 46
              }
            }
          },
          "range": [
            1290,
            1378
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1284,
        1379
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 46
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
                  "line": 49
                },
                "start": {
                  "column": 20,
                  "line": 49
                }
              },
              "range": [
                1400,
                1429
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 49
                    },
                    "start": {
                      "column": 25,
                      "line": 49
                    }
                  },
                  "range": [
                    1405,
                    1429
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1421,
                        1429
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1422,
                            1428
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 49
                            },
                            "start": {
                              "column": 42,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 49
                        },
                        "start": {
                          "column": 41,
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
                        1408,
                        1421
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 49
                        },
                        "start": {
                          "column": 28,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1408,
                      1429
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 49
                      },
                      "start": {
                        "column": 28,
                        "line": 49
                      }
                    }
                  }
                },
                "range": [
                  1402,
                  1429
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 49
                  },
                  "start": {
                    "column": 22,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              1386,
              1429
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
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
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                1482,
                                1483
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 50
                                },
                                "start": {
                                  "column": 28,
                                  "line": 50
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
                                1466,
                                1473
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 50
                                },
                                "start": {
                                  "column": 12,
                                  "line": 50
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
                                1474,
                                1481
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 50
                                },
                                "start": {
                                  "column": 20,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              1466,
                              1481
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 50
                              },
                              "start": {
                                "column": 12,
                                "line": 50
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1466,
                            1484
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 50
                            },
                            "start": {
                              "column": 12,
                              "line": 50
                            }
                          }
                        }
                      ],
                      "range": [
                        1465,
                        1485
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
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
                      1458,
                      1485
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 50
                      },
                      "start": {
                        "column": 4,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1458,
                    1486
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
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
                1452,
                1488
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 51
                },
                "start": {
                  "column": 72,
                  "line": 49
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1432,
              1488
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 51
              },
              "start": {
                "column": 52,
                "line": 49
              }
            }
          },
          "range": [
            1386,
            1488
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1380,
        1489
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "assignability10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 52
                },
                "start": {
                  "column": 21,
                  "line": 52
                }
              },
              "range": [
                1511,
                1540
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 52
                    },
                    "start": {
                      "column": 26,
                      "line": 52
                    }
                  },
                  "range": [
                    1516,
                    1540
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1532,
                        1540
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1533,
                            1539
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 52
                            },
                            "start": {
                              "column": 43,
                              "line": 52
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 52
                        },
                        "start": {
                          "column": 42,
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
                        1519,
                        1532
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 52
                        },
                        "start": {
                          "column": 29,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1519,
                      1540
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 52
                      },
                      "start": {
                        "column": 29,
                        "line": 52
                      }
                    }
                  }
                },
                "range": [
                  1513,
                  1540
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 52
                  },
                  "start": {
                    "column": 23,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              1496,
              1540
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 52
              },
              "start": {
                "column": 6,
                "line": 52
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
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    1605,
                                    1606
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
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
                                  1599,
                                  1606
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 53
                                  }
                                }
                              },
                              "range": [
                                1599,
                                1607
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
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
                            1597,
                            1609
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
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
                          1577,
                          1609
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
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
                        1576,
                        1612
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
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
                      1569,
                      1612
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 53
                      },
                      "start": {
                        "column": 4,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1569,
                    1613
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
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
                1563,
                1615
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 54
                },
                "start": {
                  "column": 73,
                  "line": 52
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1543,
              1615
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 54
              },
              "start": {
                "column": 53,
                "line": 52
              }
            }
          },
          "range": [
            1496,
            1615
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1490,
        1616
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "assignability11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 55
                },
                "start": {
                  "column": 21,
                  "line": 55
                }
              },
              "range": [
                1638,
                1667
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 55
                    },
                    "start": {
                      "column": 26,
                      "line": 55
                    }
                  },
                  "range": [
                    1643,
                    1667
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1659,
                        1667
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1660,
                            1666
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 55
                            },
                            "start": {
                              "column": 43,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 55
                        },
                        "start": {
                          "column": 42,
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
                        1646,
                        1659
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 55
                        },
                        "start": {
                          "column": 29,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1646,
                      1667
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 55
                      },
                      "start": {
                        "column": 29,
                        "line": 55
                      }
                    }
                  }
                },
                "range": [
                  1640,
                  1667
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 55
                  },
                  "start": {
                    "column": 23,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1623,
              1667
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 55
              },
              "start": {
                "column": 6,
                "line": 55
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
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1702,
                        1703
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
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
                      1696,
                      1703
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 56
                      },
                      "start": {
                        "column": 4,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1696,
                    1704
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
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
                1690,
                1706
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 57
                },
                "start": {
                  "column": 73,
                  "line": 55
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1670,
              1706
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 57
              },
              "start": {
                "column": 53,
                "line": 55
              }
            }
          },
          "range": [
            1623,
            1706
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1617,
        1707
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "assignability12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 58
                },
                "start": {
                  "column": 21,
                  "line": 58
                }
              },
              "range": [
                1729,
                1758
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 58
                    },
                    "start": {
                      "column": 26,
                      "line": 58
                    }
                  },
                  "range": [
                    1734,
                    1758
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1750,
                        1758
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1751,
                            1757
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 58
                            },
                            "start": {
                              "column": 43,
                              "line": 58
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 58
                        },
                        "start": {
                          "column": 42,
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
                        1737,
                        1750
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 58
                        },
                        "start": {
                          "column": 29,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1737,
                      1758
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 58
                      },
                      "start": {
                        "column": 29,
                        "line": 58
                      }
                    }
                  }
                },
                "range": [
                  1731,
                  1758
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 58
                  },
                  "start": {
                    "column": 23,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              1714,
              1758
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 58
              },
              "start": {
                "column": 6,
                "line": 58
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1809,
                            1810
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 59
                            },
                            "start": {
                              "column": 26,
                              "line": 59
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
                            1793,
                            1800
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 59
                            },
                            "start": {
                              "column": 10,
                              "line": 59
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
                            1801,
                            1808
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 59
                            },
                            "start": {
                              "column": 18,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1793,
                          1808
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 59
                          },
                          "start": {
                            "column": 10,
                            "line": 59
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1793,
                        1811
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 59
                        },
                        "start": {
                          "column": 10,
                          "line": 59
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      1787,
                      1811
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 59
                      },
                      "start": {
                        "column": 4,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1787,
                    1812
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
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
                1781,
                1814
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 60
                },
                "start": {
                  "column": 73,
                  "line": 58
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1761,
              1814
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 60
              },
              "start": {
                "column": 53,
                "line": 58
              }
            }
          },
          "range": [
            1714,
            1814
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 60
            },
            "start": {
              "column": 6,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1708,
        1815
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "assignability13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 61
                },
                "start": {
                  "column": 21,
                  "line": 61
                }
              },
              "range": [
                1837,
                1866
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 61
                    },
                    "start": {
                      "column": 26,
                      "line": 61
                    }
                  },
                  "range": [
                    1842,
                    1866
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1858,
                        1866
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1859,
                            1865
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 61
                            },
                            "start": {
                              "column": 43,
                              "line": 61
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 61
                        },
                        "start": {
                          "column": 42,
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
                        1845,
                        1858
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 61
                        },
                        "start": {
                          "column": 29,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1845,
                      1866
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 61
                      },
                      "start": {
                        "column": 29,
                        "line": 61
                      }
                    }
                  }
                },
                "range": [
                  1839,
                  1866
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 61
                  },
                  "start": {
                    "column": 23,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1822,
              1866
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 61
              },
              "start": {
                "column": 6,
                "line": 61
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
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1903,
                            1904
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 62
                            },
                            "start": {
                              "column": 12,
                              "line": 62
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            1906,
                            1907
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 62
                            },
                            "start": {
                              "column": 15,
                              "line": 62
                            }
                          }
                        }
                      ],
                      "range": [
                        1902,
                        1908
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
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
                      1895,
                      1908
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 62
                      },
                      "start": {
                        "column": 4,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1895,
                    1909
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                1889,
                1911
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 63
                },
                "start": {
                  "column": 73,
                  "line": 61
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1869,
              1911
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 63
              },
              "start": {
                "column": 53,
                "line": 61
              }
            }
          },
          "range": [
            1822,
            1911
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 63
            },
            "start": {
              "column": 6,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1816,
        1912
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "assignability14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 64
                },
                "start": {
                  "column": 21,
                  "line": 64
                }
              },
              "range": [
                1934,
                1963
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 64
                    },
                    "start": {
                      "column": 26,
                      "line": 64
                    }
                  },
                  "range": [
                    1939,
                    1963
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1955,
                        1963
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1956,
                            1962
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 64
                            },
                            "start": {
                              "column": 43,
                              "line": 64
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 64
                        },
                        "start": {
                          "column": 42,
                          "line": 64
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "range": [
                        1942,
                        1955
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 64
                        },
                        "start": {
                          "column": 29,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1942,
                      1963
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 64
                      },
                      "start": {
                        "column": 29,
                        "line": 64
                      }
                    }
                  }
                },
                "range": [
                  1936,
                  1963
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 64
                  },
                  "start": {
                    "column": 23,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              1919,
              1963
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 64
              },
              "start": {
                "column": 6,
                "line": 64
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
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                2016,
                                2017
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 65
                                },
                                "start": {
                                  "column": 28,
                                  "line": 65
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
                                2000,
                                2007
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 65
                                },
                                "start": {
                                  "column": 12,
                                  "line": 65
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
                                2008,
                                2015
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 65
                                },
                                "start": {
                                  "column": 20,
                                  "line": 65
                                }
                              }
                            },
                            "range": [
                              2000,
                              2015
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 65
                              },
                              "start": {
                                "column": 12,
                                "line": 65
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2000,
                            2018
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 65
                            },
                            "start": {
                              "column": 12,
                              "line": 65
                            }
                          }
                        }
                      ],
                      "range": [
                        1999,
                        2019
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 65
                        },
                        "start": {
                          "column": 11,
                          "line": 65
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      1992,
                      2019
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 65
                      },
                      "start": {
                        "column": 4,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1992,
                    2020
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
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
                1986,
                2022
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 66
                },
                "start": {
                  "column": 73,
                  "line": 64
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              1966,
              2022
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 66
              },
              "start": {
                "column": 53,
                "line": 64
              }
            }
          },
          "range": [
            1919,
            2022
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 66
            },
            "start": {
              "column": 6,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1913,
        2023
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 64
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
            "name": "assignability15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 67
                },
                "start": {
                  "column": 21,
                  "line": 67
                }
              },
              "range": [
                2045,
                2074
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 67
                    },
                    "start": {
                      "column": 26,
                      "line": 67
                    }
                  },
                  "range": [
                    2050,
                    2074
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2066,
                        2074
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2067,
                            2073
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 67
                            },
                            "start": {
                              "column": 43,
                              "line": 67
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 67
                        },
                        "start": {
                          "column": 42,
                          "line": 67
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncIterator",
                      "optional": false,
                      "range": [
                        2053,
                        2066
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 67
                        },
                        "start": {
                          "column": 29,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      2053,
                      2074
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 67
                      },
                      "start": {
                        "column": 29,
                        "line": 67
                      }
                    }
                  }
                },
                "range": [
                  2047,
                  2074
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 67
                  },
                  "start": {
                    "column": 23,
                    "line": 67
                  }
                }
              }
            },
            "range": [
              2030,
              2074
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 67
              },
              "start": {
                "column": 6,
                "line": 67
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
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    2139,
                                    2140
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 68
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 68
                                    }
                                  }
                                },
                                "delegate": false,
                                "range": [
                                  2133,
                                  2140
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 68
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 68
                                  }
                                }
                              },
                              "range": [
                                2133,
                                2141
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 68
                                },
                                "start": {
                                  "column": 34,
                                  "line": 68
                                }
                              }
                            }
                          ],
                          "range": [
                            2131,
                            2143
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 68
                            },
                            "start": {
                              "column": 32,
                              "line": 68
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": [],
                        "range": [
                          2111,
                          2143
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        2110,
                        2146
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 68
                        },
                        "start": {
                          "column": 11,
                          "line": 68
                        }
                      }
                    },
                    "delegate": true,
                    "range": [
                      2103,
                      2146
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 68
                      },
                      "start": {
                        "column": 4,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    2103,
                    2147
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
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
                2097,
                2149
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 69
                },
                "start": {
                  "column": 73,
                  "line": 67
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              2077,
              2149
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 69
              },
              "start": {
                "column": 53,
                "line": 67
              }
            }
          },
          "range": [
            2030,
            2149
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 69
            },
            "start": {
              "column": 6,
              "line": 67
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2024,
        2150
      ],
      "loc": {
        "end": {
          "column": 2,
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
                  2233,
                  2234
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
                2227,
                2234
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
              2227,
              2235
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
          2221,
          2237
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 70,
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
        "name": "explicitReturnType1",
        "optional": false,
        "range": [
          2168,
          2187
        ],
        "loc": {
          "end": {
            "column": 36,
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
            "column": 69,
            "line": 70
          },
          "start": {
            "column": 38,
            "line": 70
          }
        },
        "range": [
          2189,
          2220
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2212,
              2220
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2213,
                  2219
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 70
                  },
                  "start": {
                    "column": 62,
                    "line": 70
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 70
              },
              "start": {
                "column": 61,
                "line": 70
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              2191,
              2212
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 70
              },
              "start": {
                "column": 40,
                "line": 70
              }
            }
          },
          "range": [
            2191,
            2220
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 70
            },
            "start": {
              "column": 40,
              "line": 70
            }
          }
        }
      },
      "range": [
        2151,
        2237
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2336,
                      2337
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 74
                      },
                      "start": {
                        "column": 26,
                        "line": 74
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
                      2320,
                      2327
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 74
                      },
                      "start": {
                        "column": 10,
                        "line": 74
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
                      2328,
                      2335
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 74
                      },
                      "start": {
                        "column": 18,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    2320,
                    2335
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 74
                    },
                    "start": {
                      "column": 10,
                      "line": 74
                    }
                  }
                },
                "optional": false,
                "range": [
                  2320,
                  2338
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 74
                  },
                  "start": {
                    "column": 10,
                    "line": 74
                  }
                }
              },
              "delegate": false,
              "range": [
                2314,
                2338
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              2314,
              2339
            ],
            "loc": {
              "end": {
                "column": 29,
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
          2308,
          2341
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 70,
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
        "name": "explicitReturnType2",
        "optional": false,
        "range": [
          2255,
          2274
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 73
          },
          "start": {
            "column": 17,
            "line": 73
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 73
          },
          "start": {
            "column": 38,
            "line": 73
          }
        },
        "range": [
          2276,
          2307
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2299,
              2307
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2300,
                  2306
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 73
                  },
                  "start": {
                    "column": 62,
                    "line": 73
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 73
              },
              "start": {
                "column": 61,
                "line": 73
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              2278,
              2299
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 73
              },
              "start": {
                "column": 40,
                "line": 73
              }
            }
          },
          "range": [
            2278,
            2307
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 73
            },
            "start": {
              "column": 40,
              "line": 73
            }
          }
        }
      },
      "range": [
        2238,
        2341
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2426,
                      2427
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 77
                      },
                      "start": {
                        "column": 12,
                        "line": 77
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      2429,
                      2430
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 77
                      },
                      "start": {
                        "column": 15,
                        "line": 77
                      }
                    }
                  }
                ],
                "range": [
                  2425,
                  2431
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 77
                  },
                  "start": {
                    "column": 11,
                    "line": 77
                  }
                }
              },
              "delegate": true,
              "range": [
                2418,
                2431
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "range": [
              2418,
              2432
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "range": [
          2412,
          2434
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 70,
            "line": 76
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
          2359,
          2378
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 76
          },
          "start": {
            "column": 17,
            "line": 76
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 76
          },
          "start": {
            "column": 38,
            "line": 76
          }
        },
        "range": [
          2380,
          2411
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2403,
              2411
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2404,
                  2410
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 76
                  },
                  "start": {
                    "column": 62,
                    "line": 76
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 76
              },
              "start": {
                "column": 61,
                "line": 76
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              2382,
              2403
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 76
              },
              "start": {
                "column": 40,
                "line": 76
              }
            }
          },
          "range": [
            2382,
            2411
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 76
            },
            "start": {
              "column": 40,
              "line": 76
            }
          }
        }
      },
      "range": [
        2342,
        2434
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 76
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2535,
                          2536
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 80
                          },
                          "start": {
                            "column": 28,
                            "line": 80
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
                          2519,
                          2526
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 80
                          },
                          "start": {
                            "column": 12,
                            "line": 80
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
                          2527,
                          2534
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 80
                          },
                          "start": {
                            "column": 20,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        2519,
                        2534
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 80
                        },
                        "start": {
                          "column": 12,
                          "line": 80
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2519,
                      2537
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 80
                      },
                      "start": {
                        "column": 12,
                        "line": 80
                      }
                    }
                  }
                ],
                "range": [
                  2518,
                  2538
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 80
                  },
                  "start": {
                    "column": 11,
                    "line": 80
                  }
                }
              },
              "delegate": true,
              "range": [
                2511,
                2538
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            "range": [
              2511,
              2539
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          }
        ],
        "range": [
          2505,
          2541
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 70,
            "line": 79
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
          2452,
          2471
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 79
          },
          "start": {
            "column": 17,
            "line": 79
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 79
          },
          "start": {
            "column": 38,
            "line": 79
          }
        },
        "range": [
          2473,
          2504
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2496,
              2504
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2497,
                  2503
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 79
                  },
                  "start": {
                    "column": 62,
                    "line": 79
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 79
              },
              "start": {
                "column": 61,
                "line": 79
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              2475,
              2496
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 79
              },
              "start": {
                "column": 40,
                "line": 79
              }
            }
          },
          "range": [
            2475,
            2504
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 79
            },
            "start": {
              "column": 40,
              "line": 79
            }
          }
        }
      },
      "range": [
        2435,
        2541
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 79
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
                            "raw": "1",
                            "value": 1,
                            "range": [
                              2654,
                              2655
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 83
                              },
                              "start": {
                                "column": 40,
                                "line": 83
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            2648,
                            2655
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 83
                            },
                            "start": {
                              "column": 34,
                              "line": 83
                            }
                          }
                        },
                        "range": [
                          2648,
                          2656
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 83
                          },
                          "start": {
                            "column": 34,
                            "line": 83
                          }
                        }
                      }
                    ],
                    "range": [
                      2646,
                      2658
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 83
                      },
                      "start": {
                        "column": 32,
                        "line": 83
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "range": [
                    2626,
                    2658
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 83
                    },
                    "start": {
                      "column": 12,
                      "line": 83
                    }
                  }
                },
                "optional": false,
                "range": [
                  2625,
                  2661
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 83
                  },
                  "start": {
                    "column": 11,
                    "line": 83
                  }
                }
              },
              "delegate": true,
              "range": [
                2618,
                2661
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
                }
              }
            },
            "range": [
              2618,
              2662
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          }
        ],
        "range": [
          2612,
          2664
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 70,
            "line": 82
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
          2559,
          2578
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 82
          },
          "start": {
            "column": 17,
            "line": 82
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 82
          },
          "start": {
            "column": 38,
            "line": 82
          }
        },
        "range": [
          2580,
          2611
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2603,
              2611
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2604,
                  2610
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 82
                  },
                  "start": {
                    "column": 62,
                    "line": 82
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 82
              },
              "start": {
                "column": 61,
                "line": 82
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterableIterator",
            "optional": false,
            "range": [
              2582,
              2603
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 82
              },
              "start": {
                "column": 40,
                "line": 82
              }
            }
          },
          "range": [
            2582,
            2611
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 82
            },
            "start": {
              "column": 40,
              "line": 82
            }
          }
        }
      },
      "range": [
        2542,
        2664
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 82
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
                  2739,
                  2740
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 86
                  },
                  "start": {
                    "column": 10,
                    "line": 86
                  }
                }
              },
              "delegate": false,
              "range": [
                2733,
                2740
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "range": [
              2733,
              2741
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "range": [
          2727,
          2743
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 62,
            "line": 85
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
          2682,
          2701
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 85
          },
          "start": {
            "column": 17,
            "line": 85
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 85
          },
          "start": {
            "column": 38,
            "line": 85
          }
        },
        "range": [
          2703,
          2726
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2718,
              2726
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2719,
                  2725
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 85
                  },
                  "start": {
                    "column": 54,
                    "line": 85
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 85
              },
              "start": {
                "column": 53,
                "line": 85
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              2705,
              2718
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 85
              },
              "start": {
                "column": 40,
                "line": 85
              }
            }
          },
          "range": [
            2705,
            2726
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 85
            },
            "start": {
              "column": 40,
              "line": 85
            }
          }
        }
      },
      "range": [
        2665,
        2743
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 85
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
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2834,
                      2835
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 89
                      },
                      "start": {
                        "column": 26,
                        "line": 89
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
                      2818,
                      2825
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 89
                      },
                      "start": {
                        "column": 10,
                        "line": 89
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
                      2826,
                      2833
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 89
                      },
                      "start": {
                        "column": 18,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2818,
                    2833
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 89
                    },
                    "start": {
                      "column": 10,
                      "line": 89
                    }
                  }
                },
                "optional": false,
                "range": [
                  2818,
                  2836
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 89
                  },
                  "start": {
                    "column": 10,
                    "line": 89
                  }
                }
              },
              "delegate": false,
              "range": [
                2812,
                2836
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 89
                }
              }
            },
            "range": [
              2812,
              2837
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "range": [
          2806,
          2839
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 62,
            "line": 88
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
          2761,
          2780
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 88
          },
          "start": {
            "column": 17,
            "line": 88
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 88
          },
          "start": {
            "column": 38,
            "line": 88
          }
        },
        "range": [
          2782,
          2805
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2797,
              2805
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2798,
                  2804
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 88
                  },
                  "start": {
                    "column": 54,
                    "line": 88
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 88
              },
              "start": {
                "column": 53,
                "line": 88
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              2784,
              2797
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 88
              },
              "start": {
                "column": 40,
                "line": 88
              }
            }
          },
          "range": [
            2784,
            2805
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 88
            },
            "start": {
              "column": 40,
              "line": 88
            }
          }
        }
      },
      "range": [
        2744,
        2839
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 88
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2916,
                      2917
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 92
                      },
                      "start": {
                        "column": 12,
                        "line": 92
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      2919,
                      2920
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 92
                      },
                      "start": {
                        "column": 15,
                        "line": 92
                      }
                    }
                  }
                ],
                "range": [
                  2915,
                  2921
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 92
                  },
                  "start": {
                    "column": 11,
                    "line": 92
                  }
                }
              },
              "delegate": true,
              "range": [
                2908,
                2921
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 92
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            "range": [
              2908,
              2922
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          }
        ],
        "range": [
          2902,
          2924
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 62,
            "line": 91
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
          2857,
          2876
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 91
          },
          "start": {
            "column": 17,
            "line": 91
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 91
          },
          "start": {
            "column": 38,
            "line": 91
          }
        },
        "range": [
          2878,
          2901
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2893,
              2901
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2894,
                  2900
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 91
                  },
                  "start": {
                    "column": 54,
                    "line": 91
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 91
              },
              "start": {
                "column": 53,
                "line": 91
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              2880,
              2893
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 91
              },
              "start": {
                "column": 40,
                "line": 91
              }
            }
          },
          "range": [
            2880,
            2901
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 91
            },
            "start": {
              "column": 40,
              "line": 91
            }
          }
        }
      },
      "range": [
        2840,
        2924
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 91
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3017,
                          3018
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 95
                          },
                          "start": {
                            "column": 28,
                            "line": 95
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
                          3001,
                          3008
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 95
                          },
                          "start": {
                            "column": 12,
                            "line": 95
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
                          3009,
                          3016
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 95
                          },
                          "start": {
                            "column": 20,
                            "line": 95
                          }
                        }
                      },
                      "range": [
                        3001,
                        3016
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 95
                        },
                        "start": {
                          "column": 12,
                          "line": 95
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3001,
                      3019
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 95
                      },
                      "start": {
                        "column": 12,
                        "line": 95
                      }
                    }
                  }
                ],
                "range": [
                  3000,
                  3020
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 95
                  },
                  "start": {
                    "column": 11,
                    "line": 95
                  }
                }
              },
              "delegate": true,
              "range": [
                2993,
                3020
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
                }
              }
            },
            "range": [
              2993,
              3021
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          }
        ],
        "range": [
          2987,
          3023
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 62,
            "line": 94
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
          2942,
          2961
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 94
          },
          "start": {
            "column": 17,
            "line": 94
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 94
          },
          "start": {
            "column": 38,
            "line": 94
          }
        },
        "range": [
          2963,
          2986
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2978,
              2986
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  2979,
                  2985
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 94
                  },
                  "start": {
                    "column": 54,
                    "line": 94
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 94
              },
              "start": {
                "column": 53,
                "line": 94
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              2965,
              2978
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 94
              },
              "start": {
                "column": 40,
                "line": 94
              }
            }
          },
          "range": [
            2965,
            2986
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 94
            },
            "start": {
              "column": 40,
              "line": 94
            }
          }
        }
      },
      "range": [
        2925,
        3023
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 94
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
                            "raw": "1",
                            "value": 1,
                            "range": [
                              3129,
                              3130
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 98
                              },
                              "start": {
                                "column": 40,
                                "line": 98
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            3123,
                            3130
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 98
                            },
                            "start": {
                              "column": 34,
                              "line": 98
                            }
                          }
                        },
                        "range": [
                          3123,
                          3131
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 98
                          },
                          "start": {
                            "column": 34,
                            "line": 98
                          }
                        }
                      }
                    ],
                    "range": [
                      3121,
                      3133
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 98
                      },
                      "start": {
                        "column": 32,
                        "line": 98
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "range": [
                    3101,
                    3133
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 98
                    },
                    "start": {
                      "column": 12,
                      "line": 98
                    }
                  }
                },
                "optional": false,
                "range": [
                  3100,
                  3136
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 98
                  },
                  "start": {
                    "column": 11,
                    "line": 98
                  }
                }
              },
              "delegate": true,
              "range": [
                3093,
                3136
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 98
                }
              }
            },
            "range": [
              3093,
              3137
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          }
        ],
        "range": [
          3087,
          3139
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 63,
            "line": 97
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
          3041,
          3061
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 97
          },
          "start": {
            "column": 17,
            "line": 97
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 97
          },
          "start": {
            "column": 39,
            "line": 97
          }
        },
        "range": [
          3063,
          3086
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3078,
              3086
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  3079,
                  3085
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 97
                  },
                  "start": {
                    "column": 55,
                    "line": 97
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 97
              },
              "start": {
                "column": 54,
                "line": 97
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterable",
            "optional": false,
            "range": [
              3065,
              3078
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 97
              },
              "start": {
                "column": 41,
                "line": 97
              }
            }
          },
          "range": [
            3065,
            3086
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 97
            },
            "start": {
              "column": 41,
              "line": 97
            }
          }
        }
      },
      "range": [
        3024,
        3139
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 97
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
                  3215,
                  3216
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 101
                  },
                  "start": {
                    "column": 10,
                    "line": 101
                  }
                }
              },
              "delegate": false,
              "range": [
                3209,
                3216
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 101
                }
              }
            },
            "range": [
              3209,
              3217
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          }
        ],
        "range": [
          3203,
          3219
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 102
          },
          "start": {
            "column": 63,
            "line": 100
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
          3157,
          3177
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 100
          },
          "start": {
            "column": 17,
            "line": 100
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 100
          },
          "start": {
            "column": 39,
            "line": 100
          }
        },
        "range": [
          3179,
          3202
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3194,
              3202
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  3195,
                  3201
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 100
                  },
                  "start": {
                    "column": 55,
                    "line": 100
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 100
              },
              "start": {
                "column": 54,
                "line": 100
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              3181,
              3194
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 100
              },
              "start": {
                "column": 41,
                "line": 100
              }
            }
          },
          "range": [
            3181,
            3202
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 100
            },
            "start": {
              "column": 41,
              "line": 100
            }
          }
        }
      },
      "range": [
        3140,
        3219
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 100
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
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      3311,
                      3312
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 104
                      },
                      "start": {
                        "column": 26,
                        "line": 104
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
                      3295,
                      3302
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 104
                      },
                      "start": {
                        "column": 10,
                        "line": 104
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
                      3303,
                      3310
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 104
                      },
                      "start": {
                        "column": 18,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    3295,
                    3310
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 104
                    },
                    "start": {
                      "column": 10,
                      "line": 104
                    }
                  }
                },
                "optional": false,
                "range": [
                  3295,
                  3313
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 104
                  },
                  "start": {
                    "column": 10,
                    "line": 104
                  }
                }
              },
              "delegate": false,
              "range": [
                3289,
                3313
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "range": [
              3289,
              3314
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          }
        ],
        "range": [
          3283,
          3316
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 63,
            "line": 103
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
          3237,
          3257
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 103
          },
          "start": {
            "column": 17,
            "line": 103
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 103
          },
          "start": {
            "column": 39,
            "line": 103
          }
        },
        "range": [
          3259,
          3282
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3274,
              3282
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  3275,
                  3281
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 103
                  },
                  "start": {
                    "column": 55,
                    "line": 103
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 103
              },
              "start": {
                "column": 54,
                "line": 103
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              3261,
              3274
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 103
              },
              "start": {
                "column": 41,
                "line": 103
              }
            }
          },
          "range": [
            3261,
            3282
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 103
            },
            "start": {
              "column": 41,
              "line": 103
            }
          }
        }
      },
      "range": [
        3220,
        3316
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 103
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      3394,
                      3395
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 107
                      },
                      "start": {
                        "column": 12,
                        "line": 107
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      3397,
                      3398
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 107
                      },
                      "start": {
                        "column": 15,
                        "line": 107
                      }
                    }
                  }
                ],
                "range": [
                  3393,
                  3399
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 107
                  },
                  "start": {
                    "column": 11,
                    "line": 107
                  }
                }
              },
              "delegate": true,
              "range": [
                3386,
                3399
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            "range": [
              3386,
              3400
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          }
        ],
        "range": [
          3380,
          3402
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 108
          },
          "start": {
            "column": 63,
            "line": 106
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType13",
        "optional": false,
        "range": [
          3334,
          3354
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 106
          },
          "start": {
            "column": 17,
            "line": 106
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 106
          },
          "start": {
            "column": 39,
            "line": 106
          }
        },
        "range": [
          3356,
          3379
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3371,
              3379
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  3372,
                  3378
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 106
                  },
                  "start": {
                    "column": 55,
                    "line": 106
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 106
              },
              "start": {
                "column": 54,
                "line": 106
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              3358,
              3371
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 106
              },
              "start": {
                "column": 41,
                "line": 106
              }
            }
          },
          "range": [
            3358,
            3379
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 106
            },
            "start": {
              "column": 41,
              "line": 106
            }
          }
        }
      },
      "range": [
        3317,
        3402
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 106
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3496,
                          3497
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 110
                          },
                          "start": {
                            "column": 28,
                            "line": 110
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
                          3480,
                          3487
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 110
                          },
                          "start": {
                            "column": 12,
                            "line": 110
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
                          3488,
                          3495
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 110
                          },
                          "start": {
                            "column": 20,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        3480,
                        3495
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 110
                        },
                        "start": {
                          "column": 12,
                          "line": 110
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3480,
                      3498
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 110
                      },
                      "start": {
                        "column": 12,
                        "line": 110
                      }
                    }
                  }
                ],
                "range": [
                  3479,
                  3499
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 110
                  },
                  "start": {
                    "column": 11,
                    "line": 110
                  }
                }
              },
              "delegate": true,
              "range": [
                3472,
                3499
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              3472,
              3500
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          }
        ],
        "range": [
          3466,
          3502
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 63,
            "line": 109
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType14",
        "optional": false,
        "range": [
          3420,
          3440
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 109
          },
          "start": {
            "column": 17,
            "line": 109
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 109
          },
          "start": {
            "column": 39,
            "line": 109
          }
        },
        "range": [
          3442,
          3465
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3457,
              3465
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  3458,
                  3464
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 109
                  },
                  "start": {
                    "column": 55,
                    "line": 109
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 109
              },
              "start": {
                "column": 54,
                "line": 109
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              3444,
              3457
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 109
              },
              "start": {
                "column": 41,
                "line": 109
              }
            }
          },
          "range": [
            3444,
            3465
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 109
            },
            "start": {
              "column": 41,
              "line": 109
            }
          }
        }
      },
      "range": [
        3403,
        3502
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 109
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
                            "raw": "1",
                            "value": 1,
                            "range": [
                              3608,
                              3609
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 113
                              },
                              "start": {
                                "column": 40,
                                "line": 113
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            3602,
                            3609
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 113
                            },
                            "start": {
                              "column": 34,
                              "line": 113
                            }
                          }
                        },
                        "range": [
                          3602,
                          3610
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 113
                          },
                          "start": {
                            "column": 34,
                            "line": 113
                          }
                        }
                      }
                    ],
                    "range": [
                      3600,
                      3612
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 113
                      },
                      "start": {
                        "column": 32,
                        "line": 113
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [],
                  "range": [
                    3580,
                    3612
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 113
                    },
                    "start": {
                      "column": 12,
                      "line": 113
                    }
                  }
                },
                "optional": false,
                "range": [
                  3579,
                  3615
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 113
                  },
                  "start": {
                    "column": 11,
                    "line": 113
                  }
                }
              },
              "delegate": true,
              "range": [
                3572,
                3615
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 113
                },
                "start": {
                  "column": 4,
                  "line": 113
                }
              }
            },
            "range": [
              3572,
              3616
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          }
        ],
        "range": [
          3566,
          3618
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 114
          },
          "start": {
            "column": 63,
            "line": 112
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType15",
        "optional": false,
        "range": [
          3520,
          3540
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 112
          },
          "start": {
            "column": 17,
            "line": 112
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 112
          },
          "start": {
            "column": 39,
            "line": 112
          }
        },
        "range": [
          3542,
          3565
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3557,
              3565
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  3558,
                  3564
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 112
                  },
                  "start": {
                    "column": 55,
                    "line": 112
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 112
              },
              "start": {
                "column": 54,
                "line": 112
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              3544,
              3557
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 112
              },
              "start": {
                "column": 41,
                "line": 112
              }
            }
          },
          "range": [
            3544,
            3565
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 112
            },
            "start": {
              "column": 41,
              "line": 112
            }
          }
        }
      },
      "range": [
        3503,
        3618
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 112
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
                  3675,
                  3676
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 116
                  },
                  "start": {
                    "column": 10,
                    "line": 116
                  }
                }
              },
              "delegate": false,
              "range": [
                3669,
                3676
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 116
                },
                "start": {
                  "column": 4,
                  "line": 116
                }
              }
            },
            "range": [
              3669,
              3677
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          }
        ],
        "range": [
          3663,
          3679
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 117
          },
          "start": {
            "column": 44,
            "line": 115
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType16",
        "optional": false,
        "range": [
          3636,
          3656
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 115
          },
          "start": {
            "column": 17,
            "line": 115
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 115
          },
          "start": {
            "column": 39,
            "line": 115
          }
        },
        "range": [
          3658,
          3662
        ],
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            3660,
            3662
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 115
            },
            "start": {
              "column": 41,
              "line": 115
            }
          }
        }
      },
      "range": [
        3619,
        3679
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 115
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
                    3724,
                    3725
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 119
                    },
                    "start": {
                      "column": 10,
                      "line": 119
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      3734,
                      3735
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 119
                      },
                      "start": {
                        "column": 20,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    3728,
                    3735
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 119
                    },
                    "start": {
                      "column": 14,
                      "line": 119
                    }
                  }
                },
                "range": [
                  3724,
                  3735
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 119
                  },
                  "start": {
                    "column": 10,
                    "line": 119
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3718,
              3736
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          }
        ],
        "range": [
          3712,
          3738
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 32,
            "line": 118
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "awaitedType1",
        "optional": false,
        "range": [
          3697,
          3709
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 118
          },
          "start": {
            "column": 17,
            "line": 118
          }
        }
      },
      "params": [],
      "range": [
        3680,
        3738
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 118
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
                    3783,
                    3784
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 122
                    },
                    "start": {
                      "column": 10,
                      "line": 122
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3809,
                          3810
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 122
                          },
                          "start": {
                            "column": 36,
                            "line": 122
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
                          3793,
                          3800
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 122
                          },
                          "start": {
                            "column": 20,
                            "line": 122
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
                          3801,
                          3808
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 122
                          },
                          "start": {
                            "column": 28,
                            "line": 122
                          }
                        }
                      },
                      "range": [
                        3793,
                        3808
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 122
                        },
                        "start": {
                          "column": 20,
                          "line": 122
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3793,
                      3811
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 122
                      },
                      "start": {
                        "column": 20,
                        "line": 122
                      }
                    }
                  },
                  "range": [
                    3787,
                    3811
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 122
                    },
                    "start": {
                      "column": 14,
                      "line": 122
                    }
                  }
                },
                "range": [
                  3783,
                  3811
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 122
                  },
                  "start": {
                    "column": 10,
                    "line": 122
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3777,
              3812
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 122
              }
            }
          }
        ],
        "range": [
          3771,
          3814
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 123
          },
          "start": {
            "column": 32,
            "line": 121
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "awaitedType2",
        "optional": false,
        "range": [
          3756,
          3768
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 121
          },
          "start": {
            "column": 17,
            "line": 121
          }
        }
      },
      "params": [],
      "range": [
        3739,
        3814
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 121
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
                    3917,
                    3918
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 125
                    },
                    "start": {
                      "column": 10,
                      "line": 125
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "argument": null,
                  "delegate": false,
                  "range": [
                    3921,
                    3926
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 125
                    },
                    "start": {
                      "column": 14,
                      "line": 125
                    }
                  }
                },
                "range": [
                  3917,
                  3926
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 125
                  },
                  "start": {
                    "column": 10,
                    "line": 125
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3911,
              3927
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 125
              }
            }
          }
        ],
        "range": [
          3905,
          3988
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 126
          },
          "start": {
            "column": 90,
            "line": 124
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nextType1",
        "optional": false,
        "range": [
          3832,
          3841
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 124
          },
          "start": {
            "column": 17,
            "line": 124
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 89,
            "line": 124
          },
          "start": {
            "column": 28,
            "line": 124
          }
        },
        "range": [
          3843,
          3904
        ],
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "range": [
                  3847,
                  3851
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 124
                  },
                  "start": {
                    "column": 32,
                    "line": 124
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      3855,
                      3859
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 124
                      },
                      "start": {
                        "column": 40,
                        "line": 124
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 124
                      },
                      "start": {
                        "column": 44,
                        "line": 124
                      }
                    },
                    "range": [
                      3859,
                      3896
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [],
                          "range": [
                            3861,
                            3863
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 124
                            },
                            "start": {
                              "column": 46,
                              "line": 124
                            }
                          }
                        },
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3867,
                                    3873
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 124
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 124
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      3887,
                                      3895
                                    ],
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          3888,
                                          3894
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 79,
                                            "line": 124
                                          },
                                          "start": {
                                            "column": 73,
                                            "line": 124
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 80,
                                        "line": 124
                                      },
                                      "start": {
                                        "column": 72,
                                        "line": 124
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "range": [
                                      3876,
                                      3887
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 72,
                                        "line": 124
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 124
                                      }
                                    }
                                  },
                                  "range": [
                                    3876,
                                    3895
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 80,
                                      "line": 124
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 124
                                    }
                                  }
                                }
                              ],
                              "range": [
                                3867,
                                3895
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 124
                                },
                                "start": {
                                  "column": 52,
                                  "line": 124
                                }
                              }
                            }
                          ],
                          "range": [
                            3866,
                            3896
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 124
                            },
                            "start": {
                              "column": 51,
                              "line": 124
                            }
                          }
                        }
                      ],
                      "range": [
                        3861,
                        3896
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 124
                        },
                        "start": {
                          "column": 46,
                          "line": 124
                        }
                      }
                    }
                  },
                  "range": [
                    3852,
                    3896
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 124
                    },
                    "start": {
                      "column": 37,
                      "line": 124
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 124
                  },
                  "start": {
                    "column": 82,
                    "line": 124
                  }
                },
                "range": [
                  3897,
                  3902
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    3899,
                    3902
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 124
                    },
                    "start": {
                      "column": 84,
                      "line": 124
                    }
                  }
                }
              },
              "static": false,
              "range": [
                3847,
                3902
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 124
                },
                "start": {
                  "column": 32,
                  "line": 124
                }
              }
            }
          ],
          "range": [
            3845,
            3904
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 124
            },
            "start": {
              "column": 30,
              "line": 124
            }
          }
        }
      },
      "range": [
        3815,
        3988
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 124
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 127
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
