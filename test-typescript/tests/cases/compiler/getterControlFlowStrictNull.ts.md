__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    524
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          152
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
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
                14,
                150
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "''",
                            "value": "",
                            "range": [
                              88,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 4
                              },
                              "start": {
                                "column": 19,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            81,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        67,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 33,
                          "line": 3
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "range": [
                              46,
                              50
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 3
                              },
                              "start": {
                                "column": 12,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "range": [
                              51,
                              57
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
                          },
                          "range": [
                            46,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          46,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0.5",
                        "value": 0.5,
                        "range": [
                          62,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        46,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      42,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  32,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                },
                "range": [
                  16,
                  31
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        18,
                        24
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 2
                        },
                        "start": {
                          "column": 8,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        27,
                        31
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    18,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              13,
              150
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 3,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
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
        "name": "A",
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
        152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          161,
          329
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                171,
                172
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                172,
                327
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "''",
                            "value": "",
                            "range": [
                              246,
                              248
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 13
                              },
                              "start": {
                                "column": 19,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            239,
                            249
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        225,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 33,
                          "line": 12
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "range": [
                              204,
                              208
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "range": [
                              209,
                              215
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 12
                              },
                              "start": {
                                "column": 17,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            204,
                            215
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          204,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0.5",
                        "value": 0.5,
                        "range": [
                          220,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 12
                          },
                          "start": {
                            "column": 28,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        204,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      200,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  190,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                },
                "range": [
                  174,
                  189
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        176,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        185,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    176,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "range": [
              167,
              327
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 8,
            "line": 10
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
          159,
          160
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        153,
        329
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          338,
          524
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                348,
                349
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
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
                349,
                488
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              408,
                              409
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 22
                              },
                              "start": {
                                "column": 19,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            401,
                            410
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        387,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 33,
                          "line": 21
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "range": [
                              366,
                              370
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 21
                              },
                              "start": {
                                "column": 12,
                                "line": 21
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "range": [
                              371,
                              377
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 21
                              },
                              "start": {
                                "column": 17,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            366,
                            377
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 21
                            },
                            "start": {
                              "column": 12,
                              "line": 21
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          366,
                          379
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0.5",
                        "value": 0.5,
                        "range": [
                          382,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 21
                          },
                          "start": {
                            "column": 28,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        366,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      362,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  352,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 20
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
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "range": [
              344,
              488
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 20
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
              "name": "a",
              "optional": false,
              "range": [
                498,
                499
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                499,
                522
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  515,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 25,
                    "line": 28
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    },
                    "range": [
                      505,
                      513
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        507,
                        513
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 28
                        },
                        "start": {
                          "column": 17,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    500,
                    513
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "range": [
              494,
              522
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
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
            "line": 30
          },
          "start": {
            "column": 8,
            "line": 19
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
          336,
          337
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        330,
        524
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
