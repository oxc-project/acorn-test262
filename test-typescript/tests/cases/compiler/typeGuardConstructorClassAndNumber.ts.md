__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    2140
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          25,
          51
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
                31,
                40
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
                40,
                48
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  42,
                  48
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
              31,
              49
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
          22,
          24
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
        16,
        51
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
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              },
              "range": [
                61,
                74
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "range": [
                        63,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 10,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      63,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      68,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  63,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              57,
              74
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            57,
            74
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        53,
        75
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                165,
                169
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
              165,
              170
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
          }
        ],
        "range": [
          159,
          187
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
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
                110,
                114
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              110,
              115
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                  126,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
                "name": "property1",
                "optional": false,
                "range": [
                  131,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "range": [
                126,
                140
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              126,
              141
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          104,
          153
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 7
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              80,
              84
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              85,
              96
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            80,
            96
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            100,
            102
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "range": [
          80,
          102
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        76,
        187
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                280,
                284
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              280,
              285
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          274,
          302
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
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
                225,
                229
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
            "range": [
              225,
              230
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  241,
                  245
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "range": [
                  246,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              },
              "range": [
                241,
                255
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              241,
              256
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          219,
          268
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 31,
            "line": 14
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              192,
              196
            ],
            "loc": {
              "end": {
                "column": 8,
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
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              197,
              210
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "range": [
            192,
            211
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            215,
            217
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 14
            },
            "start": {
              "column": 27,
              "line": 14
            }
          }
        },
        "range": [
          192,
          217
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
      },
      "range": [
        188,
        302
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                393,
                397
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
            "range": [
              393,
              398
            ],
            "loc": {
              "end": {
                "column": 9,
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
          387,
          415
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
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
                338,
                342
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              338,
              343
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                  354,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
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
                  359,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              },
              "range": [
                354,
                368
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              354,
              369
            ],
            "loc": {
              "end": {
                "column": 19,
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
          332,
          381
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 29,
            "line": 21
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
              307,
              311
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
              312,
              323
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            307,
            323
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            328,
            330
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 21
            },
            "start": {
              "column": 25,
              "line": 21
            }
          }
        },
        "range": [
          307,
          330
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "range": [
        303,
        415
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                509,
                513
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              509,
              514
            ],
            "loc": {
              "end": {
                "column": 9,
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
          503,
          531
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
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
                454,
                458
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
            "range": [
              454,
              459
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                  470,
                  474
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "range": [
                  475,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 9,
                    "line": 30
                  }
                }
              },
              "range": [
                470,
                484
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              470,
              485
            ],
            "loc": {
              "end": {
                "column": 19,
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
          448,
          497
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 32,
            "line": 28
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              420,
              424
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              425,
              438
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 28
              },
              "start": {
                "column": 9,
                "line": 28
              }
            }
          },
          "range": [
            420,
            439
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            444,
            446
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 28
            },
            "start": {
              "column": 28,
              "line": 28
            }
          }
        },
        "range": [
          420,
          446
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 28
          },
          "start": {
            "column": 4,
            "line": 28
          }
        }
      },
      "range": [
        416,
        531
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                621,
                625
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              621,
              626
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          615,
          643
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
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
                566,
                570
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              566,
              571
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                  582,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
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
                  587,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 37
                  },
                  "start": {
                    "column": 9,
                    "line": 37
                  }
                }
              },
              "range": [
                582,
                596
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              582,
              597
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          560,
          609
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 28,
            "line": 35
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            536,
            538
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              542,
              546
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 35
              },
              "start": {
                "column": 10,
                "line": 35
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
              547,
              558
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 35
              },
              "start": {
                "column": 15,
                "line": 35
              }
            }
          },
          "range": [
            542,
            558
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 35
            },
            "start": {
              "column": 10,
              "line": 35
            }
          }
        },
        "range": [
          536,
          558
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 35
          },
          "start": {
            "column": 4,
            "line": 35
          }
        }
      },
      "range": [
        532,
        643
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                736,
                740
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
              736,
              741
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
          730,
          758
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 46
          }
        }
      },
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
                681,
                685
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
            "range": [
              681,
              686
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
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
                  697,
                  701
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "range": [
                  702,
                  711
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 44
                  },
                  "start": {
                    "column": 9,
                    "line": 44
                  }
                }
              },
              "range": [
                697,
                711
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              697,
              712
            ],
            "loc": {
              "end": {
                "column": 19,
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
          675,
          724
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 31,
            "line": 42
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            648,
            650
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              654,
              658
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 42
              },
              "start": {
                "column": 10,
                "line": 42
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              659,
              672
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 42
              },
              "start": {
                "column": 15,
                "line": 42
              }
            }
          },
          "range": [
            654,
            673
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 42
            },
            "start": {
              "column": 10,
              "line": 42
            }
          }
        },
        "range": [
          648,
          673
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 42
          },
          "start": {
            "column": 4,
            "line": 42
          }
        }
      },
      "range": [
        644,
        758
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                849,
                853
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              849,
              854
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          843,
          871
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 5,
            "line": 53
          }
        }
      },
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
                794,
                798
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              794,
              799
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
                  810,
                  814
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
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
                  815,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 51
                  },
                  "start": {
                    "column": 9,
                    "line": 51
                  }
                }
              },
              "range": [
                810,
                824
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              810,
              825
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          788,
          837
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 29,
            "line": 49
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            763,
            765
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              770,
              774
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 49
              },
              "start": {
                "column": 11,
                "line": 49
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
              775,
              786
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 49
              },
              "start": {
                "column": 16,
                "line": 49
              }
            }
          },
          "range": [
            770,
            786
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 49
            },
            "start": {
              "column": 11,
              "line": 49
            }
          }
        },
        "range": [
          763,
          786
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 49
          },
          "start": {
            "column": 4,
            "line": 49
          }
        }
      },
      "range": [
        759,
        871
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                965,
                969
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
              965,
              970
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
          959,
          987
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 60
          }
        }
      },
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
                910,
                914
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              910,
              915
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
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
                  926,
                  930
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
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
                  931,
                  940
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 58
                  },
                  "start": {
                    "column": 9,
                    "line": 58
                  }
                }
              },
              "range": [
                926,
                940
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              926,
              941
            ],
            "loc": {
              "end": {
                "column": 19,
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
          904,
          953
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 32,
            "line": 56
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            876,
            878
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 56
            },
            "start": {
              "column": 4,
              "line": 56
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              883,
              887
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 56
              },
              "start": {
                "column": 11,
                "line": 56
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              888,
              901
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 56
              },
              "start": {
                "column": 16,
                "line": 56
              }
            }
          },
          "range": [
            883,
            902
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 56
            },
            "start": {
              "column": 11,
              "line": 56
            }
          }
        },
        "range": [
          876,
          902
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 56
          },
          "start": {
            "column": 4,
            "line": 56
          }
        }
      },
      "range": [
        872,
        987
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1086,
                1090
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1086,
              1091
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "range": [
          1080,
          1099
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 5,
            "line": 68
          }
        }
      },
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
                1023,
                1027
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1023,
              1028
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
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
                  1048,
                  1052
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
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
                  1053,
                  1062
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 66
                  },
                  "start": {
                    "column": 9,
                    "line": 66
                  }
                }
              },
              "range": [
                1048,
                1062
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            "range": [
              1048,
              1063
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          1017,
          1074
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 28,
            "line": 64
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              993,
              997
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "range": [
              998,
              1009
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 64
              },
              "start": {
                "column": 9,
                "line": 64
              }
            }
          },
          "range": [
            993,
            1009
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 64
            },
            "start": {
              "column": 4,
              "line": 64
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1013,
            1015
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 64
            },
            "start": {
              "column": 24,
              "line": 64
            }
          }
        },
        "range": [
          993,
          1015
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 64
          },
          "start": {
            "column": 4,
            "line": 64
          }
        }
      },
      "range": [
        989,
        1099
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1200,
                1204
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "range": [
              1200,
              1205
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          }
        ],
        "range": [
          1194,
          1213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 5,
            "line": 75
          }
        }
      },
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
                1137,
                1141
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              1137,
              1142
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
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
                  1162,
                  1166
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
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
                  1167,
                  1176
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 73
                  },
                  "start": {
                    "column": 9,
                    "line": 73
                  }
                }
              },
              "range": [
                1162,
                1176
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            "range": [
              1162,
              1177
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          }
        ],
        "range": [
          1131,
          1188
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 31,
            "line": 71
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              1104,
              1108
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              1109,
              1122
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 71
              },
              "start": {
                "column": 9,
                "line": 71
              }
            }
          },
          "range": [
            1104,
            1123
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 71
            },
            "start": {
              "column": 4,
              "line": 71
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1127,
            1129
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 71
            },
            "start": {
              "column": 27,
              "line": 71
            }
          }
        },
        "range": [
          1104,
          1129
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 71
          },
          "start": {
            "column": 4,
            "line": 71
          }
        }
      },
      "range": [
        1100,
        1213
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1312,
                1316
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
                }
              }
            },
            "range": [
              1312,
              1317
            ],
            "loc": {
              "end": {
                "column": 9,
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
          1306,
          1325
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 5,
            "line": 82
          }
        }
      },
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
                1249,
                1253
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "range": [
              1249,
              1254
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
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
                  1274,
                  1278
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 80
                  },
                  "start": {
                    "column": 4,
                    "line": 80
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
                  1279,
                  1288
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 80
                  },
                  "start": {
                    "column": 9,
                    "line": 80
                  }
                }
              },
              "range": [
                1274,
                1288
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            "range": [
              1274,
              1289
            ],
            "loc": {
              "end": {
                "column": 19,
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
          1243,
          1300
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 29,
            "line": 78
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
            "name": "var1",
            "optional": false,
            "range": [
              1218,
              1222
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
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
              1223,
              1234
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 78
              },
              "start": {
                "column": 9,
                "line": 78
              }
            }
          },
          "range": [
            1218,
            1234
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 78
            },
            "start": {
              "column": 4,
              "line": 78
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1239,
            1241
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 78
            },
            "start": {
              "column": 25,
              "line": 78
            }
          }
        },
        "range": [
          1218,
          1241
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 78
          },
          "start": {
            "column": 4,
            "line": 78
          }
        }
      },
      "range": [
        1214,
        1325
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1427,
                1431
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
                }
              }
            },
            "range": [
              1427,
              1432
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          }
        ],
        "range": [
          1421,
          1440
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 91
          },
          "start": {
            "column": 5,
            "line": 89
          }
        }
      },
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
                1364,
                1368
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "range": [
              1364,
              1369
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
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
                  1389,
                  1393
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 87
                  },
                  "start": {
                    "column": 4,
                    "line": 87
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
                  1394,
                  1403
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 87
                  },
                  "start": {
                    "column": 9,
                    "line": 87
                  }
                }
              },
              "range": [
                1389,
                1403
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "range": [
              1389,
              1404
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "range": [
          1358,
          1415
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 32,
            "line": 85
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              1330,
              1334
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              1335,
              1348
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 85
              },
              "start": {
                "column": 9,
                "line": 85
              }
            }
          },
          "range": [
            1330,
            1349
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 85
            },
            "start": {
              "column": 4,
              "line": 85
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1354,
            1356
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 85
            },
            "start": {
              "column": 28,
              "line": 85
            }
          }
        },
        "range": [
          1330,
          1356
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 85
          },
          "start": {
            "column": 4,
            "line": 85
          }
        }
      },
      "range": [
        1326,
        1440
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1538,
                1542
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
            "range": [
              1538,
              1543
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          }
        ],
        "range": [
          1532,
          1551
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 98
          },
          "start": {
            "column": 5,
            "line": 96
          }
        }
      },
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
                1475,
                1479
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 93
                },
                "start": {
                  "column": 4,
                  "line": 93
                }
              }
            },
            "range": [
              1475,
              1480
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
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
                  1500,
                  1504
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
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
                  1505,
                  1514
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 94
                  },
                  "start": {
                    "column": 9,
                    "line": 94
                  }
                }
              },
              "range": [
                1500,
                1514
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            "range": [
              1500,
              1515
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          }
        ],
        "range": [
          1469,
          1526
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 28,
            "line": 92
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1445,
            1447
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 92
            },
            "start": {
              "column": 4,
              "line": 92
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              1451,
              1455
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 92
              },
              "start": {
                "column": 10,
                "line": 92
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
              1456,
              1467
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 92
              },
              "start": {
                "column": 15,
                "line": 92
              }
            }
          },
          "range": [
            1451,
            1467
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 92
            },
            "start": {
              "column": 10,
              "line": 92
            }
          }
        },
        "range": [
          1445,
          1467
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 92
          },
          "start": {
            "column": 4,
            "line": 92
          }
        }
      },
      "range": [
        1441,
        1551
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1652,
                1656
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "range": [
              1652,
              1657
            ],
            "loc": {
              "end": {
                "column": 9,
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
          1646,
          1665
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 5,
            "line": 103
          }
        }
      },
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
                1589,
                1593
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 100
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            },
            "range": [
              1589,
              1594
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
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
                  1614,
                  1618
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 101
                  },
                  "start": {
                    "column": 4,
                    "line": 101
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
                  1619,
                  1628
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 101
                  },
                  "start": {
                    "column": 9,
                    "line": 101
                  }
                }
              },
              "range": [
                1614,
                1628
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 101
                }
              }
            },
            "range": [
              1614,
              1629
            ],
            "loc": {
              "end": {
                "column": 19,
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
          1583,
          1640
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 102
          },
          "start": {
            "column": 31,
            "line": 99
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1556,
            1558
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 99
            },
            "start": {
              "column": 4,
              "line": 99
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              1562,
              1566
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 99
              },
              "start": {
                "column": 10,
                "line": 99
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              1567,
              1580
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 99
              },
              "start": {
                "column": 15,
                "line": 99
              }
            }
          },
          "range": [
            1562,
            1581
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 99
            },
            "start": {
              "column": 10,
              "line": 99
            }
          }
        },
        "range": [
          1556,
          1581
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 99
          },
          "start": {
            "column": 4,
            "line": 99
          }
        }
      },
      "range": [
        1552,
        1665
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1764,
                1768
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 111
                },
                "start": {
                  "column": 4,
                  "line": 111
                }
              }
            },
            "range": [
              1764,
              1769
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          }
        ],
        "range": [
          1758,
          1777
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 112
          },
          "start": {
            "column": 5,
            "line": 110
          }
        }
      },
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
                1701,
                1705
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            "range": [
              1701,
              1706
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
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
                  1726,
                  1730
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 108
                  },
                  "start": {
                    "column": 4,
                    "line": 108
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
                  1731,
                  1740
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 108
                  },
                  "start": {
                    "column": 9,
                    "line": 108
                  }
                }
              },
              "range": [
                1726,
                1740
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 108
                },
                "start": {
                  "column": 4,
                  "line": 108
                }
              }
            },
            "range": [
              1726,
              1741
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          }
        ],
        "range": [
          1695,
          1752
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 29,
            "line": 106
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1670,
            1672
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 106
            },
            "start": {
              "column": 4,
              "line": 106
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              1677,
              1681
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 106
              },
              "start": {
                "column": 11,
                "line": 106
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
              1682,
              1693
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 106
              },
              "start": {
                "column": 16,
                "line": 106
              }
            }
          },
          "range": [
            1677,
            1693
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 106
            },
            "start": {
              "column": 11,
              "line": 106
            }
          }
        },
        "range": [
          1670,
          1693
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 106
          },
          "start": {
            "column": 4,
            "line": 106
          }
        }
      },
      "range": [
        1666,
        1777
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 106
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                1879,
                1883
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 118
                },
                "start": {
                  "column": 4,
                  "line": 118
                }
              }
            },
            "range": [
              1879,
              1884
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          }
        ],
        "range": [
          1873,
          1892
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 5,
            "line": 117
          }
        }
      },
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
                1816,
                1820
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 114
                },
                "start": {
                  "column": 4,
                  "line": 114
                }
              }
            },
            "range": [
              1816,
              1821
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
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
                  1841,
                  1845
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 115
                  },
                  "start": {
                    "column": 4,
                    "line": 115
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
                  1846,
                  1855
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 115
                  },
                  "start": {
                    "column": 9,
                    "line": 115
                  }
                }
              },
              "range": [
                1841,
                1855
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 115
                },
                "start": {
                  "column": 4,
                  "line": 115
                }
              }
            },
            "range": [
              1841,
              1856
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 115
              },
              "start": {
                "column": 4,
                "line": 115
              }
            }
          }
        ],
        "range": [
          1810,
          1867
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 32,
            "line": 113
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "range": [
            1782,
            1784
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 113
            },
            "start": {
              "column": 4,
              "line": 113
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              1789,
              1793
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 113
              },
              "start": {
                "column": 11,
                "line": 113
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"constructor\"",
            "value": "constructor",
            "range": [
              1794,
              1807
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 113
              },
              "start": {
                "column": 16,
                "line": 113
              }
            }
          },
          "range": [
            1789,
            1808
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 113
            },
            "start": {
              "column": 11,
              "line": 113
            }
          }
        },
        "range": [
          1782,
          1808
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 113
          },
          "start": {
            "column": 4,
            "line": 113
          }
        }
      },
      "range": [
        1778,
        1892
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 113
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
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "range": [
                              2105,
                              2113
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 126
                              },
                              "start": {
                                "column": 19,
                                "line": 126
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "range": [
                              2114,
                              2120
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 126
                              },
                              "start": {
                                "column": 28,
                                "line": 126
                              }
                            }
                          },
                          "range": [
                            2105,
                            2120
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 126
                            },
                            "start": {
                              "column": 19,
                              "line": 126
                            }
                          }
                        },
                        "range": [
                          2098,
                          2121
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 126
                          },
                          "start": {
                            "column": 12,
                            "line": 126
                          }
                        }
                      }
                    ],
                    "range": [
                      2084,
                      2131
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 127
                      },
                      "start": {
                        "column": 82,
                        "line": 125
                      }
                    }
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instance",
                          "optional": false,
                          "range": [
                            2014,
                            2022
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 125
                            },
                            "start": {
                              "column": 12,
                              "line": 125
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "range": [
                            2023,
                            2032
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 125
                            },
                            "start": {
                              "column": 21,
                              "line": 125
                            }
                          }
                        },
                        "range": [
                          2014,
                          2032
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 125
                          },
                          "start": {
                            "column": 12,
                            "line": 125
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          2036,
                          2040
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 125
                          },
                          "start": {
                            "column": 34,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2014,
                        2040
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 125
                        },
                        "start": {
                          "column": 12,
                          "line": 125
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "range": [
                              2044,
                              2052
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 125
                              },
                              "start": {
                                "column": 42,
                                "line": 125
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "range": [
                              2053,
                              2062
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 125
                              },
                              "start": {
                                "column": 51,
                                "line": 125
                              }
                            }
                          },
                          "range": [
                            2044,
                            2062
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 125
                            },
                            "start": {
                              "column": 42,
                              "line": 125
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
                            2063,
                            2074
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 125
                            },
                            "start": {
                              "column": 61,
                              "line": 125
                            }
                          }
                        },
                        "range": [
                          2044,
                          2074
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 125
                          },
                          "start": {
                            "column": 42,
                            "line": 125
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          2078,
                          2082
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 125
                          },
                          "start": {
                            "column": 76,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2044,
                        2082
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 125
                        },
                        "start": {
                          "column": 42,
                          "line": 125
                        }
                      }
                    },
                    "range": [
                      2014,
                      2082
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 125
                      },
                      "start": {
                        "column": 12,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    2010,
                    2131
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 127
                    },
                    "start": {
                      "column": 8,
                      "line": 125
                    }
                  }
                }
              ],
              "range": [
                2000,
                2137
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 128
                },
                "start": {
                  "column": 40,
                  "line": 124
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "instance",
                  "optional": false,
                  "range": [
                    1975,
                    1983
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 124
                    },
                    "start": {
                      "column": 15,
                      "line": 124
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1968,
                  1983
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 124
                  },
                  "start": {
                    "column": 8,
                    "line": 124
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'function'",
                "value": "function",
                "range": [
                  1988,
                  1998
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 124
                  },
                  "start": {
                    "column": 28,
                    "line": 124
                  }
                }
              },
              "range": [
                1968,
                1998
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 124
                },
                "start": {
                  "column": 8,
                  "line": 124
                }
              }
            },
            "range": [
              1964,
              2137
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          }
        ],
        "range": [
          1958,
          2139
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 129
          },
          "start": {
            "column": 42,
            "line": 123
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          1925,
          1928
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 123
          },
          "start": {
            "column": 9,
            "line": 123
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instance",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 123
              },
              "start": {
                "column": 21,
                "line": 123
              }
            },
            "range": [
              1937,
              1956
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "range": [
                      1939,
                      1947
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 123
                      },
                      "start": {
                        "column": 23,
                        "line": 123
                      }
                    }
                  },
                  "range": [
                    1939,
                    1947
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 123
                    },
                    "start": {
                      "column": 23,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "TSObjectKeyword",
                  "range": [
                    1950,
                    1956
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 123
                    },
                    "start": {
                      "column": 34,
                      "line": 123
                    }
                  }
                }
              ],
              "range": [
                1939,
                1956
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 123
                },
                "start": {
                  "column": 23,
                  "line": 123
                }
              }
            }
          },
          "range": [
            1929,
            1956
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 123
            },
            "start": {
              "column": 13,
              "line": 123
            }
          }
        }
      ],
      "range": [
        1916,
        2139
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 130
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
