__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    547
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          36,
          396
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                42,
                53
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                53,
                246
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
                                  214,
                                  218
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 12,
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
                                  219,
                                  220
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                214,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 6
                                },
                                "start": {
                                  "column": 12,
                                  "line": 6
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  223,
                                  224
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 6
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "range": [
                                  228,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                223,
                                229
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 6
                                },
                                "start": {
                                  "column": 21,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              214,
                              229
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            214,
                            230
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
                        }
                      ],
                      "range": [
                        200,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 100,
                          "line": 5
                        }
                      }
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              113,
                              114
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
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              119,
                              128
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 19,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            113,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 13,
                              "line": 5
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              132,
                              133
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 5
                              },
                              "start": {
                                "column": 32,
                                "line": 5
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              138,
                              147
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 5
                              },
                              "start": {
                                "column": 38,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            132,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          113,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 5
                          },
                          "start": {
                            "column": 13,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                153,
                                157
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 5
                                },
                                "start": {
                                  "column": 53,
                                  "line": 5
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
                                158,
                                159
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 5
                                },
                                "start": {
                                  "column": 58,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              153,
                              159
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 5
                              },
                              "start": {
                                "column": 53,
                                "line": 5
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              164,
                              173
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 5
                              },
                              "start": {
                                "column": 64,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            153,
                            173
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 5
                            },
                            "start": {
                              "column": 53,
                              "line": 5
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                177,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 5
                                },
                                "start": {
                                  "column": 77,
                                  "line": 5
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
                                182,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 5
                                },
                                "start": {
                                  "column": 82,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              177,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 5
                              },
                              "start": {
                                "column": 77,
                                "line": 5
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              188,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 97,
                                "line": 5
                              },
                              "start": {
                                "column": 88,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            177,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 5
                            },
                            "start": {
                              "column": 77,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          153,
                          197
                        ],
                        "loc": {
                          "end": {
                            "column": 97,
                            "line": 5
                          },
                          "start": {
                            "column": 53,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        112,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      108,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  98,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 60,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      },
                      "range": [
                        63,
                        66
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            65,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 4
                            },
                            "start": {
                              "column": 27,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          65,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      62,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    54,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          79,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 4
                          },
                          "start": {
                            "column": 41,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          82,
                          83
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          85,
                          86
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 4
                          },
                          "start": {
                            "column": 47,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 4
                        },
                        "start": {
                          "column": 49,
                          "line": 4
                        }
                      },
                      "range": [
                        87,
                        96
                      ],
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                90,
                                91
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 4
                                },
                                "start": {
                                  "column": 52,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              90,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 4
                              },
                              "start": {
                                "column": 52,
                                "line": 4
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
                                92,
                                93
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 4
                                },
                                "start": {
                                  "column": 54,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              92,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 4
                              },
                              "start": {
                                "column": 54,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "range": [
                                94,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 4
                                },
                                "start": {
                                  "column": 56,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              94,
                              95
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 4
                              },
                              "start": {
                                "column": 56,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          89,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 4
                          },
                          "start": {
                            "column": 51,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      78,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 4
                      },
                      "start": {
                        "column": 40,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    68,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 4
                    },
                    "start": {
                      "column": 30,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              42,
              246
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getA",
              "optional": false,
              "range": [
                259,
                263
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
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
                263,
                295
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
                          283,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
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
                          288,
                          289
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
                        283,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      276,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  266,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 10
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
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              252,
              295
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getB",
              "optional": false,
              "range": [
                308,
                312
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
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
                312,
                344
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
                          332,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 15,
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
                          337,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 15
                          },
                          "start": {
                            "column": 20,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        332,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      325,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  315,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 14
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
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              301,
              344
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getC",
              "optional": false,
              "range": [
                357,
                361
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
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
                361,
                394
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
                          381,
                          385
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
                        "name": "c",
                        "optional": false,
                        "range": [
                          386,
                          387
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
                        381,
                        387
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
                      374,
                      388
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
                  364,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
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
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              350,
              394
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          24,
          26
        ],
        "loc": {
          "end": {
            "column": 8,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 3
          }
        },
        "range": [
          26,
          35
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
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              27,
              28
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
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
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              30,
              31
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
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
              "name": "V",
              "optional": false,
              "range": [
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        18,
        396
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          443,
          546
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomethingWithSuperProperties",
              "optional": false,
              "range": [
                456,
                486
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
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
                486,
                544
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TemplateLiteral",
                      "expressions": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              509,
                              513
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 25
                              },
                              "start": {
                                "column": 18,
                                "line": 25
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
                              514,
                              515
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
                            509,
                            515
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 25
                            },
                            "start": {
                              "column": 18,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              519,
                              523
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 25
                              },
                              "start": {
                                "column": 28,
                                "line": 25
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
                              524,
                              525
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 25
                              },
                              "start": {
                                "column": 33,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            519,
                            525
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 25
                            },
                            "start": {
                              "column": 28,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              529,
                              533
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 25
                              },
                              "start": {
                                "column": 38,
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
                              534,
                              535
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 25
                              },
                              "start": {
                                "column": 43,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            529,
                            535
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 25
                            },
                            "start": {
                              "column": 38,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            506,
                            509
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 25
                            },
                            "start": {
                              "column": 15,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          },
                          "range": [
                            515,
                            519
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 25
                            },
                            "start": {
                              "column": 24,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          },
                          "range": [
                            525,
                            529
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 25
                            },
                            "start": {
                              "column": 34,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            535,
                            537
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 25
                            },
                            "start": {
                              "column": 44,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        506,
                        537
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      499,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  489,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 44,
                    "line": 24
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
                  "column": 41,
                  "line": 24
                }
              }
            },
            "range": [
              449,
              544
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 45,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          404,
          406
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 23
          },
          "start": {
            "column": 6,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          415,
          417
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 23
          },
          "start": {
            "column": 17,
            "line": 23
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          417,
          442
        ],
        "params": [
          {
            "type": "TSNumberKeyword",
            "range": [
              418,
              424
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 23
              },
              "start": {
                "column": 20,
                "line": 23
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              426,
              432
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 28,
                "line": 23
              }
            }
          },
          {
            "type": "TSBooleanKeyword",
            "range": [
              434,
              441
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 23
              },
              "start": {
                "column": 36,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 23
          },
          "start": {
            "column": 19,
            "line": 23
          }
        }
      },
      "range": [
        398,
        546
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
