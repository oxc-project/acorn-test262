__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    682
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          391
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                16,
                27
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                27,
                241
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
                                  209,
                                  213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
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
                                  214,
                                  215
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                209,
                                215
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 4
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
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
                                  218,
                                  219
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 4
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "range": [
                                  223,
                                  224
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                218,
                                224
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 4
                                },
                                "start": {
                                  "column": 21,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              209,
                              224
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            209,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
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
                        195,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 100,
                          "line": 3
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
                              108,
                              109
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
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              114,
                              123
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 3
                              },
                              "start": {
                                "column": 19,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            108,
                            123
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 3
                            },
                            "start": {
                              "column": 13,
                              "line": 3
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
                              127,
                              128
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 3
                              },
                              "start": {
                                "column": 32,
                                "line": 3
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              133,
                              142
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 3
                              },
                              "start": {
                                "column": 38,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            127,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 3
                            },
                            "start": {
                              "column": 32,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          108,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 3
                          },
                          "start": {
                            "column": 13,
                            "line": 3
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
                                148,
                                152
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 3
                                },
                                "start": {
                                  "column": 53,
                                  "line": 3
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
                                153,
                                154
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 3
                                },
                                "start": {
                                  "column": 58,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              148,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 3
                              },
                              "start": {
                                "column": 53,
                                "line": 3
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              159,
                              168
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 3
                              },
                              "start": {
                                "column": 64,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            148,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 3
                            },
                            "start": {
                              "column": 53,
                              "line": 3
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
                                172,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 3
                                },
                                "start": {
                                  "column": 77,
                                  "line": 3
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
                                177,
                                178
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 3
                                },
                                "start": {
                                  "column": 82,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              172,
                              178
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 3
                              },
                              "start": {
                                "column": 77,
                                "line": 3
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              183,
                              192
                            ],
                            "loc": {
                              "end": {
                                "column": 97,
                                "line": 3
                              },
                              "start": {
                                "column": 88,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            172,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 3
                            },
                            "start": {
                              "column": 77,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          148,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 97,
                            "line": 3
                          },
                          "start": {
                            "column": 53,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        107,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      103,
                      235
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
                  93,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 81,
                    "line": 2
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
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 25,
                          "line": 2
                        }
                      },
                      "range": [
                        37,
                        45
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          39,
                          45
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 27,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      36,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    28,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
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
                          56,
                          57
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 2
                          },
                          "start": {
                            "column": 44,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          59,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 2
                          },
                          "start": {
                            "column": 47,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          62,
                          63
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 2
                          },
                          "start": {
                            "column": 50,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 2
                        },
                        "start": {
                          "column": 52,
                          "line": 2
                        }
                      },
                      "range": [
                        64,
                        91
                      ],
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              67,
                              73
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 2
                              },
                              "start": {
                                "column": 55,
                                "line": 2
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              75,
                              81
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 2
                              },
                              "start": {
                                "column": 63,
                                "line": 2
                              }
                            }
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "range": [
                              83,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 2
                              },
                              "start": {
                                "column": 71,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "range": [
                          66,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 2
                          },
                          "start": {
                            "column": 54,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      55,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 2
                      },
                      "start": {
                        "column": 43,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    47,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 2
                    },
                    "start": {
                      "column": 35,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              241
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 2
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
                254,
                258
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
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
                258,
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
                          278,
                          282
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
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
                          283,
                          284
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 9
                          },
                          "start": {
                            "column": 20,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        278,
                        284
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      271,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  261,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 8
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
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              247,
              290
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
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
                303,
                307
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                307,
                339
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
                          327,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 13
                          },
                          "start": {
                            "column": 15,
                            "line": 13
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
                          332,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 20,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        327,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      320,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  310,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
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
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              296,
              339
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
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
                352,
                356
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
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
                356,
                389
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
                          376,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 17
                          },
                          "start": {
                            "column": 15,
                            "line": 17
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
                          381,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        376,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      369,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  359,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 16
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
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              345,
              389
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
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
        "name": "C1",
        "optional": false,
        "range": [
          7,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1,
        391
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 1,
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
            "range": [
              397,
              398
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
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  408,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      420,
                      421
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 21
                      },
                      "start": {
                        "column": 27,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      423,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 21
                      },
                      "start": {
                        "column": 30,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      434,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 21
                      },
                      "start": {
                        "column": 41,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  419,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 21
                  },
                  "start": {
                    "column": 26,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "range": [
                405,
                407
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "range": [
              401,
              438
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            397,
            438
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        393,
        439
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_a",
                "optional": false,
                "range": [
                  445,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 22
                  },
                  "start": {
                    "column": 5,
                    "line": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_b",
                "optional": false,
                "range": [
                  450,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_c",
                "optional": false,
                "range": [
                  455,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              444,
              459
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      463,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 22
                      },
                      "start": {
                        "column": 23,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "range": [
                      465,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 25,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    463,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 22
                    },
                    "start": {
                      "column": 23,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  463,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 22
                  },
                  "start": {
                    "column": 23,
                    "line": 22
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      473,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 22
                      },
                      "start": {
                        "column": 33,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "range": [
                      475,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 22
                      },
                      "start": {
                        "column": 35,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    473,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 22
                    },
                    "start": {
                      "column": 33,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  473,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 22
                  },
                  "start": {
                    "column": 33,
                    "line": 22
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      483,
                      484
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 22
                      },
                      "start": {
                        "column": 43,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "range": [
                      485,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 22
                      },
                      "start": {
                        "column": 45,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    483,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 22
                    },
                    "start": {
                      "column": 43,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  483,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 22
                  },
                  "start": {
                    "column": 43,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              462,
              492
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
              }
            }
          },
          "range": [
            444,
            492
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        440,
        493
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 22
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
            "name": "y",
            "optional": false,
            "range": [
              499,
              500
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  510,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 15,
                    "line": 24
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      515,
                      516
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      518,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 23,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      522,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 24
                      },
                      "start": {
                        "column": 27,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  514,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 19,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "range": [
                507,
                509
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              }
            },
            "range": [
              503,
              528
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            499,
            528
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        495,
        529
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_a",
                "optional": false,
                "range": [
                  535,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 25
                  },
                  "start": {
                    "column": 5,
                    "line": 25
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_b",
                "optional": false,
                "range": [
                  540,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_c",
                "optional": false,
                "range": [
                  545,
                  548
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
              }
            ],
            "optional": false,
            "range": [
              534,
              549
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      553,
                      554
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "range": [
                      555,
                      559
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 25,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    553,
                    559
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 25
                    },
                    "start": {
                      "column": 23,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "range": [
                  553,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 25
                  },
                  "start": {
                    "column": 23,
                    "line": 25
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      563,
                      564
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "range": [
                      565,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 25
                      },
                      "start": {
                        "column": 35,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    563,
                    569
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 25
                    },
                    "start": {
                      "column": 33,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "range": [
                  563,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 25
                  },
                  "start": {
                    "column": 33,
                    "line": 25
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      573,
                      574
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "range": [
                      575,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 25
                      },
                      "start": {
                        "column": 45,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    573,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 25
                    },
                    "start": {
                      "column": 43,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "range": [
                  573,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 25
                  },
                  "start": {
                    "column": 43,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              552,
              582
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 25
              },
              "start": {
                "column": 22,
                "line": 25
              }
            }
          },
          "range": [
            534,
            582
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        530,
        583
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 25
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
            "name": "z",
            "optional": false,
            "range": [
              589,
              590
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  600,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 15,
                    "line": 27
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      605,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 27
                      },
                      "start": {
                        "column": 20,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      616,
                      618
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 27
                      },
                      "start": {
                        "column": 31,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      620,
                      624
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 27
                      },
                      "start": {
                        "column": 35,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  604,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 27
                  },
                  "start": {
                    "column": 19,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "range": [
                597,
                599
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "range": [
              593,
              626
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "range": [
            589,
            626
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        585,
        627
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_a",
                "optional": false,
                "range": [
                  633,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "range": [
                  638,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 28
                  },
                  "start": {
                    "column": 10,
                    "line": 28
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "range": [
                  643,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 15,
                    "line": 28
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              632,
              647
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      651,
                      652
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "range": [
                      653,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 28
                      },
                      "start": {
                        "column": 25,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    651,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 28
                    },
                    "start": {
                      "column": 23,
                      "line": 28
                    }
                  }
                },
                "optional": false,
                "range": [
                  651,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      661,
                      662
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 28
                      },
                      "start": {
                        "column": 33,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "range": [
                      663,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 28
                      },
                      "start": {
                        "column": 35,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    661,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 28
                    },
                    "start": {
                      "column": 33,
                      "line": 28
                    }
                  }
                },
                "optional": false,
                "range": [
                  661,
                  669
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 28
                  },
                  "start": {
                    "column": 33,
                    "line": 28
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      671,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 28
                      },
                      "start": {
                        "column": 43,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "range": [
                      673,
                      677
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 28
                      },
                      "start": {
                        "column": 45,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    671,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 28
                    },
                    "start": {
                      "column": 43,
                      "line": 28
                    }
                  }
                },
                "optional": false,
                "range": [
                  671,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 28
                  },
                  "start": {
                    "column": 43,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              650,
              680
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 28
              },
              "start": {
                "column": 22,
                "line": 28
              }
            }
          },
          "range": [
            632,
            680
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        628,
        681
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
