__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    608
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
            "name": "myNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              },
              "range": [
                35,
                41
              ],
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "range": [
                  37,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              29,
              41
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              44,
              48
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          },
          "range": [
            29,
            48
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        23,
        49
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              },
              "range": [
                75,
                99
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
                      "name": "val",
                      "optional": false,
                      "range": [
                        79,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
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
                          "column": 47,
                          "line": 4
                        },
                        "start": {
                          "column": 32,
                          "line": 4
                        }
                      },
                      "range": [
                        82,
                        97
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              84,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 4
                              },
                              "start": {
                                "column": 34,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "TSNullKeyword",
                            "range": [
                              93,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 4
                              },
                              "start": {
                                "column": 43,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          84,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 4
                          },
                          "start": {
                            "column": 34,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      79,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  77,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 49,
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
              56,
              99
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 4
              },
              "start": {
                "column": 6,
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
                  "name": "val",
                  "optional": false,
                  "range": [
                    104,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 4
                    },
                    "start": {
                      "column": 54,
                      "line": 4
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
                    109,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 4
                    },
                    "start": {
                      "column": 59,
                      "line": 4
                    }
                  }
                },
                "range": [
                  104,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 4
                  },
                  "start": {
                    "column": 54,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              102,
              112
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 4
              },
              "start": {
                "column": 52,
                "line": 4
              }
            }
          },
          "range": [
            56,
            112
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        50,
        113
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "addOne",
            "optional": false,
            "range": [
              120,
              126
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "range": [
                        165,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        171,
                        172
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
                      165,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    158,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                152,
                175
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 38,
                  "line": 5
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
                "name": "num",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 5
                    },
                    "start": {
                      "column": 28,
                      "line": 5
                    }
                  },
                  "range": [
                    142,
                    150
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      144,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 30,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  139,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              129,
              175
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "range": [
            120,
            175
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        114,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "range": [
                  226,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "range": [
                  246,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 10
                  }
                }
              },
              "range": [
                226,
                249
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "range": [
              219,
              225
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "optional": false,
          "range": [
            219,
            250
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        "range": [
          219,
          251
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "range": [
              181,
              200
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "range": [
              201,
              204
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 9
              }
            }
          },
          "range": [
            181,
            204
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            209,
            213
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 9
            },
            "start": {
              "column": 32,
              "line": 9
            }
          }
        },
        "range": [
          181,
          213
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        177,
        251
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "range": [
                  303,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "range": [
                  323,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 31,
                    "line": 12
                  }
                }
              },
              "range": [
                303,
                326
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "range": [
              296,
              302
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
          },
          "optional": false,
          "range": [
            296,
            327
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "range": [
          296,
          328
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 12
          },
          "start": {
            "column": 4,
            "line": 12
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "range": [
              256,
              275
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "range": [
              276,
              279
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            }
          },
          "range": [
            256,
            279
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "range": [
            284,
            290
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 11
            },
            "start": {
              "column": 32,
              "line": 11
            }
          }
        },
        "range": [
          256,
          290
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 11
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "range": [
        252,
        328
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "range": [
                  379,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "range": [
                  399,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 31,
                    "line": 15
                  }
                }
              },
              "range": [
                379,
                402
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "range": [
              372,
              378
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "optional": false,
          "range": [
            372,
            403
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "range": [
          372,
          404
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 15
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "range": [
              334,
              353
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "range": [
              354,
              357
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 14
              },
              "start": {
                "column": 24,
                "line": 14
              }
            }
          },
          "range": [
            334,
            357
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            362,
            366
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 14
            },
            "start": {
              "column": 32,
              "line": 14
            }
          }
        },
        "range": [
          334,
          366
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 14
          },
          "start": {
            "column": 4,
            "line": 14
          }
        }
      },
      "range": [
        330,
        404
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "range": [
                  468,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "range": [
                  488,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 31,
                    "line": 17
                  }
                }
              },
              "range": [
                468,
                491
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "range": [
              461,
              467
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "optional": false,
          "range": [
            461,
            492
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          461,
          493
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "range": [
              421,
              440
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "range": [
              441,
              444
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 24,
                "line": 16
              }
            }
          },
          "range": [
            421,
            444
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "range": [
            449,
            455
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 32,
              "line": 16
            }
          }
        },
        "range": [
          421,
          455
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        417,
        493
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 16
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          },
                          "range": [
                            576,
                            584
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              578,
                              584
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
                          }
                        },
                        "range": [
                          575,
                          584
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 21
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          587,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 26,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        575,
                        588
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    569,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                559,
                605
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 20
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  545,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 20
                  },
                  "start": {
                    "column": 7,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "myNull",
                "optional": false,
                "range": [
                  551,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                }
              },
              "range": [
                545,
                557
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 7,
                  "line": 20
                }
              }
            },
            "range": [
              542,
              605
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          536,
          607
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 29,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          516,
          517
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
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
                "column": 27,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            },
            "range": [
              519,
              534
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    521,
                    527
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
                  "type": "TSNullKeyword",
                  "range": [
                    530,
                    534
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
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
                521,
                534
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            }
          },
          "range": [
            518,
            534
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 19
            },
            "start": {
              "column": 11,
              "line": 19
            }
          }
        }
      ],
      "range": [
        507,
        607
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
