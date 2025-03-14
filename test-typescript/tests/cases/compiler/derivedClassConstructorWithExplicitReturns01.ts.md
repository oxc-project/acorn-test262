__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    607
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          256
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
              "name": "cProp",
              "optional": false,
              "range": [
                14,
                19
              ],
              "loc": {
                "end": {
                  "column": 9,
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
              "raw": "10",
              "value": 10,
              "range": [
                22,
                24
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              25
            ],
            "loc": {
              "end": {
                "column": 15,
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
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                31,
                34
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                34,
                72
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"this never gets used.\"",
                      "value": "this never gets used.",
                      "range": [
                        46,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      39,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
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
                  37,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
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
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              }
            },
            "range": [
              31,
              72
            ],
            "loc": {
              "end": {
                "column": 45,
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
              "range": [
                78,
                89
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                89,
                254
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
                            "name": "cProp",
                            "optional": false,
                            "range": [
                              136,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
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
                            "name": "value",
                            "optional": false,
                            "range": [
                              143,
                              148
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            136,
                            148
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              162,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 9
                              },
                              "start": {
                                "column": 12,
                                "line": 9
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
                              165,
                              238
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "raw": "\"well this looks kinda C-ish.\"",
                                    "value": "well this looks kinda C-ish.",
                                    "range": [
                                      193,
                                      223
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    186,
                                    224
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 10
                                    }
                                  }
                                }
                              ],
                              "range": [
                                168,
                                238
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 11
                                },
                                "start": {
                                  "column": 18,
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
                                "line": 11
                              },
                              "start": {
                                "column": 15,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            162,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        122,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      115,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  105,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 31,
                    "line": 6
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
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    },
                    "range": [
                      95,
                      103
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        97,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    90,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              78,
              254
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
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
            "line": 14
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
        256
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
          276,
          607
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
              "name": "dProp",
              "optional": false,
              "range": [
                282,
                287
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "ThisExpression",
                "range": [
                  296,
                  300
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
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                290,
                300
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "range": [
              282,
              301
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                307,
                318
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                318,
                605
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            344,
                            345
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          338,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        338,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      338,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          594,
                          598
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 31
                          },
                          "start": {
                            "column": 19,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        587,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 31
                        },
                        "start": {
                          "column": 12,
                          "line": 31
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Literal",
                            "raw": "\"You win!\"",
                            "value": "You win!",
                            "range": [
                              396,
                              406
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
                            396,
                            406
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
                                  "name": "cProp",
                                  "optional": false,
                                  "range": [
                                    444,
                                    449
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 25
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
                                    451,
                                    452
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 25
                                    }
                                  }
                                },
                                "range": [
                                  444,
                                  452
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 25
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dProp",
                                  "optional": false,
                                  "range": [
                                    470,
                                    475
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 26
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
                                    "type": "ThisExpression",
                                    "range": [
                                      483,
                                      487
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    477,
                                    487
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  470,
                                  487
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 26
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "range": [
                                    505,
                                    508
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 27
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
                                    508,
                                    536
                                  ],
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "raw": "\"You win!!!!!\"",
                                          "value": "You win!!!!!",
                                          "range": [
                                            520,
                                            534
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 45,
                                              "line": 27
                                            },
                                            "start": {
                                              "column": 31,
                                              "line": 27
                                            }
                                          }
                                        },
                                        "range": [
                                          513,
                                          534
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 45,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 27
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      511,
                                      536
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 27
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
                                      "column": 47,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 27
                                    }
                                  }
                                },
                                "range": [
                                  505,
                                  536
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 27
                                  }
                                }
                              }
                            ],
                            "range": [
                              426,
                              550
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 28
                              },
                              "start": {
                                "column": 19,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            419,
                            551
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 28
                            },
                            "start": {
                              "column": 12,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        382,
                        561
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 29
                        },
                        "start": {
                          "column": 33,
                          "line": 22
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
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
                              361,
                              365
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 22
                              },
                              "start": {
                                "column": 12,
                                "line": 22
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
                              366,
                              372
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 22
                              },
                              "start": {
                                "column": 17,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            361,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          361,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0.5",
                        "value": 0.5,
                        "range": [
                          377,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 22
                          },
                          "start": {
                            "column": 28,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        361,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      357,
                      599
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  328,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      319,
                      320
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
                  "right": {
                    "type": "Literal",
                    "raw": "100",
                    "value": 100,
                    "range": [
                      323,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 20,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    319,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "range": [
              307,
              605
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 19
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
            "column": 18,
            "line": 16
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
          264,
          265
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          274,
          275
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 16
          }
        }
      },
      "range": [
        258,
        607
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
