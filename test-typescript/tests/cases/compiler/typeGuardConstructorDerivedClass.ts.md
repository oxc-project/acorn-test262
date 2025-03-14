__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    43,
    981
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          52,
          78
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
              "name": "property1",
              "optional": false,
              "range": [
                58,
                67
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              },
              "range": [
                67,
                75
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  69,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              58,
              76
            ],
            "loc": {
              "end": {
                "column": 22,
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
            "column": 9,
            "line": 2
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
          49,
          51
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        43,
        78
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
          100,
          126
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
              "name": "property2",
              "optional": false,
              "range": [
                106,
                115
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              },
              "range": [
                115,
                123
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  117,
                  123
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
              }
            },
            "value": null,
            "range": [
              106,
              124
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 6
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
          86,
          88
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
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
          97,
          99
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "range": [
        80,
        126
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                136,
                149
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "range": [
                        138,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      138,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 10
                      },
                      "start": {
                        "column": 10,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      143,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  138,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              132,
              149
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            132,
            149
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        128,
        150
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                186,
                190
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              186,
              191
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "range": [
                  205,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "range": [
                  210,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "range": [
                205,
                219
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              205,
              220
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          180,
          231
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 29,
            "line": 11
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
            "name": "var1",
            "optional": false,
            "range": [
              155,
              159
            ],
            "loc": {
              "end": {
                "column": 8,
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
            "name": "constructor",
            "optional": false,
            "range": [
              160,
              171
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            155,
            171
          ],
          "loc": {
            "end": {
              "column": 20,
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
          "name": "C1",
          "optional": false,
          "range": [
            176,
            178
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 25,
              "line": 11
            }
          }
        },
        "range": [
          155,
          178
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
      "range": [
        151,
        231
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "range": [
                267,
                271
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              267,
              272
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                "name": "var1",
                "optional": false,
                "range": [
                  283,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "range": [
                  288,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "range": [
                283,
                297
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
            },
            "range": [
              283,
              298
            ],
            "loc": {
              "end": {
                "column": 19,
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
          261,
          310
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 29,
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
            "name": "var1",
            "optional": false,
            "range": [
              236,
              240
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              241,
              252
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            236,
            252
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "range": [
            257,
            259
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        },
        "range": [
          236,
          259
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 15
          }
        }
      },
      "range": [
        232,
        310
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          364,
          366
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "range": [
          361,
          363
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        355,
        366
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          388,
          390
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 22,
            "line": 23
          },
          "start": {
            "column": 20,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "range": [
          374,
          376
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
        "name": "C3",
        "optional": false,
        "range": [
          385,
          387
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
      "range": [
        368,
        390
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "var2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              },
              "range": [
                400,
                413
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C4",
                      "optional": false,
                      "range": [
                        402,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 25
                        },
                        "start": {
                          "column": 10,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      402,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 25
                      },
                      "start": {
                        "column": 10,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      407,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  402,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              396,
              413
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": null,
          "range": [
            396,
            413
          ],
          "loc": {
            "end": {
              "column": 21,
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
      "kind": "let",
      "range": [
        392,
        414
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                450,
                454
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              450,
              455
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          444,
          466
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 29,
            "line": 26
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
            "name": "var2",
            "optional": false,
            "range": [
              419,
              423
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              424,
              435
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            419,
            435
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "range": [
            440,
            442
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 26
            },
            "start": {
              "column": 25,
              "line": 26
            }
          }
        },
        "range": [
          419,
          442
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 26
          },
          "start": {
            "column": 4,
            "line": 26
          }
        }
      },
      "range": [
        415,
        466
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 26
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
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                502,
                506
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              502,
              507
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          496,
          515
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 29,
            "line": 29
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
            "name": "var2",
            "optional": false,
            "range": [
              471,
              475
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              476,
              487
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 29
              },
              "start": {
                "column": 9,
                "line": 29
              }
            }
          },
          "range": [
            471,
            487
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C4",
          "optional": false,
          "range": [
            492,
            494
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 29
            },
            "start": {
              "column": 25,
              "line": 29
            }
          }
        },
        "range": [
          471,
          494
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 29
          },
          "start": {
            "column": 4,
            "line": 29
          }
        }
      },
      "range": [
        467,
        515
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          559,
          585
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
              "name": "property1",
              "optional": false,
              "range": [
                565,
                574
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 35
                },
                "start": {
                  "column": 13,
                  "line": 35
                }
              },
              "range": [
                574,
                582
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  576,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
                  }
                }
              }
            },
            "value": null,
            "range": [
              565,
              583
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 9,
            "line": 34
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "range": [
          556,
          558
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 34
          },
          "start": {
            "column": 6,
            "line": 34
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        550,
        585
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          596,
          622
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
              "name": "property2",
              "optional": false,
              "range": [
                602,
                611
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 39
                },
                "start": {
                  "column": 13,
                  "line": 39
                }
              },
              "range": [
                611,
                619
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  613,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 39
                  },
                  "start": {
                    "column": 15,
                    "line": 39
                  }
                }
              }
            },
            "value": null,
            "range": [
              602,
              620
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 9,
            "line": 38
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "range": [
          593,
          595
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 38
          },
          "start": {
            "column": 6,
            "line": 38
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        587,
        622
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "let3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              },
              "range": [
                632,
                645
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C6",
                      "optional": false,
                      "range": [
                        634,
                        636
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 42
                        },
                        "start": {
                          "column": 10,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      634,
                      636
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 42
                      },
                      "start": {
                        "column": 10,
                        "line": 42
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      639,
                      645
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 42
                      },
                      "start": {
                        "column": 15,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  634,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              628,
              645
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": null,
          "range": [
            628,
            645
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        624,
        646
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
              "type": "Identifier",
              "decorators": [],
              "name": "let3",
              "optional": false,
              "range": [
                682,
                686
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              682,
              687
            ],
            "loc": {
              "end": {
                "column": 9,
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
          676,
          698
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 29,
            "line": 43
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
            "name": "let3",
            "optional": false,
            "range": [
              651,
              655
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              656,
              667
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 43
              }
            }
          },
          "range": [
            651,
            667
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C5",
          "optional": false,
          "range": [
            672,
            674
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 43
            },
            "start": {
              "column": 25,
              "line": 43
            }
          }
        },
        "range": [
          651,
          674
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 43
          },
          "start": {
            "column": 4,
            "line": 43
          }
        }
      },
      "range": [
        647,
        698
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
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
              "type": "Identifier",
              "decorators": [],
              "name": "let3",
              "optional": false,
              "range": [
                734,
                738
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              734,
              739
            ],
            "loc": {
              "end": {
                "column": 9,
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
          728,
          747
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 29,
            "line": 46
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
            "name": "let3",
            "optional": false,
            "range": [
              703,
              707
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              708,
              719
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 46
              },
              "start": {
                "column": 9,
                "line": 46
              }
            }
          },
          "range": [
            703,
            719
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6",
          "optional": false,
          "range": [
            724,
            726
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 46
            },
            "start": {
              "column": 25,
              "line": 46
            }
          }
        },
        "range": [
          703,
          726
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 46
          },
          "start": {
            "column": 4,
            "line": 46
          }
        }
      },
      "range": [
        699,
        747
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          793,
          818
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
              "name": "property1",
              "optional": false,
              "range": [
                799,
                808
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 52
                },
                "start": {
                  "column": 13,
                  "line": 52
                }
              },
              "range": [
                808,
                816
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  810,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 52
                  },
                  "start": {
                    "column": 15,
                    "line": 52
                  }
                }
              }
            },
            "value": null,
            "range": [
              799,
              816
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "range": [
          790,
          792
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 51
          },
          "start": {
            "column": 6,
            "line": 51
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        784,
        818
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          829,
          855
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
              "name": "property1",
              "optional": false,
              "range": [
                835,
                844
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 56
                },
                "start": {
                  "column": 13,
                  "line": 56
                }
              },
              "range": [
                844,
                852
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  846,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 56
                  },
                  "start": {
                    "column": 15,
                    "line": 56
                  }
                }
              }
            },
            "value": null,
            "range": [
              835,
              853
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 55
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C8",
        "optional": false,
        "range": [
          826,
          828
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 55
          },
          "start": {
            "column": 6,
            "line": 55
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        820,
        855
      ],
      "loc": {
        "end": {
          "column": 1,
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
            "name": "let4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 59
                },
                "start": {
                  "column": 8,
                  "line": 59
                }
              },
              "range": [
                865,
                878
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C8",
                      "optional": false,
                      "range": [
                        867,
                        869
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 59
                        },
                        "start": {
                          "column": 10,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      867,
                      869
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 59
                      },
                      "start": {
                        "column": 10,
                        "line": 59
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      872,
                      878
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 59
                      },
                      "start": {
                        "column": 15,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  867,
                  878
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 59
                  },
                  "start": {
                    "column": 10,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              861,
              878
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          "init": null,
          "range": [
            861,
            878
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        857,
        879
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
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
              "type": "Identifier",
              "decorators": [],
              "name": "let4",
              "optional": false,
              "range": [
                915,
                919
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              915,
              920
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
          }
        ],
        "range": [
          909,
          931
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 29,
            "line": 60
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
            "name": "let4",
            "optional": false,
            "range": [
              884,
              888
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              889,
              900
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 60
              },
              "start": {
                "column": 9,
                "line": 60
              }
            }
          },
          "range": [
            884,
            900
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 60
            },
            "start": {
              "column": 4,
              "line": 60
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7",
          "optional": false,
          "range": [
            905,
            907
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 60
            },
            "start": {
              "column": 25,
              "line": 60
            }
          }
        },
        "range": [
          884,
          907
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 60
          },
          "start": {
            "column": 4,
            "line": 60
          }
        }
      },
      "range": [
        880,
        931
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 60
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
              "type": "Identifier",
              "decorators": [],
              "name": "let4",
              "optional": false,
              "range": [
                967,
                971
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              967,
              972
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          961,
          980
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 29,
            "line": 63
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
            "name": "let4",
            "optional": false,
            "range": [
              936,
              940
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              941,
              952
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 63
              },
              "start": {
                "column": 9,
                "line": 63
              }
            }
          },
          "range": [
            936,
            952
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 63
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C8",
          "optional": false,
          "range": [
            957,
            959
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 63
            },
            "start": {
              "column": 25,
              "line": 63
            }
          }
        },
        "range": [
          936,
          959
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 63
          },
          "start": {
            "column": 4,
            "line": 63
          }
        }
      },
      "range": [
        932,
        980
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 66
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
