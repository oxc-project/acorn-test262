__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    317
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          15
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
              "name": "x",
              "optional": false,
              "range": [
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
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
        "name": "Bar",
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
        15
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 1
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
          38,
          43
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
              "name": "y",
              "optional": false,
              "range": [
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 24,
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
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            }
          }
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
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          22,
          25
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          34,
          37
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "range": [
        16,
        43
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          67,
          225
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "range": [
                73,
                77
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                77,
                169
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                              111,
                              116
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "NewExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "range": [
                                    123,
                                    126
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  119,
                                  126
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              118,
                              127
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 6
                              },
                              "start": {
                                "column": 19,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            111,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
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
                            "name": "done",
                            "optional": false,
                            "range": [
                              141,
                              145
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              147,
                              152
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 18,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            141,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        97,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      90,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  80,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
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
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              73,
              169
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 4
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
                "name": "Symbol",
                "optional": false,
                "range": [
                  176,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  183,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              },
              "range": [
                176,
                191
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
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
                192,
                223
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        212,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      205,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  195,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 24,
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
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            },
            "range": [
              175,
              223
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
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
            "line": 14
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooArrayIterator",
        "optional": false,
        "range": [
          50,
          66
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        44,
        225
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          284,
          287
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 16
          },
          "start": {
            "column": 57,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "range": [
          236,
          239
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        245,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 18,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          253,
                          256
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 16
                          },
                          "start": {
                            "column": 26,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        249,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 22,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      245,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 18,
                        "line": 16
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  244,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    259,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 32,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          268,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 16
                          },
                          "start": {
                            "column": 41,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        264,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 16
                        },
                        "start": {
                          "column": 37,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    263,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 16
                    },
                    "start": {
                      "column": 36,
                      "line": 16
                    }
                  }
                },
                "range": [
                  259,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              243,
              273
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 16
              },
              "start": {
                "column": 16,
                "line": 16
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 16
              },
              "start": {
                "column": 46,
                "line": 16
              }
            },
            "range": [
              273,
              282
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      275,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 16
                      },
                      "start": {
                        "column": 48,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    275,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 16
                    },
                    "start": {
                      "column": 48,
                      "line": 16
                    }
                  }
                },
                "range": [
                  275,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 16
                  },
                  "start": {
                    "column": 48,
                    "line": 16
                  }
                }
              },
              "range": [
                275,
                282
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 16
                },
                "start": {
                  "column": 48,
                  "line": 16
                }
              }
            }
          },
          "range": [
            240,
            282
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        }
      ],
      "range": [
        227,
        287
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "FooArrayIterator",
                "optional": false,
                "range": [
                  299,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "range": [
                295,
                315
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              }
            },
            "range": [
              292,
              315
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "range": [
            288,
            291
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          288,
          316
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        288,
        317
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 29,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
