__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1311
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          64
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              },
              "range": [
                28,
                36
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  30,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              18,
              37
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                51,
                52
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "optional": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                53,
                61
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  55,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              42,
              62
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        64
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                70,
                73
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    72,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              69,
              73
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
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
                    78,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    81,
                    82
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
                "range": [
                  78,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              76,
              84
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          },
          "range": [
            69,
            84
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        65,
        85
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "x",
            "optional": false,
            "range": [
              86,
              87
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
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
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          "range": [
            86,
            89
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            92,
            93
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        },
        "range": [
          86,
          93
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        86,
        94
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "x",
            "optional": false,
            "range": [
              105,
              106
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
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
              107,
              108
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          "range": [
            105,
            108
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            111,
            112
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        },
        "range": [
          105,
          112
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        105,
        113
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          133,
          689
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
              "name": "a",
              "optional": false,
              "range": [
                148,
                149
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              },
              "range": [
                149,
                157
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  151,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 16,
                    "line": 10
                  }
                }
              }
            },
            "value": null,
            "range": [
              139,
              158
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
              "name": "b",
              "optional": false,
              "range": [
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                176,
                177
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              }
            },
            "range": [
              163,
              178
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "c",
              "optional": false,
              "range": [
                187,
                188
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                188,
                203
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        200,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 12
                        },
                        "start": {
                          "column": 21,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      193,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  191,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 12
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
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "range": [
              183,
              203
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                208,
                219
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                219,
                579
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
                            232,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
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
                            237,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 14
                            },
                            "start": {
                              "column": 13,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          232,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          241,
                          242
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        232,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      232,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                          "type": "ThisExpression",
                          "range": [
                            259,
                            263
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            264,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 15
                            },
                            "start": {
                              "column": 13,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          259,
                          265
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          268,
                          269
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 15
                          },
                          "start": {
                            "column": 17,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        259,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      259,
                      270
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
                            286,
                            290
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            291,
                            292
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 16
                            },
                            "start": {
                              "column": 13,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          286,
                          292
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
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          295,
                          296
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 16
                          },
                          "start": {
                            "column": 17,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        286,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      286,
                      297
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
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "range": [
                            322,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        },
                        "init": {
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
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        346,
                                        350
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 18
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
                                        351,
                                        352
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 18
                                        }
                                      }
                                    },
                                    "range": [
                                      346,
                                      352
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 18
                                      }
                                    }
                                  },
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
                                        "column": 22,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "range": [
                                    346,
                                    356
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  346,
                                  357
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 18
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
                                      "type": "ThisExpression",
                                      "range": [
                                        380,
                                        384
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 19
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
                                        385,
                                        386
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "range": [
                                      380,
                                      386
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      389,
                                      390
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "range": [
                                    380,
                                    390
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  380,
                                  391
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 19
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
                                      "type": "ThisExpression",
                                      "range": [
                                        414,
                                        418
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
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
                                      "name": "c",
                                      "optional": false,
                                      "range": [
                                        419,
                                        420
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 20
                                        }
                                      }
                                    },
                                    "range": [
                                      414,
                                      420
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 20
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      423,
                                      424
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 20
                                      }
                                    }
                                  },
                                  "range": [
                                    414,
                                    424
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  414,
                                  425
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
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
                              332,
                              445
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 21
                              },
                              "start": {
                                "column": 24,
                                "line": 17
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            326,
                            445
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 21
                            },
                            "start": {
                              "column": 18,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          322,
                          445
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      316,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
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
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      476,
                                      480
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
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
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      481,
                                      482
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    476,
                                    482
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 23
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    485,
                                    486
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
                                "range": [
                                  476,
                                  486
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                476,
                                487
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 23
                                },
                                "start": {
                                  "column": 12,
                                  "line": 23
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
                                    "type": "ThisExpression",
                                    "range": [
                                      507,
                                      511
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 24
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
                                      512,
                                      513
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "range": [
                                    507,
                                    513
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 24
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    516,
                                    517
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 24
                                    }
                                  }
                                },
                                "range": [
                                  507,
                                  517
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 24
                                  }
                                }
                              },
                              "range": [
                                507,
                                518
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 24
                                },
                                "start": {
                                  "column": 12,
                                  "line": 24
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
                                    "type": "ThisExpression",
                                    "range": [
                                      538,
                                      542
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "range": [
                                      543,
                                      544
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    538,
                                    544
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 25
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    547,
                                    548
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 25
                                    }
                                  }
                                },
                                "range": [
                                  538,
                                  548
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                538,
                                549
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 25
                                },
                                "start": {
                                  "column": 12,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "range": [
                            462,
                            569
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 26
                            },
                            "start": {
                              "column": 15,
                              "line": 22
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          456,
                          569
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 26
                          },
                          "start": {
                            "column": 9,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        455,
                        572
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      455,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  222,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 18,
                    "line": 13
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
                  "line": 27
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "range": [
              208,
              579
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 13
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
              "name": "foo",
              "optional": false,
              "range": [
                584,
                587
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
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
                587,
                687
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
                            600,
                            604
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 29
                            },
                            "start": {
                              "column": 8,
                              "line": 29
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
                            605,
                            606
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 29
                            },
                            "start": {
                              "column": 13,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          600,
                          606
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          609,
                          610
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        600,
                        610
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      600,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                          "type": "ThisExpression",
                          "range": [
                            630,
                            634
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 30
                            },
                            "start": {
                              "column": 8,
                              "line": 30
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
                            635,
                            636
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 30
                            },
                            "start": {
                              "column": 13,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          630,
                          636
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 30
                          },
                          "start": {
                            "column": 8,
                            "line": 30
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          639,
                          640
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 30
                          },
                          "start": {
                            "column": 17,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        630,
                        640
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      630,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
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
                          "type": "ThisExpression",
                          "range": [
                            660,
                            664
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 31
                            },
                            "start": {
                              "column": 8,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            665,
                            666
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 31
                            },
                            "start": {
                              "column": 13,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          660,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          669,
                          670
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 31
                          },
                          "start": {
                            "column": 17,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        660,
                        670
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      660,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  590,
                  687
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 28
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
                  "line": 32
                },
                "start": {
                  "column": 7,
                  "line": 28
                }
              }
            },
            "range": [
              584,
              687
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 8,
            "line": 9
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
          131,
          132
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        125,
        689
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "o",
            "optional": false,
            "range": [
              695,
              696
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
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
                    709,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    710,
                    725
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            722,
                            723
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 36
                            },
                            "start": {
                              "column": 21,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          715,
                          723
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 36
                          },
                          "start": {
                            "column": 14,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "range": [
                      713,
                      725
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 36
                      },
                      "start": {
                        "column": 12,
                        "line": 36
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
                      "column": 24,
                      "line": 36
                    },
                    "start": {
                      "column": 9,
                      "line": 36
                    }
                  }
                },
                "range": [
                  705,
                  725
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
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
                    735,
                    736
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    736,
                    751
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            748,
                            749
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 37
                            },
                            "start": {
                              "column": 21,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          741,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 37
                          },
                          "start": {
                            "column": 14,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "range": [
                      739,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 37
                      },
                      "start": {
                        "column": 12,
                        "line": 37
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
                      "column": 24,
                      "line": 37
                    },
                    "start": {
                      "column": 9,
                      "line": 37
                    }
                  }
                },
                "range": [
                  731,
                  751
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
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
                    761,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    762,
                    773
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      770,
                      773
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 38
                      },
                      "start": {
                        "column": 17,
                        "line": 38
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        763,
                        768
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 38
                        },
                        "start": {
                          "column": 10,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 38
                    },
                    "start": {
                      "column": 9,
                      "line": 38
                    }
                  }
                },
                "range": [
                  757,
                  773
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              699,
              775
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 39
              },
              "start": {
                "column": 8,
                "line": 35
              }
            }
          },
          "range": [
            695,
            775
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        691,
        776
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "o",
            "optional": false,
            "range": [
              777,
              778
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 40
              },
              "start": {
                "column": 0,
                "line": 40
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
              779,
              780
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 40
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          },
          "range": [
            777,
            780
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            783,
            784
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "range": [
          777,
          784
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        777,
        785
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "o",
            "optional": false,
            "range": [
              796,
              797
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 41
              },
              "start": {
                "column": 0,
                "line": 41
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
              798,
              799
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          },
          "range": [
            796,
            799
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            802,
            803
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        },
        "range": [
          796,
          803
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        796,
        804
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 43
                },
                "start": {
                  "column": 5,
                  "line": 43
                }
              },
              "range": [
                811,
                846
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
                        824,
                        825
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 43
                        },
                        "start": {
                          "column": 18,
                          "line": 43
                        }
                      }
                    },
                    "optional": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 43
                        },
                        "start": {
                          "column": 19,
                          "line": 43
                        }
                      },
                      "range": [
                        825,
                        833
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          827,
                          833
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 43
                          },
                          "start": {
                            "column": 21,
                            "line": 43
                          }
                        }
                      }
                    },
                    "range": [
                      815,
                      834
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 43
                      },
                      "start": {
                        "column": 9,
                        "line": 43
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
                        835,
                        836
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 43
                        },
                        "start": {
                          "column": 29,
                          "line": 43
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
                          "column": 38,
                          "line": 43
                        },
                        "start": {
                          "column": 30,
                          "line": 43
                        }
                      },
                      "range": [
                        836,
                        844
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          838,
                          844
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 43
                          },
                          "start": {
                            "column": 32,
                            "line": 43
                          }
                        }
                      }
                    },
                    "range": [
                      835,
                      844
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 43
                      },
                      "start": {
                        "column": 29,
                        "line": 43
                      }
                    }
                  }
                ],
                "range": [
                  813,
                  846
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 43
                  },
                  "start": {
                    "column": 7,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              810,
              846
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
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
                    851,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 43
                    },
                    "start": {
                      "column": 45,
                      "line": 43
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    854,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 43
                    },
                    "start": {
                      "column": 48,
                      "line": 43
                    }
                  }
                },
                "range": [
                  851,
                  855
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 43
                  },
                  "start": {
                    "column": 45,
                    "line": 43
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
                    857,
                    858
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 43
                    },
                    "start": {
                      "column": 51,
                      "line": 43
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    860,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 43
                    },
                    "start": {
                      "column": 54,
                      "line": 43
                    }
                  }
                },
                "range": [
                  857,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 43
                  },
                  "start": {
                    "column": 51,
                    "line": 43
                  }
                }
              }
            ],
            "range": [
              849,
              863
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 43
              },
              "start": {
                "column": 43,
                "line": 43
              }
            }
          },
          "range": [
            810,
            863
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        806,
        864
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "p",
            "optional": false,
            "range": [
              865,
              866
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 44
              },
              "start": {
                "column": 0,
                "line": 44
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
              867,
              868
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 44
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          },
          "range": [
            865,
            868
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            871,
            872
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        },
        "range": [
          865,
          872
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        865,
        873
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "p",
            "optional": false,
            "range": [
              884,
              885
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 45
              },
              "start": {
                "column": 0,
                "line": 45
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
              886,
              887
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 45
              }
            }
          },
          "range": [
            884,
            887
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            890,
            891
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        },
        "range": [
          884,
          891
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        884,
        892
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 46
                },
                "start": {
                  "column": 5,
                  "line": 46
                }
              },
              "range": [
                898,
                924
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
                        902,
                        903
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 46
                        },
                        "start": {
                          "column": 9,
                          "line": 46
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
                          "column": 18,
                          "line": 46
                        },
                        "start": {
                          "column": 10,
                          "line": 46
                        }
                      },
                      "range": [
                        903,
                        911
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          905,
                          911
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
                          }
                        }
                      }
                    },
                    "range": [
                      902,
                      912
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 46
                      },
                      "start": {
                        "column": 9,
                        "line": 46
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
                        913,
                        914
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 46
                        },
                        "start": {
                          "column": 20,
                          "line": 46
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
                          "column": 29,
                          "line": 46
                        },
                        "start": {
                          "column": 21,
                          "line": 46
                        }
                      },
                      "range": [
                        914,
                        922
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          916,
                          922
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 46
                          },
                          "start": {
                            "column": 23,
                            "line": 46
                          }
                        }
                      }
                    },
                    "range": [
                      913,
                      922
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 46
                      },
                      "start": {
                        "column": 20,
                        "line": 46
                      }
                    }
                  }
                ],
                "range": [
                  900,
                  924
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 46
                  },
                  "start": {
                    "column": 7,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              897,
              924
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "range": [
              927,
              928
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 46
              },
              "start": {
                "column": 34,
                "line": 46
              }
            }
          },
          "range": [
            897,
            928
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        893,
        929
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "q",
            "optional": false,
            "range": [
              930,
              931
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 47
              },
              "start": {
                "column": 0,
                "line": 47
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
              932,
              933
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          },
          "range": [
            930,
            933
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            936,
            937
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        },
        "range": [
          930,
          937
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        930,
        938
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "q",
            "optional": false,
            "range": [
              939,
              940
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 48
              },
              "start": {
                "column": 0,
                "line": 48
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
              941,
              942
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 48
              },
              "start": {
                "column": 2,
                "line": 48
              }
            }
          },
          "range": [
            939,
            942
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            945,
            946
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        },
        "range": [
          939,
          946
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        939,
        947
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          956,
          971
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                962,
                963
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              962,
              963
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                965,
                966
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 51
                },
                "start": {
                  "column": 7,
                  "line": 51
                }
              }
            },
            "range": [
              965,
              966
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 51
              },
              "start": {
                "column": 7,
                "line": 51
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                968,
                969
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 51
                },
                "start": {
                  "column": 10,
                  "line": 51
                }
              }
            },
            "range": [
              968,
              969
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 51
              },
              "start": {
                "column": 10,
                "line": 51
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 7,
            "line": 50
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          954,
          955
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
          }
        }
      },
      "range": [
        949,
        971
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
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
            "name": "E",
            "optional": false,
            "range": [
              972,
              973
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 53
              },
              "start": {
                "column": 0,
                "line": 53
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              974,
              975
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 53
              },
              "start": {
                "column": 2,
                "line": 53
              }
            }
          },
          "range": [
            972,
            975
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            978,
            979
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        },
        "range": [
          972,
          979
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        972,
        980
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1010,
              1029
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      1023,
                      1024
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 56
                      },
                      "start": {
                        "column": 17,
                        "line": 56
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1027,
                      1028
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 56
                      },
                      "start": {
                        "column": 21,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1023,
                    1028
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 56
                    },
                    "start": {
                      "column": 17,
                      "line": 56
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                1017,
                1029
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 56
                },
                "start": {
                  "column": 11,
                  "line": 56
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 23,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1034,
              1051
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      1045,
                      1046
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 57
                      },
                      "start": {
                        "column": 15,
                        "line": 57
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1049,
                      1050
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 57
                      },
                      "start": {
                        "column": 19,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1045,
                    1050
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 57
                    },
                    "start": {
                      "column": 15,
                      "line": 57
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1041,
                1051
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 57
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 21,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1056,
              1073
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
                    "name": "c",
                    "optional": false,
                    "range": [
                      1067,
                      1068
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 58
                      },
                      "start": {
                        "column": 15,
                        "line": 58
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1071,
                      1072
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 58
                      },
                      "start": {
                        "column": 19,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1067,
                    1072
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 58
                    },
                    "start": {
                      "column": 15,
                      "line": 58
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1063,
                1073
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 58
                },
                "start": {
                  "column": 11,
                  "line": 58
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 21,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          1004,
          1075
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 12,
            "line": 55
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1002,
          1003
        ],
        "decorators": [],
        "name": "N",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 55
          },
          "start": {
            "column": 10,
            "line": 55
          }
        }
      },
      "kind": "namespace",
      "range": [
        992,
        1075
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "N",
            "optional": false,
            "range": [
              1076,
              1077
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 60
              },
              "start": {
                "column": 0,
                "line": 60
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
              1078,
              1079
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 60
              },
              "start": {
                "column": 2,
                "line": 60
              }
            }
          },
          "range": [
            1076,
            1079
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 60
            },
            "start": {
              "column": 0,
              "line": 60
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1082,
            1083
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 60
            },
            "start": {
              "column": 6,
              "line": 60
            }
          }
        },
        "range": [
          1076,
          1083
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        1076,
        1084
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "N",
            "optional": false,
            "range": [
              1095,
              1096
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 61
              },
              "start": {
                "column": 0,
                "line": 61
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
              1097,
              1098
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 61
              },
              "start": {
                "column": 2,
                "line": 61
              }
            }
          },
          "range": [
            1095,
            1098
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 61
            },
            "start": {
              "column": 0,
              "line": 61
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1101,
            1102
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 61
            },
            "start": {
              "column": 6,
              "line": 61
            }
          }
        },
        "range": [
          1095,
          1102
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 61
          }
        }
      },
      "range": [
        1095,
        1103
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "N",
            "optional": false,
            "range": [
              1104,
              1105
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 62
              },
              "start": {
                "column": 0,
                "line": 62
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              1106,
              1107
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 62
              },
              "start": {
                "column": 2,
                "line": 62
              }
            }
          },
          "range": [
            1104,
            1107
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 62
            },
            "start": {
              "column": 0,
              "line": 62
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1110,
            1111
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 62
            },
            "start": {
              "column": 6,
              "line": 62
            }
          }
        },
        "range": [
          1104,
          1111
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 62
          },
          "start": {
            "column": 0,
            "line": 62
          }
        }
      },
      "range": [
        1104,
        1112
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 64
                },
                "start": {
                  "column": 6,
                  "line": 64
                }
              },
              "range": [
                1120,
                1154
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 64
                            },
                            "start": {
                              "column": 21,
                              "line": 64
                            }
                          },
                          "range": [
                            1135,
                            1143
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1137,
                              1143
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
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
                          1134,
                          1143
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 64
                          },
                          "start": {
                            "column": 20,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 64
                        },
                        "start": {
                          "column": 30,
                          "line": 64
                        }
                      },
                      "range": [
                        1144,
                        1152
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1146,
                          1152
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 64
                          },
                          "start": {
                            "column": 32,
                            "line": 64
                          }
                        }
                      }
                    },
                    "range": [
                      1124,
                      1152
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 64
                      },
                      "start": {
                        "column": 10,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  1122,
                  1154
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              1118,
              1154
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          "init": null,
          "range": [
            1118,
            1154
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 64
            },
            "start": {
              "column": 4,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1114,
        1155
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 64
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
            "name": "s",
            "optional": false,
            "range": [
              1160,
              1161
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "range": [
                1164,
                1166
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 65
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                1167,
                1172
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 65
                },
                "start": {
                  "column": 11,
                  "line": 65
                }
              }
            },
            "range": [
              1164,
              1173
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 65
              },
              "start": {
                "column": 8,
                "line": 65
              }
            }
          },
          "range": [
            1160,
            1173
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 65
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1156,
        1174
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
            "name": "xx",
            "optional": false,
            "range": [
              1175,
              1177
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 66
              },
              "start": {
                "column": 0,
                "line": 66
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              1178,
              1183
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 66
              },
              "start": {
                "column": 3,
                "line": 66
              }
            }
          },
          "range": [
            1175,
            1184
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 66
            },
            "start": {
              "column": 0,
              "line": 66
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"abc\"",
          "value": "abc",
          "range": [
            1187,
            1192
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 66
            },
            "start": {
              "column": 12,
              "line": 66
            }
          }
        },
        "range": [
          1175,
          1192
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 66
          },
          "start": {
            "column": 0,
            "line": 66
          }
        }
      },
      "range": [
        1175,
        1193
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 68
                },
                "start": {
                  "column": 6,
                  "line": 68
                }
              },
              "range": [
                1211,
                1266
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 68
                            },
                            "start": {
                              "column": 21,
                              "line": 68
                            }
                          },
                          "range": [
                            1226,
                            1234
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1228,
                              1234
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 68
                              },
                              "start": {
                                "column": 23,
                                "line": 68
                              }
                            }
                          }
                        },
                        "range": [
                          1225,
                          1234
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 68
                          },
                          "start": {
                            "column": 20,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 68
                        },
                        "start": {
                          "column": 30,
                          "line": 68
                        }
                      },
                      "range": [
                        1235,
                        1243
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1237,
                          1243
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 68
                          },
                          "start": {
                            "column": 32,
                            "line": 68
                          }
                        }
                      }
                    },
                    "range": [
                      1215,
                      1244
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 68
                      },
                      "start": {
                        "column": 10,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 68
                            },
                            "start": {
                              "column": 42,
                              "line": 68
                            }
                          },
                          "range": [
                            1247,
                            1255
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1249,
                              1255
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 68
                              },
                              "start": {
                                "column": 44,
                                "line": 68
                              }
                            }
                          }
                        },
                        "range": [
                          1246,
                          1255
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 68
                          },
                          "start": {
                            "column": 41,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 68
                        },
                        "start": {
                          "column": 51,
                          "line": 68
                        }
                      },
                      "range": [
                        1256,
                        1264
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1258,
                          1264
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 68
                          },
                          "start": {
                            "column": 53,
                            "line": 68
                          }
                        }
                      }
                    },
                    "range": [
                      1245,
                      1264
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 68
                      },
                      "start": {
                        "column": 40,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1213,
                  1266
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                }
              }
            },
            "range": [
              1209,
              1266
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          "init": null,
          "range": [
            1209,
            1266
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 68
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1205,
        1267
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "yy",
            "optional": false,
            "range": [
              1268,
              1270
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 69
              },
              "start": {
                "column": 0,
                "line": 69
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              1271,
              1272
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 69
              },
              "start": {
                "column": 3,
                "line": 69
              }
            }
          },
          "range": [
            1268,
            1273
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"abc\"",
          "value": "abc",
          "range": [
            1276,
            1281
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 69
            },
            "start": {
              "column": 8,
              "line": 69
            }
          }
        },
        "range": [
          1268,
          1281
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1268,
        1282
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
            "name": "yy",
            "optional": false,
            "range": [
              1293,
              1295
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 70
              },
              "start": {
                "column": 0,
                "line": 70
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              1296,
              1301
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 70
              },
              "start": {
                "column": 3,
                "line": 70
              }
            }
          },
          "range": [
            1293,
            1302
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 70
            },
            "start": {
              "column": 0,
              "line": 70
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"abc\"",
          "value": "abc",
          "range": [
            1305,
            1310
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 70
            },
            "start": {
              "column": 12,
              "line": 70
            }
          }
        },
        "range": [
          1293,
          1310
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 70
          },
          "start": {
            "column": 0,
            "line": 70
          }
        }
      },
      "range": [
        1293,
        1311
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 18,
      "line": 70
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
