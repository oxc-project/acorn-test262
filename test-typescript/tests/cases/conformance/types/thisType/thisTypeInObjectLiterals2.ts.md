__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    107,
    4616
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
            "name": "obj1",
            "optional": false,
            "range": [
              111,
              115
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                    124,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
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
                  "raw": "1",
                  "value": 1,
                  "range": [
                    127,
                    128
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
                  124,
                  128
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
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    134,
                    135
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
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    135,
                    168
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              155,
                              159
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
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              160,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 7
                              },
                              "start": {
                                "column": 20,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            155,
                            161
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          148,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      138,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
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
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "range": [
                  134,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 6
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
                    174,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    177,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                },
                "range": [
                  174,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
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
                    190,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "range": [
                          203,
                          204
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
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          204,
                          240
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      221,
                                      225
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
                                    "name": "g",
                                    "optional": false,
                                    "range": [
                                      226,
                                      227
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    221,
                                    227
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
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
                                  221,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                221,
                                230
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
                            }
                          ],
                          "range": [
                            207,
                            240
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 11
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
                            "line": 13
                          },
                          "start": {
                            "column": 9,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        203,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    193,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                },
                "range": [
                  190,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "range": [
                    256,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
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
                    257,
                    290
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              277,
                              281
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
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              282,
                              283
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 16
                              },
                              "start": {
                                "column": 20,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            277,
                            283
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          270,
                          284
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      260,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 15
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
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "range": [
                  252,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "range": [
                    300,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
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
                    301,
                    334
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              321,
                              325
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              326,
                              327
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 19
                              },
                              "start": {
                                "column": 20,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            321,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 19
                            },
                            "start": {
                              "column": 15,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          314,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
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
                      304,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 18
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
                      "line": 20
                    },
                    "start": {
                      "column": 9,
                      "line": 18
                    }
                  }
                },
                "range": [
                  296,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "range": [
                    344,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
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
                    345,
                    384
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
                                363,
                                367
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 22
                                },
                                "start": {
                                  "column": 8,
                                  "line": 22
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
                                368,
                                369
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 22
                                },
                                "start": {
                                  "column": 13,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              363,
                              369
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 22
                              },
                              "start": {
                                "column": 8,
                                "line": 22
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              372,
                              377
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 22
                              },
                              "start": {
                                "column": 17,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            363,
                            377
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 22
                            },
                            "start": {
                              "column": 8,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          363,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "range": [
                      353,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 23
                      },
                      "start": {
                        "column": 17,
                        "line": 21
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
                        346,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 21
                        },
                        "start": {
                          "column": 10,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 21
                    }
                  }
                },
                "range": [
                  340,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              118,
              386
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          "range": [
            111,
            386
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        107,
        387
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "range": [
          489,
          494
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                503,
                504
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
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
                  "column": 13,
                  "line": 30
                },
                "start": {
                  "column": 5,
                  "line": 30
                }
              },
              "range": [
                504,
                512
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  506,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 30
                  },
                  "start": {
                    "column": 7,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              503,
              513
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                518,
                519
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
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
                  "column": 13,
                  "line": 31
                },
                "start": {
                  "column": 5,
                  "line": 31
                }
              },
              "range": [
                519,
                527
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  521,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 31
                  },
                  "start": {
                    "column": 7,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              518,
              528
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                533,
                534
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 6,
                  "line": 32
                }
              },
              "range": [
                535,
                543
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  537,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              533,
              544
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "moveBy",
              "optional": false,
              "range": [
                549,
                555
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 33
                    },
                    "start": {
                      "column": 13,
                      "line": 33
                    }
                  },
                  "range": [
                    558,
                    566
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      560,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 33
                      },
                      "start": {
                        "column": 15,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  556,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 33
                  },
                  "start": {
                    "column": 11,
                    "line": 33
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dy",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 33
                    },
                    "start": {
                      "column": 25,
                      "line": 33
                    }
                  },
                  "range": [
                    570,
                    578
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      572,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 33
                      },
                      "start": {
                        "column": 27,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  568,
                  578
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 33
                  },
                  "start": {
                    "column": 23,
                    "line": 33
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dz",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 33
                    },
                    "start": {
                      "column": 38,
                      "line": 33
                    }
                  },
                  "range": [
                    583,
                    591
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      585,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 33
                      },
                      "start": {
                        "column": 40,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  580,
                  591
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 33
                  },
                  "start": {
                    "column": 35,
                    "line": 33
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 33
                },
                "start": {
                  "column": 47,
                  "line": 33
                }
              },
              "range": [
                592,
                598
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  594,
                  598
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 33
                  },
                  "start": {
                    "column": 49,
                    "line": 33
                  }
                }
              }
            },
            "static": false,
            "range": [
              549,
              599
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          497,
          601
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 13,
            "line": 29
          }
        }
      },
      "range": [
        484,
        601
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 36
                },
                "start": {
                  "column": 6,
                  "line": 36
                }
              },
              "range": [
                609,
                616
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "range": [
                    611,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "range": [
                  611,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              607,
              616
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    625,
                    626
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 37
                    },
                    "start": {
                      "column": 4,
                      "line": 37
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    628,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 37
                    },
                    "start": {
                      "column": 7,
                      "line": 37
                    }
                  }
                },
                "range": [
                  625,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 9,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    636,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    639,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 38
                    },
                    "start": {
                      "column": 7,
                      "line": 38
                    }
                  }
                },
                "range": [
                  636,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "range": [
                    647,
                    653
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    653,
                    781
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                676,
                                680
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 40
                                },
                                "start": {
                                  "column": 8,
                                  "line": 40
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                681,
                                682
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 40
                                },
                                "start": {
                                  "column": 13,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              676,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 40
                              },
                              "start": {
                                "column": 8,
                                "line": 40
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "range": [
                              686,
                              688
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 40
                              },
                              "start": {
                                "column": 18,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            676,
                            688
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 40
                            },
                            "start": {
                              "column": 8,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          676,
                          689
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 40
                          },
                          "start": {
                            "column": 8,
                            "line": 40
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                698,
                                702
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 41
                                },
                                "start": {
                                  "column": 8,
                                  "line": 41
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                703,
                                704
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 41
                                },
                                "start": {
                                  "column": 13,
                                  "line": 41
                                }
                              }
                            },
                            "range": [
                              698,
                              704
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 41
                              },
                              "start": {
                                "column": 8,
                                "line": 41
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "range": [
                              708,
                              710
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 41
                              },
                              "start": {
                                "column": 18,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            698,
                            710
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 41
                            },
                            "start": {
                              "column": 8,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          698,
                          711
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      752,
                                      756
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      757,
                                      758
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "range": [
                                    752,
                                    758
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 43
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "range": [
                                    762,
                                    764
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 43
                                    }
                                  }
                                },
                                "range": [
                                  752,
                                  764
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 43
                                  }
                                }
                              },
                              "range": [
                                752,
                                765
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 43
                                },
                                "start": {
                                  "column": 12,
                                  "line": 43
                                }
                              }
                            }
                          ],
                          "range": [
                            738,
                            775
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 44
                            },
                            "start": {
                              "column": 26,
                              "line": 42
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                724,
                                728
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 42
                                },
                                "start": {
                                  "column": 12,
                                  "line": 42
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                729,
                                730
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 42
                                },
                                "start": {
                                  "column": 17,
                                  "line": 42
                                }
                              }
                            },
                            "range": [
                              724,
                              730
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 42
                              },
                              "start": {
                                "column": 12,
                                "line": 42
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "range": [
                              734,
                              736
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 42
                              },
                              "start": {
                                "column": 22,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            724,
                            736
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 42
                            },
                            "start": {
                              "column": 12,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          720,
                          775
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 44
                          },
                          "start": {
                            "column": 8,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "range": [
                      666,
                      781
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 45
                      },
                      "start": {
                        "column": 23,
                        "line": 39
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
                      "name": "dx",
                      "optional": false,
                      "range": [
                        654,
                        656
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 39
                        },
                        "start": {
                          "column": 11,
                          "line": 39
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "range": [
                        658,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "range": [
                        662,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 39
                        },
                        "start": {
                          "column": 19,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 45
                    },
                    "start": {
                      "column": 10,
                      "line": 39
                    }
                  }
                },
                "range": [
                  647,
                  781
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              }
            ],
            "range": [
              619,
              783
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 46
              },
              "start": {
                "column": 16,
                "line": 36
              }
            }
          },
          "range": [
            607,
            783
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        603,
        784
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 48
                },
                "start": {
                  "column": 6,
                  "line": 48
                }
              },
              "range": [
                792,
                806
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "range": [
                        794,
                        799
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      794,
                      799
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      802,
                      806
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 48
                      },
                      "start": {
                        "column": 16,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  794,
                  806
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              790,
              806
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    815,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    818,
                    820
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 49
                    },
                    "start": {
                      "column": 7,
                      "line": 49
                    }
                  }
                },
                "range": [
                  815,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    826,
                    827
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 50
                    },
                    "start": {
                      "column": 4,
                      "line": 50
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    829,
                    831
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 50
                    },
                    "start": {
                      "column": 7,
                      "line": 50
                    }
                  }
                },
                "range": [
                  826,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "range": [
                    837,
                    843
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 51
                    },
                    "start": {
                      "column": 4,
                      "line": 51
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    843,
                    971
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                866,
                                870
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 52
                                },
                                "start": {
                                  "column": 8,
                                  "line": 52
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                871,
                                872
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 52
                                },
                                "start": {
                                  "column": 13,
                                  "line": 52
                                }
                              }
                            },
                            "range": [
                              866,
                              872
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 52
                              },
                              "start": {
                                "column": 8,
                                "line": 52
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "range": [
                              876,
                              878
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 52
                              },
                              "start": {
                                "column": 18,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            866,
                            878
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 52
                            },
                            "start": {
                              "column": 8,
                              "line": 52
                            }
                          }
                        },
                        "range": [
                          866,
                          879
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 52
                          },
                          "start": {
                            "column": 8,
                            "line": 52
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                888,
                                892
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 53
                                },
                                "start": {
                                  "column": 8,
                                  "line": 53
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                893,
                                894
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 53
                                },
                                "start": {
                                  "column": 13,
                                  "line": 53
                                }
                              }
                            },
                            "range": [
                              888,
                              894
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 53
                              },
                              "start": {
                                "column": 8,
                                "line": 53
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "range": [
                              898,
                              900
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 53
                              },
                              "start": {
                                "column": 18,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            888,
                            900
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 53
                            },
                            "start": {
                              "column": 8,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          888,
                          901
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 53
                          },
                          "start": {
                            "column": 8,
                            "line": 53
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      942,
                                      946
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      947,
                                      948
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "range": [
                                    942,
                                    948
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 55
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "range": [
                                    952,
                                    954
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 55
                                    }
                                  }
                                },
                                "range": [
                                  942,
                                  954
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 55
                                  }
                                }
                              },
                              "range": [
                                942,
                                955
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 55
                                },
                                "start": {
                                  "column": 12,
                                  "line": 55
                                }
                              }
                            }
                          ],
                          "range": [
                            928,
                            965
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 56
                            },
                            "start": {
                              "column": 26,
                              "line": 54
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                914,
                                918
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 54
                                },
                                "start": {
                                  "column": 12,
                                  "line": 54
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                919,
                                920
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 54
                                },
                                "start": {
                                  "column": 17,
                                  "line": 54
                                }
                              }
                            },
                            "range": [
                              914,
                              920
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 54
                              },
                              "start": {
                                "column": 12,
                                "line": 54
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "range": [
                              924,
                              926
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 54
                              },
                              "start": {
                                "column": 22,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            914,
                            926
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 54
                            },
                            "start": {
                              "column": 12,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          910,
                          965
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 56
                          },
                          "start": {
                            "column": 8,
                            "line": 54
                          }
                        }
                      }
                    ],
                    "range": [
                      856,
                      971
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 57
                      },
                      "start": {
                        "column": 23,
                        "line": 51
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
                      "name": "dx",
                      "optional": false,
                      "range": [
                        844,
                        846
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 51
                        },
                        "start": {
                          "column": 11,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "range": [
                        848,
                        850
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 51
                        },
                        "start": {
                          "column": 15,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "range": [
                        852,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 51
                        },
                        "start": {
                          "column": 19,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 57
                    },
                    "start": {
                      "column": 10,
                      "line": 51
                    }
                  }
                },
                "range": [
                  837,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              }
            ],
            "range": [
              809,
              973
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 58
              },
              "start": {
                "column": 23,
                "line": 48
              }
            }
          },
          "range": [
            790,
            973
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 58
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        786,
        974
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 60
                },
                "start": {
                  "column": 6,
                  "line": 60
                }
              },
              "range": [
                982,
                1001
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "range": [
                        984,
                        989
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 60
                        },
                        "start": {
                          "column": 8,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      984,
                      989
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      992,
                      1001
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 60
                      },
                      "start": {
                        "column": 16,
                        "line": 60
                      }
                    }
                  }
                ],
                "range": [
                  984,
                  1001
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              980,
              1001
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1010,
                    1011
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 61
                    },
                    "start": {
                      "column": 4,
                      "line": 61
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    1013,
                    1015
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 61
                    },
                    "start": {
                      "column": 7,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1010,
                  1015
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1021,
                    1022
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 62
                    },
                    "start": {
                      "column": 4,
                      "line": 62
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    1024,
                    1026
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 62
                    },
                    "start": {
                      "column": 7,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1021,
                  1026
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "range": [
                    1032,
                    1038
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 63
                    },
                    "start": {
                      "column": 4,
                      "line": 63
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1038,
                    1166
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1061,
                                1065
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 64
                                },
                                "start": {
                                  "column": 8,
                                  "line": 64
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1066,
                                1067
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 64
                                },
                                "start": {
                                  "column": 13,
                                  "line": 64
                                }
                              }
                            },
                            "range": [
                              1061,
                              1067
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 64
                              },
                              "start": {
                                "column": 8,
                                "line": 64
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "range": [
                              1071,
                              1073
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 64
                              },
                              "start": {
                                "column": 18,
                                "line": 64
                              }
                            }
                          },
                          "range": [
                            1061,
                            1073
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 64
                            },
                            "start": {
                              "column": 8,
                              "line": 64
                            }
                          }
                        },
                        "range": [
                          1061,
                          1074
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 64
                          },
                          "start": {
                            "column": 8,
                            "line": 64
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1083,
                                1087
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                1088,
                                1089
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 65
                                },
                                "start": {
                                  "column": 13,
                                  "line": 65
                                }
                              }
                            },
                            "range": [
                              1083,
                              1089
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 65
                              },
                              "start": {
                                "column": 8,
                                "line": 65
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "range": [
                              1093,
                              1095
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 65
                              },
                              "start": {
                                "column": 18,
                                "line": 65
                              }
                            }
                          },
                          "range": [
                            1083,
                            1095
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 65
                            },
                            "start": {
                              "column": 8,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1083,
                          1096
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 65
                          },
                          "start": {
                            "column": 8,
                            "line": 65
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      1137,
                                      1141
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 67
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      1142,
                                      1143
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 67
                                      }
                                    }
                                  },
                                  "range": [
                                    1137,
                                    1143
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 67
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 67
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "range": [
                                    1147,
                                    1149
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 67
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 67
                                    }
                                  }
                                },
                                "range": [
                                  1137,
                                  1149
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 67
                                  }
                                }
                              },
                              "range": [
                                1137,
                                1150
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 67
                                },
                                "start": {
                                  "column": 12,
                                  "line": 67
                                }
                              }
                            }
                          ],
                          "range": [
                            1123,
                            1160
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 68
                            },
                            "start": {
                              "column": 26,
                              "line": 66
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1109,
                                1113
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 66
                                },
                                "start": {
                                  "column": 12,
                                  "line": 66
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                1114,
                                1115
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 66
                                },
                                "start": {
                                  "column": 17,
                                  "line": 66
                                }
                              }
                            },
                            "range": [
                              1109,
                              1115
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 66
                              },
                              "start": {
                                "column": 12,
                                "line": 66
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "range": [
                              1119,
                              1121
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 66
                              },
                              "start": {
                                "column": 22,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1109,
                            1121
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 66
                            },
                            "start": {
                              "column": 12,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1105,
                          1160
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 68
                          },
                          "start": {
                            "column": 8,
                            "line": 66
                          }
                        }
                      }
                    ],
                    "range": [
                      1051,
                      1166
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 69
                      },
                      "start": {
                        "column": 23,
                        "line": 63
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
                      "name": "dx",
                      "optional": false,
                      "range": [
                        1039,
                        1041
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 63
                        },
                        "start": {
                          "column": 11,
                          "line": 63
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "range": [
                        1043,
                        1045
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 63
                        },
                        "start": {
                          "column": 15,
                          "line": 63
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "range": [
                        1047,
                        1049
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 63
                        },
                        "start": {
                          "column": 19,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 69
                    },
                    "start": {
                      "column": 10,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1032,
                  1166
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              }
            ],
            "range": [
              1004,
              1168
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 70
              },
              "start": {
                "column": 28,
                "line": 60
              }
            }
          },
          "range": [
            980,
            1168
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 70
            },
            "start": {
              "column": 4,
              "line": 60
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        976,
        1169
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "p4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 72
                },
                "start": {
                  "column": 6,
                  "line": 72
                }
              },
              "range": [
                1177,
                1203
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "range": [
                        1179,
                        1184
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 72
                        },
                        "start": {
                          "column": 8,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1179,
                      1184
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      1187,
                      1191
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 72
                      },
                      "start": {
                        "column": 16,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      1194,
                      1203
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 72
                      },
                      "start": {
                        "column": 23,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  1179,
                  1203
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1175,
              1203
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1212,
                    1213
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 73
                    },
                    "start": {
                      "column": 4,
                      "line": 73
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    1215,
                    1217
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 73
                    },
                    "start": {
                      "column": 7,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1212,
                  1217
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1223,
                    1224
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 74
                    },
                    "start": {
                      "column": 4,
                      "line": 74
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    1226,
                    1228
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 74
                    },
                    "start": {
                      "column": 7,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1223,
                  1228
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "range": [
                    1234,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 75
                    },
                    "start": {
                      "column": 4,
                      "line": 75
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1240,
                    1368
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1263,
                                1267
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 76
                                },
                                "start": {
                                  "column": 8,
                                  "line": 76
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1268,
                                1269
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 76
                                },
                                "start": {
                                  "column": 13,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              1263,
                              1269
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 76
                              },
                              "start": {
                                "column": 8,
                                "line": 76
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "range": [
                              1273,
                              1275
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 76
                              },
                              "start": {
                                "column": 18,
                                "line": 76
                              }
                            }
                          },
                          "range": [
                            1263,
                            1275
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 76
                            },
                            "start": {
                              "column": 8,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          1263,
                          1276
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 76
                          },
                          "start": {
                            "column": 8,
                            "line": 76
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1285,
                                1289
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 77
                                },
                                "start": {
                                  "column": 8,
                                  "line": 77
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                1290,
                                1291
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 77
                                },
                                "start": {
                                  "column": 13,
                                  "line": 77
                                }
                              }
                            },
                            "range": [
                              1285,
                              1291
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 77
                              },
                              "start": {
                                "column": 8,
                                "line": 77
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "range": [
                              1295,
                              1297
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 77
                              },
                              "start": {
                                "column": 18,
                                "line": 77
                              }
                            }
                          },
                          "range": [
                            1285,
                            1297
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 77
                            },
                            "start": {
                              "column": 8,
                              "line": 77
                            }
                          }
                        },
                        "range": [
                          1285,
                          1298
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 77
                          },
                          "start": {
                            "column": 8,
                            "line": 77
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      1339,
                                      1343
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 79
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      1344,
                                      1345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 79
                                      }
                                    }
                                  },
                                  "range": [
                                    1339,
                                    1345
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 79
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "range": [
                                    1349,
                                    1351
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 79
                                    }
                                  }
                                },
                                "range": [
                                  1339,
                                  1351
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 79
                                  }
                                }
                              },
                              "range": [
                                1339,
                                1352
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 79
                                },
                                "start": {
                                  "column": 12,
                                  "line": 79
                                }
                              }
                            }
                          ],
                          "range": [
                            1325,
                            1362
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 80
                            },
                            "start": {
                              "column": 26,
                              "line": 78
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1311,
                                1315
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 78
                                },
                                "start": {
                                  "column": 12,
                                  "line": 78
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                1316,
                                1317
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 78
                                },
                                "start": {
                                  "column": 17,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              1311,
                              1317
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 78
                              },
                              "start": {
                                "column": 12,
                                "line": 78
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "range": [
                              1321,
                              1323
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 78
                              },
                              "start": {
                                "column": 22,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            1311,
                            1323
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 78
                            },
                            "start": {
                              "column": 12,
                              "line": 78
                            }
                          }
                        },
                        "range": [
                          1307,
                          1362
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 80
                          },
                          "start": {
                            "column": 8,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "range": [
                      1253,
                      1368
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 81
                      },
                      "start": {
                        "column": 23,
                        "line": 75
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
                      "name": "dx",
                      "optional": false,
                      "range": [
                        1241,
                        1243
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 75
                        },
                        "start": {
                          "column": 11,
                          "line": 75
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "range": [
                        1245,
                        1247
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 75
                        },
                        "start": {
                          "column": 15,
                          "line": 75
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "range": [
                        1249,
                        1251
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 75
                        },
                        "start": {
                          "column": 19,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 81
                    },
                    "start": {
                      "column": 10,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1234,
                  1368
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              }
            ],
            "range": [
              1206,
              1370
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 82
              },
              "start": {
                "column": 35,
                "line": 72
              }
            }
          },
          "range": [
            1175,
            1370
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 82
            },
            "start": {
              "column": 4,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1171,
        1371
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          1390,
          1392
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 84
          },
          "start": {
            "column": 17,
            "line": 84
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 84
              },
              "start": {
                "column": 21,
                "line": 84
              }
            },
            "range": [
              1394,
              1401
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  1396,
                  1401
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 84
                  },
                  "start": {
                    "column": 23,
                    "line": 84
                  }
                }
              },
              "range": [
                1396,
                1401
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 84
                },
                "start": {
                  "column": 23,
                  "line": 84
                }
              }
            }
          },
          "range": [
            1393,
            1401
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 84
            },
            "start": {
              "column": 20,
              "line": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 84
          },
          "start": {
            "column": 29,
            "line": 84
          }
        },
        "range": [
          1402,
          1408
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1404,
            1408
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 84
            },
            "start": {
              "column": 31,
              "line": 84
            }
          }
        }
      },
      "range": [
        1373,
        1409
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1420,
                    1421
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 87
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    1423,
                    1425
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 87
                    },
                    "start": {
                      "column": 7,
                      "line": 87
                    }
                  }
                },
                "range": [
                  1420,
                  1425
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 87
                  },
                  "start": {
                    "column": 4,
                    "line": 87
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1431,
                    1432
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 88
                    },
                    "start": {
                      "column": 4,
                      "line": 88
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    1434,
                    1436
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 88
                    },
                    "start": {
                      "column": 7,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1431,
                  1436
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 88
                  },
                  "start": {
                    "column": 4,
                    "line": 88
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "range": [
                    1442,
                    1448
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 89
                    },
                    "start": {
                      "column": 4,
                      "line": 89
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1448,
                    1576
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1471,
                                1475
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 90
                                },
                                "start": {
                                  "column": 8,
                                  "line": 90
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1476,
                                1477
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 90
                                },
                                "start": {
                                  "column": 13,
                                  "line": 90
                                }
                              }
                            },
                            "range": [
                              1471,
                              1477
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 90
                              },
                              "start": {
                                "column": 8,
                                "line": 90
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "range": [
                              1481,
                              1483
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 90
                              },
                              "start": {
                                "column": 18,
                                "line": 90
                              }
                            }
                          },
                          "range": [
                            1471,
                            1483
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 90
                            },
                            "start": {
                              "column": 8,
                              "line": 90
                            }
                          }
                        },
                        "range": [
                          1471,
                          1484
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 90
                          },
                          "start": {
                            "column": 8,
                            "line": 90
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1493,
                                1497
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 91
                                },
                                "start": {
                                  "column": 8,
                                  "line": 91
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                1498,
                                1499
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 91
                                },
                                "start": {
                                  "column": 13,
                                  "line": 91
                                }
                              }
                            },
                            "range": [
                              1493,
                              1499
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 91
                              },
                              "start": {
                                "column": 8,
                                "line": 91
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "range": [
                              1503,
                              1505
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 91
                              },
                              "start": {
                                "column": 18,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            1493,
                            1505
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 91
                            },
                            "start": {
                              "column": 8,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          1493,
                          1506
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 91
                          },
                          "start": {
                            "column": 8,
                            "line": 91
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      1547,
                                      1551
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 93
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 93
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      1552,
                                      1553
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 93
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 93
                                      }
                                    }
                                  },
                                  "range": [
                                    1547,
                                    1553
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 93
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 93
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "range": [
                                    1557,
                                    1559
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 93
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 93
                                    }
                                  }
                                },
                                "range": [
                                  1547,
                                  1559
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 93
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 93
                                  }
                                }
                              },
                              "range": [
                                1547,
                                1560
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 93
                                },
                                "start": {
                                  "column": 12,
                                  "line": 93
                                }
                              }
                            }
                          ],
                          "range": [
                            1533,
                            1570
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 94
                            },
                            "start": {
                              "column": 26,
                              "line": 92
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1519,
                                1523
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 92
                                },
                                "start": {
                                  "column": 12,
                                  "line": 92
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                1524,
                                1525
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 92
                                },
                                "start": {
                                  "column": 17,
                                  "line": 92
                                }
                              }
                            },
                            "range": [
                              1519,
                              1525
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 92
                              },
                              "start": {
                                "column": 12,
                                "line": 92
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "range": [
                              1529,
                              1531
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 92
                              },
                              "start": {
                                "column": 22,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            1519,
                            1531
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 92
                            },
                            "start": {
                              "column": 12,
                              "line": 92
                            }
                          }
                        },
                        "range": [
                          1515,
                          1570
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 94
                          },
                          "start": {
                            "column": 8,
                            "line": 92
                          }
                        }
                      }
                    ],
                    "range": [
                      1461,
                      1576
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 95
                      },
                      "start": {
                        "column": 23,
                        "line": 89
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
                      "name": "dx",
                      "optional": false,
                      "range": [
                        1449,
                        1451
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 89
                        },
                        "start": {
                          "column": 11,
                          "line": 89
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "range": [
                        1453,
                        1455
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 89
                        },
                        "start": {
                          "column": 15,
                          "line": 89
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "range": [
                        1457,
                        1459
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 89
                        },
                        "start": {
                          "column": 19,
                          "line": 89
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 95
                    },
                    "start": {
                      "column": 10,
                      "line": 89
                    }
                  }
                },
                "range": [
                  1442,
                  1576
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 95
                  },
                  "start": {
                    "column": 4,
                    "line": 89
                  }
                }
              }
            ],
            "range": [
              1414,
              1578
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 96
              },
              "start": {
                "column": 3,
                "line": 86
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "range": [
            1411,
            1413
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 86
            },
            "start": {
              "column": 0,
              "line": 86
            }
          }
        },
        "optional": false,
        "range": [
          1411,
          1579
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 96
          },
          "start": {
            "column": 0,
            "line": 86
          }
        }
      },
      "range": [
        1411,
        1580
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          1599,
          1601
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 98
          },
          "start": {
            "column": 17,
            "line": 98
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 98
              },
              "start": {
                "column": 21,
                "line": 98
              }
            },
            "range": [
              1603,
              1629
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "range": [
                      1605,
                      1610
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 98
                      },
                      "start": {
                        "column": 23,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    1605,
                    1610
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 98
                    },
                    "start": {
                      "column": 23,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    1613,
                    1617
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 98
                    },
                    "start": {
                      "column": 31,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1620,
                    1629
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 98
                    },
                    "start": {
                      "column": 38,
                      "line": 98
                    }
                  }
                }
              ],
              "range": [
                1605,
                1629
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 98
                },
                "start": {
                  "column": 23,
                  "line": 98
                }
              }
            }
          },
          "range": [
            1602,
            1629
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 98
            },
            "start": {
              "column": 20,
              "line": 98
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 98
          },
          "start": {
            "column": 48,
            "line": 98
          }
        },
        "range": [
          1630,
          1636
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1632,
            1636
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 98
            },
            "start": {
              "column": 50,
              "line": 98
            }
          }
        }
      },
      "range": [
        1582,
        1637
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1648,
                    1649
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 101
                    },
                    "start": {
                      "column": 4,
                      "line": 101
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    1651,
                    1653
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 101
                    },
                    "start": {
                      "column": 7,
                      "line": 101
                    }
                  }
                },
                "range": [
                  1648,
                  1653
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 101
                  },
                  "start": {
                    "column": 4,
                    "line": 101
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1659,
                    1660
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 102
                    },
                    "start": {
                      "column": 4,
                      "line": 102
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    1662,
                    1664
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 102
                    },
                    "start": {
                      "column": 7,
                      "line": 102
                    }
                  }
                },
                "range": [
                  1659,
                  1664
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 102
                  },
                  "start": {
                    "column": 4,
                    "line": 102
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "range": [
                    1670,
                    1676
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 103
                    },
                    "start": {
                      "column": 4,
                      "line": 103
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1676,
                    1804
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1699,
                                1703
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 104
                                },
                                "start": {
                                  "column": 8,
                                  "line": 104
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1704,
                                1705
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 104
                                },
                                "start": {
                                  "column": 13,
                                  "line": 104
                                }
                              }
                            },
                            "range": [
                              1699,
                              1705
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 104
                              },
                              "start": {
                                "column": 8,
                                "line": 104
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "range": [
                              1709,
                              1711
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 104
                              },
                              "start": {
                                "column": 18,
                                "line": 104
                              }
                            }
                          },
                          "range": [
                            1699,
                            1711
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 104
                            },
                            "start": {
                              "column": 8,
                              "line": 104
                            }
                          }
                        },
                        "range": [
                          1699,
                          1712
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 104
                          },
                          "start": {
                            "column": 8,
                            "line": 104
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1721,
                                1725
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 105
                                },
                                "start": {
                                  "column": 8,
                                  "line": 105
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                1726,
                                1727
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 105
                                },
                                "start": {
                                  "column": 13,
                                  "line": 105
                                }
                              }
                            },
                            "range": [
                              1721,
                              1727
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 105
                              },
                              "start": {
                                "column": 8,
                                "line": 105
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "range": [
                              1731,
                              1733
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 105
                              },
                              "start": {
                                "column": 18,
                                "line": 105
                              }
                            }
                          },
                          "range": [
                            1721,
                            1733
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 105
                            },
                            "start": {
                              "column": 8,
                              "line": 105
                            }
                          }
                        },
                        "range": [
                          1721,
                          1734
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 105
                          },
                          "start": {
                            "column": 8,
                            "line": 105
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
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      1775,
                                      1779
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      1780,
                                      1781
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "range": [
                                    1775,
                                    1781
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 107
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "range": [
                                    1785,
                                    1787
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 107
                                    }
                                  }
                                },
                                "range": [
                                  1775,
                                  1787
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 107
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 107
                                  }
                                }
                              },
                              "range": [
                                1775,
                                1788
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 107
                                },
                                "start": {
                                  "column": 12,
                                  "line": 107
                                }
                              }
                            }
                          ],
                          "range": [
                            1761,
                            1798
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 108
                            },
                            "start": {
                              "column": 26,
                              "line": 106
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1747,
                                1751
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 106
                                },
                                "start": {
                                  "column": 12,
                                  "line": 106
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                1752,
                                1753
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 106
                                },
                                "start": {
                                  "column": 17,
                                  "line": 106
                                }
                              }
                            },
                            "range": [
                              1747,
                              1753
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 106
                              },
                              "start": {
                                "column": 12,
                                "line": 106
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "range": [
                              1757,
                              1759
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 106
                              },
                              "start": {
                                "column": 22,
                                "line": 106
                              }
                            }
                          },
                          "range": [
                            1747,
                            1759
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 106
                            },
                            "start": {
                              "column": 12,
                              "line": 106
                            }
                          }
                        },
                        "range": [
                          1743,
                          1798
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 108
                          },
                          "start": {
                            "column": 8,
                            "line": 106
                          }
                        }
                      }
                    ],
                    "range": [
                      1689,
                      1804
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 109
                      },
                      "start": {
                        "column": 23,
                        "line": 103
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
                      "name": "dx",
                      "optional": false,
                      "range": [
                        1677,
                        1679
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 103
                        },
                        "start": {
                          "column": 11,
                          "line": 103
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "range": [
                        1681,
                        1683
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 103
                        },
                        "start": {
                          "column": 15,
                          "line": 103
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "range": [
                        1685,
                        1687
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 103
                        },
                        "start": {
                          "column": 19,
                          "line": 103
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 109
                    },
                    "start": {
                      "column": 10,
                      "line": 103
                    }
                  }
                },
                "range": [
                  1670,
                  1804
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 103
                  }
                }
              }
            ],
            "range": [
              1642,
              1806
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 110
              },
              "start": {
                "column": 3,
                "line": 100
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            1639,
            1641
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 100
            },
            "start": {
              "column": 0,
              "line": 100
            }
          }
        },
        "optional": false,
        "range": [
          1639,
          1807
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 110
          },
          "start": {
            "column": 0,
            "line": 100
          }
        }
      },
      "range": [
        1639,
        1808
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectDescriptor",
        "optional": false,
        "range": [
          1930,
          1946
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 115
          },
          "start": {
            "column": 5,
            "line": 115
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                1961,
                1965
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 116
                },
                "start": {
                  "column": 4,
                  "line": 116
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 116
                },
                "start": {
                  "column": 9,
                  "line": 116
                }
              },
              "range": [
                1966,
                1969
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    1968,
                    1969
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 116
                    },
                    "start": {
                      "column": 11,
                      "line": 116
                    }
                  }
                },
                "range": [
                  1968,
                  1969
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 116
                  },
                  "start": {
                    "column": 11,
                    "line": 116
                  }
                }
              }
            },
            "range": [
              1961,
              1970
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methods",
              "optional": false,
              "range": [
                1975,
                1982
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 117
                },
                "start": {
                  "column": 4,
                  "line": 117
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 117
                },
                "start": {
                  "column": 12,
                  "line": 117
                }
              },
              "range": [
                1983,
                2004
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        1985,
                        1986
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 117
                        },
                        "start": {
                          "column": 14,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      1985,
                      1986
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 117
                      },
                      "start": {
                        "column": 14,
                        "line": 117
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1997,
                        2004
                      ],
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "range": [
                                  1998,
                                  1999
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 117
                                  }
                                }
                              },
                              "range": [
                                1998,
                                1999
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 117
                                },
                                "start": {
                                  "column": 27,
                                  "line": 117
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  2002,
                                  2003
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 117
                                  }
                                }
                              },
                              "range": [
                                2002,
                                2003
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 117
                                },
                                "start": {
                                  "column": 31,
                                  "line": 117
                                }
                              }
                            }
                          ],
                          "range": [
                            1998,
                            2003
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 117
                            },
                            "start": {
                              "column": 27,
                              "line": 117
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 117
                        },
                        "start": {
                          "column": 26,
                          "line": 117
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThisType",
                      "optional": false,
                      "range": [
                        1989,
                        1997
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 117
                        },
                        "start": {
                          "column": 18,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      1989,
                      2004
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 117
                      },
                      "start": {
                        "column": 18,
                        "line": 117
                      }
                    }
                  }
                ],
                "range": [
                  1985,
                  2004
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 117
                  },
                  "start": {
                    "column": 14,
                    "line": 117
                  }
                }
              }
            },
            "range": [
              1975,
              2005
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
              }
            }
          }
        ],
        "range": [
          1955,
          2046
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 118
          },
          "start": {
            "column": 30,
            "line": 115
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 115
          },
          "start": {
            "column": 21,
            "line": 115
          }
        },
        "range": [
          1946,
          1952
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                1947,
                1948
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 115
                },
                "start": {
                  "column": 22,
                  "line": 115
                }
              }
            },
            "out": false,
            "range": [
              1947,
              1948
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 115
              },
              "start": {
                "column": 22,
                "line": 115
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                1950,
                1951
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 115
                },
                "start": {
                  "column": 25,
                  "line": 115
                }
              }
            },
            "out": false,
            "range": [
              1950,
              1951
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 115
              },
              "start": {
                "column": 25,
                "line": 115
              }
            }
          }
        ]
      },
      "range": [
        1925,
        2046
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeObject",
        "optional": false,
        "range": [
          2065,
          2075
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 120
          },
          "start": {
            "column": 17,
            "line": 120
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 120
              },
              "start": {
                "column": 38,
                "line": 120
              }
            },
            "range": [
              2086,
              2110
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2104,
                  2110
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        2105,
                        2106
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 120
                        },
                        "start": {
                          "column": 57,
                          "line": 120
                        }
                      }
                    },
                    "range": [
                      2105,
                      2106
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 120
                      },
                      "start": {
                        "column": 57,
                        "line": 120
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        2108,
                        2109
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 120
                        },
                        "start": {
                          "column": 60,
                          "line": 120
                        }
                      }
                    },
                    "range": [
                      2108,
                      2109
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 120
                      },
                      "start": {
                        "column": 60,
                        "line": 120
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 120
                  },
                  "start": {
                    "column": 56,
                    "line": 120
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectDescriptor",
                "optional": false,
                "range": [
                  2088,
                  2104
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 120
                  },
                  "start": {
                    "column": 40,
                    "line": 120
                  }
                }
              },
              "range": [
                2088,
                2110
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 120
                },
                "start": {
                  "column": 40,
                  "line": 120
                }
              }
            }
          },
          "range": [
            2082,
            2110
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 120
            },
            "start": {
              "column": 34,
              "line": 120
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 120
          },
          "start": {
            "column": 63,
            "line": 120
          }
        },
        "range": [
          2111,
          2118
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  2113,
                  2114
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 120
                  },
                  "start": {
                    "column": 65,
                    "line": 120
                  }
                }
              },
              "range": [
                2113,
                2114
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 120
                },
                "start": {
                  "column": 65,
                  "line": 120
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  2117,
                  2118
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 120
                  },
                  "start": {
                    "column": 69,
                    "line": 120
                  }
                }
              },
              "range": [
                2117,
                2118
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 120
                },
                "start": {
                  "column": 69,
                  "line": 120
                }
              }
            }
          ],
          "range": [
            2113,
            2118
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 120
            },
            "start": {
              "column": 65,
              "line": 120
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 120
          },
          "start": {
            "column": 27,
            "line": 120
          }
        },
        "range": [
          2075,
          2081
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                2076,
                2077
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 120
                },
                "start": {
                  "column": 28,
                  "line": 120
                }
              }
            },
            "out": false,
            "range": [
              2076,
              2077
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 120
              },
              "start": {
                "column": 28,
                "line": 120
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                2079,
                2080
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 120
                },
                "start": {
                  "column": 31,
                  "line": 120
                }
              }
            },
            "out": false,
            "range": [
              2079,
              2080
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 120
              },
              "start": {
                "column": 31,
                "line": 120
              }
            }
          }
        ]
      },
      "range": [
        2048,
        2119
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 120
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
            "name": "x1",
            "optional": false,
            "range": [
              2125,
              2127
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 122
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "range": [
                        2147,
                        2151
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 123
                        },
                        "start": {
                          "column": 4,
                          "line": 123
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2155,
                              2156
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 123
                              },
                              "start": {
                                "column": 12,
                                "line": 123
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
                              2158,
                              2159
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 123
                              },
                              "start": {
                                "column": 15,
                                "line": 123
                              }
                            }
                          },
                          "range": [
                            2155,
                            2159
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 123
                            },
                            "start": {
                              "column": 12,
                              "line": 123
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              2161,
                              2162
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 123
                              },
                              "start": {
                                "column": 18,
                                "line": 123
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
                              2164,
                              2165
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 123
                              },
                              "start": {
                                "column": 21,
                                "line": 123
                              }
                            }
                          },
                          "range": [
                            2161,
                            2165
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 123
                            },
                            "start": {
                              "column": 18,
                              "line": 123
                            }
                          }
                        }
                      ],
                      "range": [
                        2153,
                        2167
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 123
                        },
                        "start": {
                          "column": 10,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      2147,
                      2167
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 123
                      },
                      "start": {
                        "column": 4,
                        "line": 123
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "range": [
                        2173,
                        2180
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 124
                        },
                        "start": {
                          "column": 4,
                          "line": 124
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "moveBy",
                            "optional": false,
                            "range": [
                              2192,
                              2198
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 125
                              },
                              "start": {
                                "column": 8,
                                "line": 125
                              }
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              2198,
                              2334
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          2237,
                                          2241
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 126
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 126
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          2242,
                                          2243
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 126
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 126
                                          }
                                        }
                                      },
                                      "range": [
                                        2237,
                                        2243
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 126
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 126
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dx",
                                      "optional": false,
                                      "range": [
                                        2247,
                                        2249
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 126
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 126
                                        }
                                      }
                                    },
                                    "range": [
                                      2237,
                                      2249
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 126
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 126
                                      }
                                    }
                                  },
                                  "range": [
                                    2237,
                                    2250
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 126
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 126
                                    }
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          2287,
                                          2291
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 127
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 127
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          2292,
                                          2293
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 127
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 127
                                          }
                                        }
                                      },
                                      "range": [
                                        2287,
                                        2293
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 127
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 127
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dy",
                                      "optional": false,
                                      "range": [
                                        2297,
                                        2299
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 127
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 127
                                        }
                                      }
                                    },
                                    "range": [
                                      2287,
                                      2299
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 127
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 127
                                      }
                                    }
                                  },
                                  "range": [
                                    2287,
                                    2300
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 127
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 127
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2223,
                                2334
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 128
                                },
                                "start": {
                                  "column": 39,
                                  "line": 125
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
                                "name": "dx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 125
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 125
                                    }
                                  },
                                  "range": [
                                    2201,
                                    2209
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      2203,
                                      2209
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 125
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 125
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2199,
                                  2209
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 125
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 125
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dy",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 125
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 125
                                    }
                                  },
                                  "range": [
                                    2213,
                                    2221
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      2215,
                                      2221
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 125
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 125
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2211,
                                  2221
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 125
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 125
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 128
                              },
                              "start": {
                                "column": 14,
                                "line": 125
                              }
                            }
                          },
                          "range": [
                            2192,
                            2334
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 128
                            },
                            "start": {
                              "column": 8,
                              "line": 125
                            }
                          }
                        }
                      ],
                      "range": [
                        2182,
                        2340
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 129
                        },
                        "start": {
                          "column": 13,
                          "line": 124
                        }
                      }
                    },
                    "range": [
                      2173,
                      2340
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 129
                      },
                      "start": {
                        "column": 4,
                        "line": 124
                      }
                    }
                  }
                ],
                "range": [
                  2141,
                  2342
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 130
                  },
                  "start": {
                    "column": 20,
                    "line": 122
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeObject",
              "optional": false,
              "range": [
                2130,
                2140
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 122
                },
                "start": {
                  "column": 9,
                  "line": 122
                }
              }
            },
            "optional": false,
            "range": [
              2130,
              2343
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 130
              },
              "start": {
                "column": 9,
                "line": 122
              }
            }
          },
          "range": [
            2125,
            2343
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 130
            },
            "start": {
              "column": 4,
              "line": 122
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2121,
        2344
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectDescriptor2",
        "optional": false,
        "range": [
          2476,
          2493
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 135
          },
          "start": {
            "column": 5,
            "line": 135
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2510,
                2517
              ],
              "params": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          2511,
                          2512
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 135
                          },
                          "start": {
                            "column": 40,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        2511,
                        2512
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 135
                        },
                        "start": {
                          "column": 40,
                          "line": 135
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          2515,
                          2516
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 135
                          },
                          "start": {
                            "column": 44,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        2515,
                        2516
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 135
                        },
                        "start": {
                          "column": 44,
                          "line": 135
                        }
                      }
                    }
                  ],
                  "range": [
                    2511,
                    2516
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 135
                    },
                    "start": {
                      "column": 40,
                      "line": 135
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 135
                },
                "start": {
                  "column": 39,
                  "line": 135
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "range": [
                2502,
                2510
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 135
                },
                "start": {
                  "column": 31,
                  "line": 135
                }
              }
            },
            "range": [
              2502,
              2517
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 135
              },
              "start": {
                "column": 31,
                "line": 135
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    2526,
                    2530
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 136
                    },
                    "start": {
                      "column": 4,
                      "line": 136
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 136
                    },
                    "start": {
                      "column": 9,
                      "line": 136
                    }
                  },
                  "range": [
                    2531,
                    2534
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        2533,
                        2534
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 136
                        },
                        "start": {
                          "column": 11,
                          "line": 136
                        }
                      }
                    },
                    "range": [
                      2533,
                      2534
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 136
                      },
                      "start": {
                        "column": 11,
                        "line": 136
                      }
                    }
                  }
                },
                "range": [
                  2526,
                  2535
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 136
                  },
                  "start": {
                    "column": 4,
                    "line": 136
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "range": [
                    2540,
                    2547
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 137
                    },
                    "start": {
                      "column": 4,
                      "line": 137
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 137
                    },
                    "start": {
                      "column": 12,
                      "line": 137
                    }
                  },
                  "range": [
                    2548,
                    2551
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        2550,
                        2551
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 137
                        },
                        "start": {
                          "column": 14,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      2550,
                      2551
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 137
                      },
                      "start": {
                        "column": 14,
                        "line": 137
                      }
                    }
                  }
                },
                "range": [
                  2540,
                  2552
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 137
                  },
                  "start": {
                    "column": 4,
                    "line": 137
                  }
                }
              }
            ],
            "range": [
              2520,
              2554
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 138
              },
              "start": {
                "column": 49,
                "line": 135
              }
            }
          }
        ],
        "range": [
          2502,
          2554
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 138
          },
          "start": {
            "column": 31,
            "line": 135
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 135
          },
          "start": {
            "column": 22,
            "line": 135
          }
        },
        "range": [
          2493,
          2499
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                2494,
                2495
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 135
                },
                "start": {
                  "column": 23,
                  "line": 135
                }
              }
            },
            "out": false,
            "range": [
              2494,
              2495
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 135
              },
              "start": {
                "column": 23,
                "line": 135
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                2497,
                2498
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 135
                },
                "start": {
                  "column": 26,
                  "line": 135
                }
              }
            },
            "out": false,
            "range": [
              2497,
              2498
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 135
              },
              "start": {
                "column": 26,
                "line": 135
              }
            }
          }
        ]
      },
      "range": [
        2471,
        2554
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 138
        },
        "start": {
          "column": 0,
          "line": 135
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeObject2",
        "optional": false,
        "range": [
          2573,
          2584
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 140
          },
          "start": {
            "column": 17,
            "line": 140
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 140
              },
              "start": {
                "column": 39,
                "line": 140
              }
            },
            "range": [
              2595,
              2619
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2613,
                  2619
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        2614,
                        2615
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 140
                        },
                        "start": {
                          "column": 58,
                          "line": 140
                        }
                      }
                    },
                    "range": [
                      2614,
                      2615
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 140
                      },
                      "start": {
                        "column": 58,
                        "line": 140
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        2617,
                        2618
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 140
                        },
                        "start": {
                          "column": 61,
                          "line": 140
                        }
                      }
                    },
                    "range": [
                      2617,
                      2618
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 140
                      },
                      "start": {
                        "column": 61,
                        "line": 140
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 140
                  },
                  "start": {
                    "column": 57,
                    "line": 140
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectDescriptor",
                "optional": false,
                "range": [
                  2597,
                  2613
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 140
                  },
                  "start": {
                    "column": 41,
                    "line": 140
                  }
                }
              },
              "range": [
                2597,
                2619
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 140
                },
                "start": {
                  "column": 41,
                  "line": 140
                }
              }
            }
          },
          "range": [
            2591,
            2619
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 140
            },
            "start": {
              "column": 35,
              "line": 140
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 71,
            "line": 140
          },
          "start": {
            "column": 64,
            "line": 140
          }
        },
        "range": [
          2620,
          2627
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  2622,
                  2623
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 140
                  },
                  "start": {
                    "column": 66,
                    "line": 140
                  }
                }
              },
              "range": [
                2622,
                2623
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 140
                },
                "start": {
                  "column": 66,
                  "line": 140
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  2626,
                  2627
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 140
                  },
                  "start": {
                    "column": 70,
                    "line": 140
                  }
                }
              },
              "range": [
                2626,
                2627
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 140
                },
                "start": {
                  "column": 70,
                  "line": 140
                }
              }
            }
          ],
          "range": [
            2622,
            2627
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 140
            },
            "start": {
              "column": 66,
              "line": 140
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 140
          },
          "start": {
            "column": 28,
            "line": 140
          }
        },
        "range": [
          2584,
          2590
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                2585,
                2586
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 140
                },
                "start": {
                  "column": 29,
                  "line": 140
                }
              }
            },
            "out": false,
            "range": [
              2585,
              2586
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 140
              },
              "start": {
                "column": 29,
                "line": 140
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                2588,
                2589
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 140
                },
                "start": {
                  "column": 32,
                  "line": 140
                }
              }
            },
            "out": false,
            "range": [
              2588,
              2589
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 140
              },
              "start": {
                "column": 32,
                "line": 140
              }
            }
          }
        ]
      },
      "range": [
        2556,
        2628
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 140
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
            "name": "x2",
            "optional": false,
            "range": [
              2634,
              2636
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 142
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "range": [
                        2657,
                        2661
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 143
                        },
                        "start": {
                          "column": 4,
                          "line": 143
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2665,
                              2666
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 143
                              },
                              "start": {
                                "column": 12,
                                "line": 143
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
                              2668,
                              2669
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 143
                              },
                              "start": {
                                "column": 15,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            2665,
                            2669
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 143
                            },
                            "start": {
                              "column": 12,
                              "line": 143
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              2671,
                              2672
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 143
                              },
                              "start": {
                                "column": 18,
                                "line": 143
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
                              2674,
                              2675
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 143
                              },
                              "start": {
                                "column": 21,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            2671,
                            2675
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 143
                            },
                            "start": {
                              "column": 18,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "range": [
                        2663,
                        2677
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 143
                        },
                        "start": {
                          "column": 10,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      2657,
                      2677
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 143
                      },
                      "start": {
                        "column": 4,
                        "line": 143
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "range": [
                        2683,
                        2690
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 144
                        },
                        "start": {
                          "column": 4,
                          "line": 144
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "moveBy",
                            "optional": false,
                            "range": [
                              2702,
                              2708
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 145
                              },
                              "start": {
                                "column": 8,
                                "line": 145
                              }
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              2708,
                              2844
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          2747,
                                          2751
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 146
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 146
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          2752,
                                          2753
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 146
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 146
                                          }
                                        }
                                      },
                                      "range": [
                                        2747,
                                        2753
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 146
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 146
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dx",
                                      "optional": false,
                                      "range": [
                                        2757,
                                        2759
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 146
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 146
                                        }
                                      }
                                    },
                                    "range": [
                                      2747,
                                      2759
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 146
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 146
                                      }
                                    }
                                  },
                                  "range": [
                                    2747,
                                    2760
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 146
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 146
                                    }
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          2797,
                                          2801
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 147
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 147
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          2802,
                                          2803
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 147
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 147
                                          }
                                        }
                                      },
                                      "range": [
                                        2797,
                                        2803
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 147
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 147
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dy",
                                      "optional": false,
                                      "range": [
                                        2807,
                                        2809
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 147
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 147
                                        }
                                      }
                                    },
                                    "range": [
                                      2797,
                                      2809
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 147
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 147
                                      }
                                    }
                                  },
                                  "range": [
                                    2797,
                                    2810
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 147
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 147
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2733,
                                2844
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 148
                                },
                                "start": {
                                  "column": 39,
                                  "line": 145
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
                                "name": "dx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 145
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 145
                                    }
                                  },
                                  "range": [
                                    2711,
                                    2719
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      2713,
                                      2719
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 145
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 145
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2709,
                                  2719
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 145
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 145
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dy",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 145
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 145
                                    }
                                  },
                                  "range": [
                                    2723,
                                    2731
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      2725,
                                      2731
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 145
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 145
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2721,
                                  2731
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 145
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 145
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 148
                              },
                              "start": {
                                "column": 14,
                                "line": 145
                              }
                            }
                          },
                          "range": [
                            2702,
                            2844
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 148
                            },
                            "start": {
                              "column": 8,
                              "line": 145
                            }
                          }
                        }
                      ],
                      "range": [
                        2692,
                        2850
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 149
                        },
                        "start": {
                          "column": 13,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      2683,
                      2850
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 149
                      },
                      "start": {
                        "column": 4,
                        "line": 144
                      }
                    }
                  }
                ],
                "range": [
                  2651,
                  2852
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 150
                  },
                  "start": {
                    "column": 21,
                    "line": 142
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeObject2",
              "optional": false,
              "range": [
                2639,
                2650
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 142
                },
                "start": {
                  "column": 9,
                  "line": 142
                }
              }
            },
            "optional": false,
            "range": [
              2639,
              2853
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 150
              },
              "start": {
                "column": 9,
                "line": 142
              }
            }
          },
          "range": [
            2634,
            2853
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 150
            },
            "start": {
              "column": 4,
              "line": 142
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2630,
        2854
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 150
        },
        "start": {
          "column": 0,
          "line": 142
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropDesc",
        "optional": false,
        "range": [
          2940,
          2948
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 154
          },
          "start": {
            "column": 5,
            "line": 154
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                2960,
                2965
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 155
                },
                "start": {
                  "column": 4,
                  "line": 155
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 155
                },
                "start": {
                  "column": 10,
                  "line": 155
                }
              },
              "range": [
                2966,
                2969
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    2968,
                    2969
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 155
                    },
                    "start": {
                      "column": 12,
                      "line": 155
                    }
                  }
                },
                "range": [
                  2968,
                  2969
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 155
                  },
                  "start": {
                    "column": 12,
                    "line": 155
                  }
                }
              }
            },
            "range": [
              2960,
              2970
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 155
              },
              "start": {
                "column": 4,
                "line": 155
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                2975,
                2978
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 156
                },
                "start": {
                  "column": 4,
                  "line": 156
                }
              }
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 156
                },
                "start": {
                  "column": 10,
                  "line": 156
                }
              },
              "range": [
                2981,
                2984
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    2983,
                    2984
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 156
                    },
                    "start": {
                      "column": 12,
                      "line": 156
                    }
                  }
                },
                "range": [
                  2983,
                  2984
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 156
                  },
                  "start": {
                    "column": 12,
                    "line": 156
                  }
                }
              }
            },
            "static": false,
            "range": [
              2975,
              2985
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 156
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "range": [
                2990,
                2993
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 157
                },
                "start": {
                  "column": 4,
                  "line": 157
                }
              }
            },
            "kind": "method",
            "optional": true,
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
                      "column": 17,
                      "line": 157
                    },
                    "start": {
                      "column": 14,
                      "line": 157
                    }
                  },
                  "range": [
                    3000,
                    3003
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        3002,
                        3003
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 157
                        },
                        "start": {
                          "column": 16,
                          "line": 157
                        }
                      }
                    },
                    "range": [
                      3002,
                      3003
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 157
                      },
                      "start": {
                        "column": 16,
                        "line": 157
                      }
                    }
                  }
                },
                "range": [
                  2995,
                  3003
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 157
                  },
                  "start": {
                    "column": 9,
                    "line": 157
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 157
                },
                "start": {
                  "column": 18,
                  "line": 157
                }
              },
              "range": [
                3004,
                3010
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  3006,
                  3010
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 157
                  },
                  "start": {
                    "column": 20,
                    "line": 157
                  }
                }
              }
            },
            "static": false,
            "range": [
              2990,
              3011
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
              }
            }
          }
        ],
        "range": [
          2954,
          3013
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 19,
            "line": 154
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 154
          },
          "start": {
            "column": 13,
            "line": 154
          }
        },
        "range": [
          2948,
          2951
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                2949,
                2950
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 154
                },
                "start": {
                  "column": 14,
                  "line": 154
                }
              }
            },
            "out": false,
            "range": [
              2949,
              2950
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 154
              },
              "start": {
                "column": 14,
                "line": 154
              }
            }
          }
        ]
      },
      "range": [
        2935,
        3013
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 154
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropDescMap",
        "optional": false,
        "range": [
          3020,
          3031
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 160
          },
          "start": {
            "column": 5,
            "line": 160
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3055,
                3056
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 161
                },
                "start": {
                  "column": 16,
                  "line": 161
                }
              }
            },
            "range": [
              3055,
              3056
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 161
              },
              "start": {
                "column": 16,
                "line": 161
              }
            }
          },
          "range": [
            3049,
            3056
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 161
            },
            "start": {
              "column": 10,
              "line": 161
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            3044,
            3045
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 161
            },
            "start": {
              "column": 5,
              "line": 161
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3067,
              3073
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3070,
                      3071
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 161
                      },
                      "start": {
                        "column": 31,
                        "line": 161
                      }
                    }
                  },
                  "range": [
                    3070,
                    3071
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 161
                    },
                    "start": {
                      "column": 31,
                      "line": 161
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      3068,
                      3069
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 161
                      },
                      "start": {
                        "column": 29,
                        "line": 161
                      }
                    }
                  },
                  "range": [
                    3068,
                    3069
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 161
                    },
                    "start": {
                      "column": 29,
                      "line": 161
                    }
                  }
                },
                "range": [
                  3068,
                  3072
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 161
                  },
                  "start": {
                    "column": 29,
                    "line": 161
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 161
              },
              "start": {
                "column": 28,
                "line": 161
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropDesc",
            "optional": false,
            "range": [
              3059,
              3067
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 161
              },
              "start": {
                "column": 20,
                "line": 161
              }
            }
          },
          "range": [
            3059,
            3073
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 161
            },
            "start": {
              "column": 20,
              "line": 161
            }
          }
        },
        "range": [
          3037,
          3076
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 162
          },
          "start": {
            "column": 22,
            "line": 160
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 160
          },
          "start": {
            "column": 16,
            "line": 160
          }
        },
        "range": [
          3031,
          3034
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3032,
                3033
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 160
                },
                "start": {
                  "column": 17,
                  "line": 160
                }
              }
            },
            "out": false,
            "range": [
              3032,
              3033
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 160
              },
              "start": {
                "column": 17,
                "line": 160
              }
            }
          }
        ]
      },
      "range": [
        3015,
        3076
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 160
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineProp",
        "optional": false,
        "range": [
          3095,
          3105
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 164
          },
          "start": {
            "column": 17,
            "line": 164
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 164
              },
              "start": {
                "column": 55,
                "line": 164
              }
            },
            "range": [
              3133,
              3136
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3135,
                  3136
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 164
                  },
                  "start": {
                    "column": 57,
                    "line": 164
                  }
                }
              },
              "range": [
                3135,
                3136
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 164
                },
                "start": {
                  "column": 57,
                  "line": 164
                }
              }
            }
          },
          "range": [
            3130,
            3136
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 164
            },
            "start": {
              "column": 52,
              "line": 164
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 164
              },
              "start": {
                "column": 64,
                "line": 164
              }
            },
            "range": [
              3142,
              3145
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  3144,
                  3145
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 164
                  },
                  "start": {
                    "column": 66,
                    "line": 164
                  }
                }
              },
              "range": [
                3144,
                3145
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 164
                },
                "start": {
                  "column": 66,
                  "line": 164
                }
              }
            }
          },
          "range": [
            3138,
            3145
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 164
            },
            "start": {
              "column": 60,
              "line": 164
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 100,
                "line": 164
              },
              "start": {
                "column": 73,
                "line": 164
              }
            },
            "range": [
              3151,
              3178
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3161,
                      3164
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            3162,
                            3163
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 164
                            },
                            "start": {
                              "column": 84,
                              "line": 164
                            }
                          }
                        },
                        "range": [
                          3162,
                          3163
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 164
                          },
                          "start": {
                            "column": 84,
                            "line": 164
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 164
                      },
                      "start": {
                        "column": 83,
                        "line": 164
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropDesc",
                    "optional": false,
                    "range": [
                      3153,
                      3161
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 164
                      },
                      "start": {
                        "column": 75,
                        "line": 164
                      }
                    }
                  },
                  "range": [
                    3153,
                    3164
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 164
                    },
                    "start": {
                      "column": 75,
                      "line": 164
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3175,
                      3178
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3176,
                            3177
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 164
                            },
                            "start": {
                              "column": 98,
                              "line": 164
                            }
                          }
                        },
                        "range": [
                          3176,
                          3177
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 164
                          },
                          "start": {
                            "column": 98,
                            "line": 164
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 164
                      },
                      "start": {
                        "column": 97,
                        "line": 164
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "range": [
                      3167,
                      3175
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 164
                      },
                      "start": {
                        "column": 89,
                        "line": 164
                      }
                    }
                  },
                  "range": [
                    3167,
                    3178
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 164
                    },
                    "start": {
                      "column": 89,
                      "line": 164
                    }
                  }
                }
              ],
              "range": [
                3153,
                3178
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 164
                },
                "start": {
                  "column": 75,
                  "line": 164
                }
              }
            }
          },
          "range": [
            3147,
            3178
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 164
            },
            "start": {
              "column": 69,
              "line": 164
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 119,
            "line": 164
          },
          "start": {
            "column": 101,
            "line": 164
          }
        },
        "range": [
          3179,
          3197
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3181,
                  3182
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 164
                  },
                  "start": {
                    "column": 103,
                    "line": 164
                  }
                }
              },
              "range": [
                3181,
                3182
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 164
                },
                "start": {
                  "column": 103,
                  "line": 164
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3191,
                  3197
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3192,
                        3193
                      ],
                      "loc": {
                        "end": {
                          "column": 115,
                          "line": 164
                        },
                        "start": {
                          "column": 114,
                          "line": 164
                        }
                      }
                    },
                    "range": [
                      3192,
                      3193
                    ],
                    "loc": {
                      "end": {
                        "column": 115,
                        "line": 164
                      },
                      "start": {
                        "column": 114,
                        "line": 164
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3195,
                        3196
                      ],
                      "loc": {
                        "end": {
                          "column": 118,
                          "line": 164
                        },
                        "start": {
                          "column": 117,
                          "line": 164
                        }
                      }
                    },
                    "range": [
                      3195,
                      3196
                    ],
                    "loc": {
                      "end": {
                        "column": 118,
                        "line": 164
                      },
                      "start": {
                        "column": 117,
                        "line": 164
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 119,
                    "line": 164
                  },
                  "start": {
                    "column": 113,
                    "line": 164
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  3185,
                  3191
                ],
                "loc": {
                  "end": {
                    "column": 113,
                    "line": 164
                  },
                  "start": {
                    "column": 107,
                    "line": 164
                  }
                }
              },
              "range": [
                3185,
                3197
              ],
              "loc": {
                "end": {
                  "column": 119,
                  "line": 164
                },
                "start": {
                  "column": 107,
                  "line": 164
                }
              }
            }
          ],
          "range": [
            3181,
            3197
          ],
          "loc": {
            "end": {
              "column": 119,
              "line": 164
            },
            "start": {
              "column": 103,
              "line": 164
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 164
          },
          "start": {
            "column": 27,
            "line": 164
          }
        },
        "range": [
          3105,
          3129
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3106,
                3107
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 164
                },
                "start": {
                  "column": 28,
                  "line": 164
                }
              }
            },
            "out": false,
            "range": [
              3106,
              3107
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 164
              },
              "start": {
                "column": 28,
                "line": 164
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3119,
                3125
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 164
                },
                "start": {
                  "column": 41,
                  "line": 164
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                3109,
                3110
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 164
                },
                "start": {
                  "column": 31,
                  "line": 164
                }
              }
            },
            "out": false,
            "range": [
              3109,
              3125
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 164
              },
              "start": {
                "column": 31,
                "line": 164
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                3127,
                3128
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 164
                },
                "start": {
                  "column": 49,
                  "line": 164
                }
              }
            },
            "out": false,
            "range": [
              3127,
              3128
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 164
              },
              "start": {
                "column": 49,
                "line": 164
              }
            }
          }
        ]
      },
      "range": [
        3078,
        3198
      ],
      "loc": {
        "end": {
          "column": 120,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 164
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineProps",
        "optional": false,
        "range": [
          3217,
          3228
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 166
          },
          "start": {
            "column": 17,
            "line": 166
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 166
              },
              "start": {
                "column": 38,
                "line": 166
              }
            },
            "range": [
              3238,
              3241
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3240,
                  3241
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 166
                  },
                  "start": {
                    "column": 40,
                    "line": 166
                  }
                }
              },
              "range": [
                3240,
                3241
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 166
                },
                "start": {
                  "column": 40,
                  "line": 166
                }
              }
            }
          },
          "range": [
            3235,
            3241
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 166
            },
            "start": {
              "column": 35,
              "line": 166
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "descs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 166
              },
              "start": {
                "column": 48,
                "line": 166
              }
            },
            "range": [
              3248,
              3278
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3261,
                      3264
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            3262,
                            3263
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 166
                            },
                            "start": {
                              "column": 62,
                              "line": 166
                            }
                          }
                        },
                        "range": [
                          3262,
                          3263
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 166
                          },
                          "start": {
                            "column": 62,
                            "line": 166
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 166
                      },
                      "start": {
                        "column": 61,
                        "line": 166
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropDescMap",
                    "optional": false,
                    "range": [
                      3250,
                      3261
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 166
                      },
                      "start": {
                        "column": 50,
                        "line": 166
                      }
                    }
                  },
                  "range": [
                    3250,
                    3264
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 166
                    },
                    "start": {
                      "column": 50,
                      "line": 166
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3275,
                      3278
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3276,
                            3277
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 166
                            },
                            "start": {
                              "column": 76,
                              "line": 166
                            }
                          }
                        },
                        "range": [
                          3276,
                          3277
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 166
                          },
                          "start": {
                            "column": 76,
                            "line": 166
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 166
                      },
                      "start": {
                        "column": 75,
                        "line": 166
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "range": [
                      3267,
                      3275
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 166
                      },
                      "start": {
                        "column": 67,
                        "line": 166
                      }
                    }
                  },
                  "range": [
                    3267,
                    3278
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 166
                    },
                    "start": {
                      "column": 67,
                      "line": 166
                    }
                  }
                }
              ],
              "range": [
                3250,
                3278
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 166
                },
                "start": {
                  "column": 50,
                  "line": 166
                }
              }
            }
          },
          "range": [
            3243,
            3278
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 166
            },
            "start": {
              "column": 43,
              "line": 166
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 86,
            "line": 166
          },
          "start": {
            "column": 79,
            "line": 166
          }
        },
        "range": [
          3279,
          3286
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3281,
                  3282
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 166
                  },
                  "start": {
                    "column": 81,
                    "line": 166
                  }
                }
              },
              "range": [
                3281,
                3282
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 166
                },
                "start": {
                  "column": 81,
                  "line": 166
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3285,
                  3286
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 166
                  },
                  "start": {
                    "column": 85,
                    "line": 166
                  }
                }
              },
              "range": [
                3285,
                3286
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 166
                },
                "start": {
                  "column": 85,
                  "line": 166
                }
              }
            }
          ],
          "range": [
            3281,
            3286
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 166
            },
            "start": {
              "column": 81,
              "line": 166
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 166
          },
          "start": {
            "column": 28,
            "line": 166
          }
        },
        "range": [
          3228,
          3234
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3229,
                3230
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 166
                },
                "start": {
                  "column": 29,
                  "line": 166
                }
              }
            },
            "out": false,
            "range": [
              3229,
              3230
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 166
              },
              "start": {
                "column": 29,
                "line": 166
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                3232,
                3233
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 166
                },
                "start": {
                  "column": 32,
                  "line": 166
                }
              }
            },
            "out": false,
            "range": [
              3232,
              3233
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 166
              },
              "start": {
                "column": 32,
                "line": 166
              }
            }
          }
        ]
      },
      "range": [
        3200,
        3287
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 166
        },
        "start": {
          "column": 0,
          "line": 166
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
            "name": "p10",
            "optional": false,
            "range": [
              3293,
              3296
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 168
              },
              "start": {
                "column": 4,
                "line": 168
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "range": [
                  3310,
                  3312
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 168
                  },
                  "start": {
                    "column": 21,
                    "line": 168
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  3314,
                  3319
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 168
                  },
                  "start": {
                    "column": 25,
                    "line": 168
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        3323,
                        3328
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 168
                        },
                        "start": {
                          "column": 34,
                          "line": 168
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        3330,
                        3332
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 168
                        },
                        "start": {
                          "column": 41,
                          "line": 168
                        }
                      }
                    },
                    "range": [
                      3323,
                      3332
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 168
                      },
                      "start": {
                        "column": 34,
                        "line": 168
                      }
                    }
                  }
                ],
                "range": [
                  3321,
                  3334
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 168
                  },
                  "start": {
                    "column": 32,
                    "line": 168
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineProp",
              "optional": false,
              "range": [
                3299,
                3309
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 168
                },
                "start": {
                  "column": 10,
                  "line": 168
                }
              }
            },
            "optional": false,
            "range": [
              3299,
              3335
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 168
              },
              "start": {
                "column": 10,
                "line": 168
              }
            }
          },
          "range": [
            3293,
            3335
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 168
            },
            "start": {
              "column": 4,
              "line": 168
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3289,
        3336
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 168
        },
        "start": {
          "column": 0,
          "line": 168
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
            "name": "p10",
            "optional": false,
            "range": [
              3337,
              3340
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 169
              },
              "start": {
                "column": 0,
                "line": 169
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              3341,
              3344
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 169
              }
            }
          },
          "range": [
            3337,
            3344
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 169
            },
            "start": {
              "column": 0,
              "line": 169
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p10",
              "optional": false,
              "range": [
                3347,
                3350
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 169
                },
                "start": {
                  "column": 10,
                  "line": 169
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                3351,
                3354
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 169
                },
                "start": {
                  "column": 14,
                  "line": 169
                }
              }
            },
            "range": [
              3347,
              3354
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 169
              },
              "start": {
                "column": 10,
                "line": 169
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3357,
              3358
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 169
              },
              "start": {
                "column": 20,
                "line": 169
              }
            }
          },
          "range": [
            3347,
            3358
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 169
            },
            "start": {
              "column": 10,
              "line": 169
            }
          }
        },
        "range": [
          3337,
          3358
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 169
          },
          "start": {
            "column": 0,
            "line": 169
          }
        }
      },
      "range": [
        3337,
        3359
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 169
        },
        "start": {
          "column": 0,
          "line": 169
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
            "name": "p11",
            "optional": false,
            "range": [
              3365,
              3368
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 171
              },
              "start": {
                "column": 4,
                "line": 171
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "range": [
                  3382,
                  3384
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 171
                  },
                  "start": {
                    "column": 21,
                    "line": 171
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"bar\"",
                "value": "bar",
                "range": [
                  3386,
                  3391
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 171
                  },
                  "start": {
                    "column": 25,
                    "line": 171
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "range": [
                        3399,
                        3402
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 172
                        },
                        "start": {
                          "column": 4,
                          "line": 172
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        3402,
                        3435
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  3422,
                                  3426
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 173
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 173
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3427,
                                  3428
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 173
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 173
                                  }
                                }
                              },
                              "range": [
                                3422,
                                3428
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 173
                                },
                                "start": {
                                  "column": 15,
                                  "line": 173
                                }
                              }
                            },
                            "range": [
                              3415,
                              3429
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 173
                              },
                              "start": {
                                "column": 8,
                                "line": 173
                              }
                            }
                          }
                        ],
                        "range": [
                          3405,
                          3435
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 174
                          },
                          "start": {
                            "column": 10,
                            "line": 172
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
                          "line": 174
                        },
                        "start": {
                          "column": 7,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      3399,
                      3435
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 174
                      },
                      "start": {
                        "column": 4,
                        "line": 172
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "range": [
                        3441,
                        3444
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 175
                        },
                        "start": {
                          "column": 4,
                          "line": 175
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        3444,
                        3491
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
                                    3470,
                                    3474
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 176
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 176
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    3475,
                                    3476
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 176
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 176
                                    }
                                  }
                                },
                                "range": [
                                  3470,
                                  3476
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 176
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 176
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "range": [
                                  3479,
                                  3484
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 176
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 176
                                  }
                                }
                              },
                              "range": [
                                3470,
                                3484
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 176
                                },
                                "start": {
                                  "column": 8,
                                  "line": 176
                                }
                              }
                            },
                            "range": [
                              3470,
                              3485
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 176
                              },
                              "start": {
                                "column": 8,
                                "line": 176
                              }
                            }
                          }
                        ],
                        "range": [
                          3460,
                          3491
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 177
                          },
                          "start": {
                            "column": 23,
                            "line": 175
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
                                "column": 21,
                                "line": 175
                              },
                              "start": {
                                "column": 13,
                                "line": 175
                              }
                            },
                            "range": [
                              3450,
                              3458
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                3452,
                                3458
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 175
                                },
                                "start": {
                                  "column": 15,
                                  "line": 175
                                }
                              }
                            }
                          },
                          "range": [
                            3445,
                            3458
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 175
                            },
                            "start": {
                              "column": 8,
                              "line": 175
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 177
                        },
                        "start": {
                          "column": 7,
                          "line": 175
                        }
                      }
                    },
                    "range": [
                      3441,
                      3491
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 177
                      },
                      "start": {
                        "column": 4,
                        "line": 175
                      }
                    }
                  }
                ],
                "range": [
                  3393,
                  3493
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 178
                  },
                  "start": {
                    "column": 32,
                    "line": 171
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineProp",
              "optional": false,
              "range": [
                3371,
                3381
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 171
                },
                "start": {
                  "column": 10,
                  "line": 171
                }
              }
            },
            "optional": false,
            "range": [
              3371,
              3494
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 178
              },
              "start": {
                "column": 10,
                "line": 171
              }
            }
          },
          "range": [
            3365,
            3494
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 178
            },
            "start": {
              "column": 4,
              "line": 171
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3361,
        3495
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 171
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
            "name": "p11",
            "optional": false,
            "range": [
              3496,
              3499
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 179
              },
              "start": {
                "column": 0,
                "line": 179
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              3500,
              3503
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 179
              },
              "start": {
                "column": 4,
                "line": 179
              }
            }
          },
          "range": [
            3496,
            3503
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 179
            },
            "start": {
              "column": 0,
              "line": 179
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p11",
              "optional": false,
              "range": [
                3506,
                3509
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 179
                },
                "start": {
                  "column": 10,
                  "line": 179
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                3510,
                3513
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 179
                },
                "start": {
                  "column": 14,
                  "line": 179
                }
              }
            },
            "range": [
              3506,
              3513
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 179
              },
              "start": {
                "column": 10,
                "line": 179
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3516,
              3517
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 179
              },
              "start": {
                "column": 20,
                "line": 179
              }
            }
          },
          "range": [
            3506,
            3517
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 179
            },
            "start": {
              "column": 10,
              "line": 179
            }
          }
        },
        "range": [
          3496,
          3517
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 179
          },
          "start": {
            "column": 0,
            "line": 179
          }
        }
      },
      "range": [
        3496,
        3518
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 179
        },
        "start": {
          "column": 0,
          "line": 179
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
            "name": "p12",
            "optional": false,
            "range": [
              3524,
              3527
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 181
              },
              "start": {
                "column": 4,
                "line": 181
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "range": [
                  3542,
                  3544
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 181
                  },
                  "start": {
                    "column": 22,
                    "line": 181
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3552,
                        3555
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 182
                        },
                        "start": {
                          "column": 4,
                          "line": 182
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              3567,
                              3572
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 183
                              },
                              "start": {
                                "column": 8,
                                "line": 183
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              3574,
                              3576
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 183
                              },
                              "start": {
                                "column": 15,
                                "line": 183
                              }
                            }
                          },
                          "range": [
                            3567,
                            3576
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 183
                            },
                            "start": {
                              "column": 8,
                              "line": 183
                            }
                          }
                        }
                      ],
                      "range": [
                        3557,
                        3582
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 184
                        },
                        "start": {
                          "column": 9,
                          "line": 182
                        }
                      }
                    },
                    "range": [
                      3552,
                      3582
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 184
                      },
                      "start": {
                        "column": 4,
                        "line": 182
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3588,
                        3591
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 185
                        },
                        "start": {
                          "column": 4,
                          "line": 185
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "range": [
                              3603,
                              3606
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 186
                              },
                              "start": {
                                "column": 8,
                                "line": 186
                              }
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              3606,
                              3655
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        3638,
                                        3642
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 187
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 187
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        3643,
                                        3644
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 187
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 187
                                        }
                                      }
                                    },
                                    "range": [
                                      3638,
                                      3644
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 187
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 187
                                      }
                                    }
                                  },
                                  "range": [
                                    3631,
                                    3645
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 187
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 187
                                    }
                                  }
                                }
                              ],
                              "range": [
                                3617,
                                3655
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 188
                                },
                                "start": {
                                  "column": 22,
                                  "line": 186
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
                                  "line": 186
                                },
                                "start": {
                                  "column": 13,
                                  "line": 186
                                }
                              },
                              "range": [
                                3608,
                                3616
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  3610,
                                  3616
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 186
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 186
                                  }
                                }
                              }
                            },
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 188
                              },
                              "start": {
                                "column": 11,
                                "line": 186
                              }
                            }
                          },
                          "range": [
                            3603,
                            3655
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 188
                            },
                            "start": {
                              "column": 8,
                              "line": 186
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "set",
                            "optional": false,
                            "range": [
                              3665,
                              3668
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 189
                              },
                              "start": {
                                "column": 8,
                                "line": 189
                              }
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              3668,
                              3723
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
                                          3698,
                                          3702
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 190
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 190
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          3703,
                                          3704
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 190
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 190
                                          }
                                        }
                                      },
                                      "range": [
                                        3698,
                                        3704
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 190
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 190
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        3707,
                                        3712
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 190
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 190
                                        }
                                      }
                                    },
                                    "range": [
                                      3698,
                                      3712
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 190
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 190
                                      }
                                    }
                                  },
                                  "range": [
                                    3698,
                                    3713
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 190
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 190
                                    }
                                  }
                                }
                              ],
                              "range": [
                                3684,
                                3723
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 191
                                },
                                "start": {
                                  "column": 27,
                                  "line": 189
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
                                      "column": 25,
                                      "line": 189
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 189
                                    }
                                  },
                                  "range": [
                                    3674,
                                    3682
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      3676,
                                      3682
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 189
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 189
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3669,
                                  3682
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 189
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 189
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 191
                              },
                              "start": {
                                "column": 11,
                                "line": 189
                              }
                            }
                          },
                          "range": [
                            3665,
                            3723
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 191
                            },
                            "start": {
                              "column": 8,
                              "line": 189
                            }
                          }
                        }
                      ],
                      "range": [
                        3593,
                        3729
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 192
                        },
                        "start": {
                          "column": 9,
                          "line": 185
                        }
                      }
                    },
                    "range": [
                      3588,
                      3729
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 192
                      },
                      "start": {
                        "column": 4,
                        "line": 185
                      }
                    }
                  }
                ],
                "range": [
                  3546,
                  3731
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 193
                  },
                  "start": {
                    "column": 26,
                    "line": 181
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineProps",
              "optional": false,
              "range": [
                3530,
                3541
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 181
                },
                "start": {
                  "column": 10,
                  "line": 181
                }
              }
            },
            "optional": false,
            "range": [
              3530,
              3732
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 193
              },
              "start": {
                "column": 10,
                "line": 181
              }
            }
          },
          "range": [
            3524,
            3732
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 193
            },
            "start": {
              "column": 4,
              "line": 181
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3520,
        3733
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 193
        },
        "start": {
          "column": 0,
          "line": 181
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
            "name": "p12",
            "optional": false,
            "range": [
              3734,
              3737
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 194
              },
              "start": {
                "column": 0,
                "line": 194
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              3738,
              3741
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 194
              },
              "start": {
                "column": 4,
                "line": 194
              }
            }
          },
          "range": [
            3734,
            3741
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 194
            },
            "start": {
              "column": 0,
              "line": 194
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p12",
              "optional": false,
              "range": [
                3744,
                3747
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 194
                },
                "start": {
                  "column": 10,
                  "line": 194
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                3748,
                3751
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 194
                },
                "start": {
                  "column": 14,
                  "line": 194
                }
              }
            },
            "range": [
              3744,
              3751
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 194
              },
              "start": {
                "column": 10,
                "line": 194
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3754,
              3755
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 194
              },
              "start": {
                "column": 20,
                "line": 194
              }
            }
          },
          "range": [
            3744,
            3755
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 194
            },
            "start": {
              "column": 10,
              "line": 194
            }
          }
        },
        "range": [
          3734,
          3755
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 194
          },
          "start": {
            "column": 0,
            "line": 194
          }
        }
      },
      "range": [
        3734,
        3756
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 194
        },
        "start": {
          "column": 0,
          "line": 194
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
            "name": "p12",
            "optional": false,
            "range": [
              3757,
              3760
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 195
              },
              "start": {
                "column": 0,
                "line": 195
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              3761,
              3764
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 195
              },
              "start": {
                "column": 4,
                "line": 195
              }
            }
          },
          "range": [
            3757,
            3764
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 195
            },
            "start": {
              "column": 0,
              "line": 195
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p12",
              "optional": false,
              "range": [
                3767,
                3770
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 195
                },
                "start": {
                  "column": 10,
                  "line": 195
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                3771,
                3774
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 195
                },
                "start": {
                  "column": 14,
                  "line": 195
                }
              }
            },
            "range": [
              3767,
              3774
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 195
              },
              "start": {
                "column": 10,
                "line": 195
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              3777,
              3778
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 195
              },
              "start": {
                "column": 20,
                "line": 195
              }
            }
          },
          "range": [
            3767,
            3778
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 195
            },
            "start": {
              "column": 10,
              "line": 195
            }
          }
        },
        "range": [
          3757,
          3778
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 195
          },
          "start": {
            "column": 0,
            "line": 195
          }
        }
      },
      "range": [
        3757,
        3779
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 195
        },
        "start": {
          "column": 0,
          "line": 195
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Accessors",
        "optional": false,
        "range": [
          3828,
          3837
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 199
          },
          "start": {
            "column": 5,
            "line": 199
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3857,
                3858
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 199
                },
                "start": {
                  "column": 34,
                  "line": 199
                }
              }
            },
            "range": [
              3857,
              3858
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 199
              },
              "start": {
                "column": 34,
                "line": 199
              }
            }
          },
          "range": [
            3851,
            3858
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 199
            },
            "start": {
              "column": 28,
              "line": 199
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            3846,
            3847
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 199
            },
            "start": {
              "column": 23,
              "line": 199
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 199
                  },
                  "start": {
                    "column": 42,
                    "line": 199
                  }
                },
                "range": [
                  3865,
                  3872
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3870,
                        3871
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 199
                        },
                        "start": {
                          "column": 47,
                          "line": 199
                        }
                      }
                    },
                    "range": [
                      3870,
                      3871
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 199
                      },
                      "start": {
                        "column": 47,
                        "line": 199
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        3868,
                        3869
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 199
                        },
                        "start": {
                          "column": 45,
                          "line": 199
                        }
                      }
                    },
                    "range": [
                      3868,
                      3869
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 199
                      },
                      "start": {
                        "column": 45,
                        "line": 199
                      }
                    }
                  },
                  "range": [
                    3868,
                    3872
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 199
                    },
                    "start": {
                      "column": 45,
                      "line": 199
                    }
                  }
                }
              },
              "range": [
                3862,
                3872
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 199
                },
                "start": {
                  "column": 39,
                  "line": 199
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3884,
                  3890
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          3887,
                          3888
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 199
                          },
                          "start": {
                            "column": 64,
                            "line": 199
                          }
                        }
                      },
                      "range": [
                        3887,
                        3888
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 199
                        },
                        "start": {
                          "column": 64,
                          "line": 199
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3885,
                          3886
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 199
                          },
                          "start": {
                            "column": 62,
                            "line": 199
                          }
                        }
                      },
                      "range": [
                        3885,
                        3886
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 199
                        },
                        "start": {
                          "column": 62,
                          "line": 199
                        }
                      }
                    },
                    "range": [
                      3885,
                      3889
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 199
                      },
                      "start": {
                        "column": 62,
                        "line": 199
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 199
                  },
                  "start": {
                    "column": 61,
                    "line": 199
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Computed",
                "optional": false,
                "range": [
                  3876,
                  3884
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 199
                  },
                  "start": {
                    "column": 53,
                    "line": 199
                  }
                }
              },
              "range": [
                3876,
                3890
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 199
                },
                "start": {
                  "column": 53,
                  "line": 199
                }
              }
            }
          ],
          "range": [
            3861,
            3890
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 199
            },
            "start": {
              "column": 38,
              "line": 199
            }
          }
        },
        "range": [
          3843,
          3892
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 199
          },
          "start": {
            "column": 20,
            "line": 199
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 199
          },
          "start": {
            "column": 14,
            "line": 199
          }
        },
        "range": [
          3837,
          3840
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3838,
                3839
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 199
                },
                "start": {
                  "column": 15,
                  "line": 199
                }
              }
            },
            "out": false,
            "range": [
              3838,
              3839
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 199
              },
              "start": {
                "column": 15,
                "line": 199
              }
            }
          }
        ]
      },
      "range": [
        3823,
        3893
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 199
        },
        "start": {
          "column": 0,
          "line": 199
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "range": [
          3900,
          3910
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 201
          },
          "start": {
            "column": 5,
            "line": 201
          }
        }
      },
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
                      "column": 33,
                      "line": 201
                    },
                    "start": {
                      "column": 25,
                      "line": 201
                    }
                  },
                  "range": [
                    3920,
                    3928
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      3922,
                      3928
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 201
                      },
                      "start": {
                        "column": 27,
                        "line": 201
                      }
                    }
                  }
                },
                "range": [
                  3919,
                  3928
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 201
                  },
                  "start": {
                    "column": 24,
                    "line": 201
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
                  "column": 37,
                  "line": 201
                },
                "start": {
                  "column": 34,
                  "line": 201
                }
              },
              "range": [
                3929,
                3932
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3931,
                    3932
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 201
                    },
                    "start": {
                      "column": 36,
                      "line": 201
                    }
                  }
                },
                "range": [
                  3931,
                  3932
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 201
                  },
                  "start": {
                    "column": 36,
                    "line": 201
                  }
                }
              }
            },
            "range": [
              3918,
              3932
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 201
              },
              "start": {
                "column": 23,
                "line": 201
              }
            }
          }
        ],
        "range": [
          3916,
          3934
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 201
          },
          "start": {
            "column": 21,
            "line": 201
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 201
          },
          "start": {
            "column": 15,
            "line": 201
          }
        },
        "range": [
          3910,
          3913
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3911,
                3912
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 201
                },
                "start": {
                  "column": 16,
                  "line": 201
                }
              }
            },
            "out": false,
            "range": [
              3911,
              3912
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 201
              },
              "start": {
                "column": 16,
                "line": 201
              }
            }
          }
        ]
      },
      "range": [
        3895,
        3934
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 201
        },
        "start": {
          "column": 0,
          "line": 201
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "range": [
          3941,
          3949
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 203
          },
          "start": {
            "column": 5,
            "line": 203
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                3961,
                3964
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 204
                },
                "start": {
                  "column": 4,
                  "line": 204
                }
              }
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 204
                },
                "start": {
                  "column": 10,
                  "line": 204
                }
              },
              "range": [
                3967,
                3970
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3969,
                    3970
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 204
                    },
                    "start": {
                      "column": 12,
                      "line": 204
                    }
                  }
                },
                "range": [
                  3969,
                  3970
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 204
                  },
                  "start": {
                    "column": 12,
                    "line": 204
                  }
                }
              }
            },
            "static": false,
            "range": [
              3961,
              3971
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 204
              },
              "start": {
                "column": 4,
                "line": 204
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "range": [
                3976,
                3979
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 205
                },
                "start": {
                  "column": 4,
                  "line": 205
                }
              }
            },
            "kind": "method",
            "optional": true,
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
                      "column": 17,
                      "line": 205
                    },
                    "start": {
                      "column": 14,
                      "line": 205
                    }
                  },
                  "range": [
                    3986,
                    3989
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        3988,
                        3989
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 205
                        },
                        "start": {
                          "column": 16,
                          "line": 205
                        }
                      }
                    },
                    "range": [
                      3988,
                      3989
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 205
                      },
                      "start": {
                        "column": 16,
                        "line": 205
                      }
                    }
                  }
                },
                "range": [
                  3981,
                  3989
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 205
                  },
                  "start": {
                    "column": 9,
                    "line": 205
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 205
                },
                "start": {
                  "column": 18,
                  "line": 205
                }
              },
              "range": [
                3990,
                3996
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  3992,
                  3996
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 205
                  },
                  "start": {
                    "column": 20,
                    "line": 205
                  }
                }
              }
            },
            "static": false,
            "range": [
              3976,
              3997
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 205
              },
              "start": {
                "column": 4,
                "line": 205
              }
            }
          }
        ],
        "range": [
          3955,
          3999
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 206
          },
          "start": {
            "column": 19,
            "line": 203
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 203
          },
          "start": {
            "column": 13,
            "line": 203
          }
        },
        "range": [
          3949,
          3952
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3950,
                3951
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 203
                },
                "start": {
                  "column": 14,
                  "line": 203
                }
              }
            },
            "out": false,
            "range": [
              3950,
              3951
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 203
              },
              "start": {
                "column": 14,
                "line": 203
              }
            }
          }
        ]
      },
      "range": [
        3936,
        3999
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 206
        },
        "start": {
          "column": 0,
          "line": 203
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VueOptions",
        "optional": false,
        "range": [
          4006,
          4016
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 208
          },
          "start": {
            "column": 5,
            "line": 208
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                4036,
                4047
              ],
              "params": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          4037,
                          4038
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 208
                          },
                          "start": {
                            "column": 36,
                            "line": 208
                          }
                        }
                      },
                      "range": [
                        4037,
                        4038
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 208
                        },
                        "start": {
                          "column": 36,
                          "line": 208
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          4041,
                          4042
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 208
                          },
                          "start": {
                            "column": 40,
                            "line": 208
                          }
                        }
                      },
                      "range": [
                        4041,
                        4042
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 208
                        },
                        "start": {
                          "column": 40,
                          "line": 208
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          4045,
                          4046
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 208
                          },
                          "start": {
                            "column": 44,
                            "line": 208
                          }
                        }
                      },
                      "range": [
                        4045,
                        4046
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 208
                        },
                        "start": {
                          "column": 44,
                          "line": 208
                        }
                      }
                    }
                  ],
                  "range": [
                    4037,
                    4046
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 208
                    },
                    "start": {
                      "column": 36,
                      "line": 208
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 208
                },
                "start": {
                  "column": 35,
                  "line": 208
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "range": [
                4028,
                4036
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 208
                },
                "start": {
                  "column": 27,
                  "line": 208
                }
              }
            },
            "range": [
              4028,
              4047
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 208
              },
              "start": {
                "column": 27,
                "line": 208
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    4056,
                    4060
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 209
                    },
                    "start": {
                      "column": 4,
                      "line": 209
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 209
                    },
                    "start": {
                      "column": 9,
                      "line": 209
                    }
                  },
                  "range": [
                    4061,
                    4076
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            4063,
                            4064
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 209
                            },
                            "start": {
                              "column": 11,
                              "line": 209
                            }
                          }
                        },
                        "range": [
                          4063,
                          4064
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 209
                          },
                          "start": {
                            "column": 11,
                            "line": 209
                          }
                        }
                      },
                      {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 209
                            },
                            "start": {
                              "column": 19,
                              "line": 209
                            }
                          },
                          "range": [
                            4071,
                            4075
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "range": [
                                4074,
                                4075
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 209
                                },
                                "start": {
                                  "column": 22,
                                  "line": 209
                                }
                              }
                            },
                            "range": [
                              4074,
                              4075
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 209
                              },
                              "start": {
                                "column": 22,
                                "line": 209
                              }
                            }
                          }
                        },
                        "range": [
                          4068,
                          4075
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 209
                          },
                          "start": {
                            "column": 16,
                            "line": 209
                          }
                        }
                      }
                    ],
                    "range": [
                      4063,
                      4076
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 209
                      },
                      "start": {
                        "column": 11,
                        "line": 209
                      }
                    }
                  }
                },
                "range": [
                  4056,
                  4077
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 209
                  },
                  "start": {
                    "column": 4,
                    "line": 209
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "range": [
                    4082,
                    4089
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 210
                    },
                    "start": {
                      "column": 4,
                      "line": 210
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 210
                    },
                    "start": {
                      "column": 12,
                      "line": 210
                    }
                  },
                  "range": [
                    4090,
                    4093
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        4092,
                        4093
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 210
                        },
                        "start": {
                          "column": 14,
                          "line": 210
                        }
                      }
                    },
                    "range": [
                      4092,
                      4093
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 210
                      },
                      "start": {
                        "column": 14,
                        "line": 210
                      }
                    }
                  }
                },
                "range": [
                  4082,
                  4094
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 210
                  },
                  "start": {
                    "column": 4,
                    "line": 210
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "range": [
                    4099,
                    4107
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 211
                    },
                    "start": {
                      "column": 4,
                      "line": 211
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 211
                    },
                    "start": {
                      "column": 13,
                      "line": 211
                    }
                  },
                  "range": [
                    4108,
                    4122
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4119,
                        4122
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              4120,
                              4121
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 211
                              },
                              "start": {
                                "column": 25,
                                "line": 211
                              }
                            }
                          },
                          "range": [
                            4120,
                            4121
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 211
                            },
                            "start": {
                              "column": 25,
                              "line": 211
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 211
                        },
                        "start": {
                          "column": 24,
                          "line": 211
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Accessors",
                      "optional": false,
                      "range": [
                        4110,
                        4119
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 211
                        },
                        "start": {
                          "column": 15,
                          "line": 211
                        }
                      }
                    },
                    "range": [
                      4110,
                      4122
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 211
                      },
                      "start": {
                        "column": 15,
                        "line": 211
                      }
                    }
                  }
                },
                "range": [
                  4099,
                  4123
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 211
                  },
                  "start": {
                    "column": 4,
                    "line": 211
                  }
                }
              }
            ],
            "range": [
              4050,
              4125
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 212
              },
              "start": {
                "column": 49,
                "line": 208
              }
            }
          }
        ],
        "range": [
          4028,
          4125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 212
          },
          "start": {
            "column": 27,
            "line": 208
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 208
          },
          "start": {
            "column": 15,
            "line": 208
          }
        },
        "range": [
          4016,
          4025
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                4017,
                4018
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 208
                },
                "start": {
                  "column": 16,
                  "line": 208
                }
              }
            },
            "out": false,
            "range": [
              4017,
              4018
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 208
              },
              "start": {
                "column": 16,
                "line": 208
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                4020,
                4021
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 208
                },
                "start": {
                  "column": 19,
                  "line": 208
                }
              }
            },
            "out": false,
            "range": [
              4020,
              4021
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 208
              },
              "start": {
                "column": 19,
                "line": 208
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                4023,
                4024
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 208
                },
                "start": {
                  "column": 22,
                  "line": 208
                }
              }
            },
            "out": false,
            "range": [
              4023,
              4024
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 208
              },
              "start": {
                "column": 22,
                "line": 208
              }
            }
          }
        ]
      },
      "range": [
        4001,
        4125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 212
        },
        "start": {
          "column": 0,
          "line": 208
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
            "name": "Vue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 75,
                  "line": 214
                },
                "start": {
                  "column": 17,
                  "line": 214
                }
              },
              "range": [
                4144,
                4202
              ],
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 214
                        },
                        "start": {
                          "column": 40,
                          "line": 214
                        }
                      },
                      "range": [
                        4167,
                        4188
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            4179,
                            4188
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "range": [
                                  4180,
                                  4181
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 214
                                  },
                                  "start": {
                                    "column": 53,
                                    "line": 214
                                  }
                                }
                              },
                              "range": [
                                4180,
                                4181
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 214
                                },
                                "start": {
                                  "column": 53,
                                  "line": 214
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  4183,
                                  4184
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 214
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 214
                                  }
                                }
                              },
                              "range": [
                                4183,
                                4184
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 214
                                },
                                "start": {
                                  "column": 56,
                                  "line": 214
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "range": [
                                  4186,
                                  4187
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 214
                                  },
                                  "start": {
                                    "column": 59,
                                    "line": 214
                                  }
                                }
                              },
                              "range": [
                                4186,
                                4187
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 214
                                },
                                "start": {
                                  "column": 59,
                                  "line": 214
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 214
                            },
                            "start": {
                              "column": 52,
                              "line": 214
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "VueOptions",
                          "optional": false,
                          "range": [
                            4169,
                            4179
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 214
                            },
                            "start": {
                              "column": 42,
                              "line": 214
                            }
                          }
                        },
                        "range": [
                          4169,
                          4188
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 214
                          },
                          "start": {
                            "column": 42,
                            "line": 214
                          }
                        }
                      }
                    },
                    "range": [
                      4160,
                      4188
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 214
                      },
                      "start": {
                        "column": 33,
                        "line": 214
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 214
                    },
                    "start": {
                      "column": 63,
                      "line": 214
                    }
                  },
                  "range": [
                    4190,
                    4202
                  ],
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            4193,
                            4194
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 214
                            },
                            "start": {
                              "column": 66,
                              "line": 214
                            }
                          }
                        },
                        "range": [
                          4193,
                          4194
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 214
                          },
                          "start": {
                            "column": 66,
                            "line": 214
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "range": [
                            4197,
                            4198
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 214
                            },
                            "start": {
                              "column": 70,
                              "line": 214
                            }
                          }
                        },
                        "range": [
                          4197,
                          4198
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 214
                          },
                          "start": {
                            "column": 70,
                            "line": 214
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            4201,
                            4202
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 214
                            },
                            "start": {
                              "column": 74,
                              "line": 214
                            }
                          }
                        },
                        "range": [
                          4201,
                          4202
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 214
                          },
                          "start": {
                            "column": 74,
                            "line": 214
                          }
                        }
                      }
                    ],
                    "range": [
                      4193,
                      4202
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 214
                      },
                      "start": {
                        "column": 66,
                        "line": 214
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 214
                    },
                    "start": {
                      "column": 23,
                      "line": 214
                    }
                  },
                  "range": [
                    4150,
                    4159
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          4151,
                          4152
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 214
                          },
                          "start": {
                            "column": 24,
                            "line": 214
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        4151,
                        4152
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 214
                        },
                        "start": {
                          "column": 24,
                          "line": 214
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          4154,
                          4155
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 214
                          },
                          "start": {
                            "column": 27,
                            "line": 214
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        4154,
                        4155
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 214
                        },
                        "start": {
                          "column": 27,
                          "line": 214
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          4157,
                          4158
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 214
                          },
                          "start": {
                            "column": 30,
                            "line": 214
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        4157,
                        4158
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 214
                        },
                        "start": {
                          "column": 30,
                          "line": 214
                        }
                      }
                    }
                  ]
                },
                "range": [
                  4146,
                  4202
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 214
                  },
                  "start": {
                    "column": 19,
                    "line": 214
                  }
                }
              }
            },
            "range": [
              4141,
              4202
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 214
              },
              "start": {
                "column": 14,
                "line": 214
              }
            }
          },
          "init": null,
          "range": [
            4141,
            4202
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 214
            },
            "start": {
              "column": 14,
              "line": 214
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        4127,
        4203
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 214
        },
        "start": {
          "column": 0,
          "line": 214
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
            "name": "vue",
            "optional": false,
            "range": [
              4209,
              4212
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 216
              },
              "start": {
                "column": 4,
                "line": 216
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "range": [
                        4229,
                        4233
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 217
                        },
                        "start": {
                          "column": 4,
                          "line": 217
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                4244,
                                4245
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 217
                                },
                                "start": {
                                  "column": 19,
                                  "line": 217
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
                                4247,
                                4248
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 217
                                },
                                "start": {
                                  "column": 22,
                                  "line": 217
                                }
                              }
                            },
                            "range": [
                              4244,
                              4248
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 217
                              },
                              "start": {
                                "column": 19,
                                "line": 217
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                4250,
                                4251
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 217
                                },
                                "start": {
                                  "column": 25,
                                  "line": 217
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                4253,
                                4254
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 217
                                },
                                "start": {
                                  "column": 28,
                                  "line": 217
                                }
                              }
                            },
                            "range": [
                              4250,
                              4254
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 217
                              },
                              "start": {
                                "column": 25,
                                "line": 217
                              }
                            }
                          }
                        ],
                        "range": [
                          4242,
                          4256
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 217
                          },
                          "start": {
                            "column": 17,
                            "line": 217
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        4235,
                        4257
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 217
                        },
                        "start": {
                          "column": 10,
                          "line": 217
                        }
                      }
                    },
                    "range": [
                      4229,
                      4257
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 217
                      },
                      "start": {
                        "column": 4,
                        "line": 217
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "range": [
                        4263,
                        4270
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 218
                        },
                        "start": {
                          "column": 4,
                          "line": 218
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "range": [
                              4282,
                              4283
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 219
                              },
                              "start": {
                                "column": 8,
                                "line": 219
                              }
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              4283,
                              4333
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        4316,
                                        4320
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 220
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 220
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        4321,
                                        4322
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 220
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 220
                                        }
                                      }
                                    },
                                    "range": [
                                      4316,
                                      4322
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 220
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 220
                                      }
                                    }
                                  },
                                  "range": [
                                    4309,
                                    4323
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 220
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 220
                                    }
                                  }
                                }
                              ],
                              "range": [
                                4295,
                                4333
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 221
                                },
                                "start": {
                                  "column": 21,
                                  "line": 219
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
                                      "column": 19,
                                      "line": 219
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 219
                                    }
                                  },
                                  "range": [
                                    4285,
                                    4293
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      4287,
                                      4293
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 219
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 219
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  4284,
                                  4293
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 219
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 219
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 221
                              },
                              "start": {
                                "column": 9,
                                "line": 219
                              }
                            }
                          },
                          "range": [
                            4282,
                            4333
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 221
                            },
                            "start": {
                              "column": 8,
                              "line": 219
                            }
                          }
                        }
                      ],
                      "range": [
                        4272,
                        4339
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 222
                        },
                        "start": {
                          "column": 13,
                          "line": 218
                        }
                      }
                    },
                    "range": [
                      4263,
                      4339
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 222
                      },
                      "start": {
                        "column": 4,
                        "line": 218
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "computed",
                      "optional": false,
                      "range": [
                        4345,
                        4353
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 223
                        },
                        "start": {
                          "column": 4,
                          "line": 223
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              4365,
                              4369
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 224
                              },
                              "start": {
                                "column": 8,
                                "line": 224
                              }
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              4369,
                              4418
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        4401,
                                        4405
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 225
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 225
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        4406,
                                        4407
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 225
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 225
                                        }
                                      }
                                    },
                                    "range": [
                                      4401,
                                      4407
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 225
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 225
                                      }
                                    }
                                  },
                                  "range": [
                                    4394,
                                    4408
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 225
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 225
                                    }
                                  }
                                }
                              ],
                              "range": [
                                4380,
                                4418
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 226
                                },
                                "start": {
                                  "column": 23,
                                  "line": 224
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
                                  "column": 22,
                                  "line": 224
                                },
                                "start": {
                                  "column": 14,
                                  "line": 224
                                }
                              },
                              "range": [
                                4371,
                                4379
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  4373,
                                  4379
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 224
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 224
                                  }
                                }
                              }
                            },
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 226
                              },
                              "start": {
                                "column": 12,
                                "line": 224
                              }
                            }
                          },
                          "range": [
                            4365,
                            4418
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 226
                            },
                            "start": {
                              "column": 8,
                              "line": 224
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hello",
                            "optional": false,
                            "range": [
                              4428,
                              4433
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 227
                              },
                              "start": {
                                "column": 8,
                                "line": 227
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "get",
                                  "optional": false,
                                  "range": [
                                    4449,
                                    4452
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 228
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 228
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": true,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "FunctionExpression",
                                  "range": [
                                    4452,
                                    4499
                                  ],
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "raw": "\"hi\"",
                                          "value": "hi",
                                          "range": [
                                            4480,
                                            4484
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 229
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 229
                                            }
                                          }
                                        },
                                        "range": [
                                          4473,
                                          4485
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 229
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 229
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      4455,
                                      4499
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 230
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 228
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
                                      "line": 230
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 228
                                    }
                                  }
                                },
                                "range": [
                                  4449,
                                  4499
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 230
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 228
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "range": [
                                    4513,
                                    4516
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 231
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 231
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": true,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "FunctionExpression",
                                  "range": [
                                    4516,
                                    4547
                                  ],
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "range": [
                                      4532,
                                      4547
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 232
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 231
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
                                            "column": 29,
                                            "line": 231
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 231
                                          }
                                        },
                                        "range": [
                                          4522,
                                          4530
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "range": [
                                            4524,
                                            4530
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 231
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 231
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        4517,
                                        4530
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 231
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 231
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 232
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 231
                                    }
                                  }
                                },
                                "range": [
                                  4513,
                                  4547
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 232
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 231
                                  }
                                }
                              }
                            ],
                            "range": [
                              4435,
                              4557
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 233
                              },
                              "start": {
                                "column": 15,
                                "line": 227
                              }
                            }
                          },
                          "range": [
                            4428,
                            4557
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 233
                            },
                            "start": {
                              "column": 8,
                              "line": 227
                            }
                          }
                        }
                      ],
                      "range": [
                        4355,
                        4563
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 234
                        },
                        "start": {
                          "column": 14,
                          "line": 223
                        }
                      }
                    },
                    "range": [
                      4345,
                      4563
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 234
                      },
                      "start": {
                        "column": 4,
                        "line": 223
                      }
                    }
                  }
                ],
                "range": [
                  4223,
                  4565
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 235
                  },
                  "start": {
                    "column": 18,
                    "line": 216
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Vue",
              "optional": false,
              "range": [
                4219,
                4222
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 216
                },
                "start": {
                  "column": 14,
                  "line": 216
                }
              }
            },
            "range": [
              4215,
              4566
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 235
              },
              "start": {
                "column": 10,
                "line": 216
              }
            }
          },
          "range": [
            4209,
            4566
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 235
            },
            "start": {
              "column": 4,
              "line": 216
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        4205,
        4567
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 235
        },
        "start": {
          "column": 0,
          "line": 216
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "vue",
        "optional": false,
        "range": [
          4569,
          4572
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 237
          },
          "start": {
            "column": 0,
            "line": 237
          }
        }
      },
      "range": [
        4569,
        4573
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 237
        },
        "start": {
          "column": 0,
          "line": 237
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
          "name": "vue",
          "optional": false,
          "range": [
            4574,
            4577
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 238
            },
            "start": {
              "column": 0,
              "line": 238
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            4578,
            4579
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 238
            },
            "start": {
              "column": 4,
              "line": 238
            }
          }
        },
        "range": [
          4574,
          4579
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 238
          },
          "start": {
            "column": 0,
            "line": 238
          }
        }
      },
      "range": [
        4574,
        4580
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 238
        },
        "start": {
          "column": 0,
          "line": 238
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"abc\"",
            "value": "abc",
            "range": [
              4587,
              4592
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 239
              },
              "start": {
                "column": 6,
                "line": 239
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
            "name": "vue",
            "optional": false,
            "range": [
              4581,
              4584
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 239
              },
              "start": {
                "column": 0,
                "line": 239
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              4585,
              4586
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 239
              },
              "start": {
                "column": 4,
                "line": 239
              }
            }
          },
          "range": [
            4581,
            4586
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 239
            },
            "start": {
              "column": 0,
              "line": 239
            }
          }
        },
        "optional": false,
        "range": [
          4581,
          4593
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 239
          },
          "start": {
            "column": 0,
            "line": 239
          }
        }
      },
      "range": [
        4581,
        4594
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 239
        },
        "start": {
          "column": 0,
          "line": 239
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
          "name": "vue",
          "optional": false,
          "range": [
            4595,
            4598
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 240
            },
            "start": {
              "column": 0,
              "line": 240
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
            4599,
            4603
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 240
            },
            "start": {
              "column": 4,
              "line": 240
            }
          }
        },
        "range": [
          4595,
          4603
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 240
          },
          "start": {
            "column": 0,
            "line": 240
          }
        }
      },
      "range": [
        4595,
        4604
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 240
        },
        "start": {
          "column": 0,
          "line": 240
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
          "name": "vue",
          "optional": false,
          "range": [
            4605,
            4608
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 241
            },
            "start": {
              "column": 0,
              "line": 241
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hello",
          "optional": false,
          "range": [
            4609,
            4614
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 241
            },
            "start": {
              "column": 4,
              "line": 241
            }
          }
        },
        "range": [
          4605,
          4614
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 241
          },
          "start": {
            "column": 0,
            "line": 241
          }
        }
      },
      "range": [
        4605,
        4615
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 241
        },
        "start": {
          "column": 0,
          "line": 241
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 242
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
