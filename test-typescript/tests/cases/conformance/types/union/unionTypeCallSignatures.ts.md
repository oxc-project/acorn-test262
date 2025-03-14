__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    4541
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
            "name": "numOrDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              },
              "range": [
                14,
                29
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      16,
                      22
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 1
                      },
                      "start": {
                        "column": 16,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "range": [
                        25,
                        29
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      25,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  16,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              5,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            5,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
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
            "name": "strOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                47,
                65
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      49,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      58,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 27,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  49,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              35,
              65
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            35,
            65
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        31,
        66
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 2
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              },
              "range": [
                79,
                96
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      81,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      90,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  81,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              71,
              96
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            71,
            96
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        67,
        97
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 81,
                  "line": 7
                },
                "start": {
                  "column": 30,
                  "line": 7
                }
              },
              "range": [
                395,
                446
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 7
                                },
                                "start": {
                                  "column": 36,
                                  "line": 7
                                }
                              },
                              "range": [
                                401,
                                409
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  403,
                                  409
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              400,
                              409
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 7
                              },
                              "start": {
                                "column": 35,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 7
                            },
                            "start": {
                              "column": 45,
                              "line": 7
                            }
                          },
                          "range": [
                            410,
                            418
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              412,
                              418
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 7
                              },
                              "start": {
                                "column": 47,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          399,
                          419
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 7
                          },
                          "start": {
                            "column": 34,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      397,
                      421
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 7
                      },
                      "start": {
                        "column": 32,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 7
                                },
                                "start": {
                                  "column": 63,
                                  "line": 7
                                }
                              },
                              "range": [
                                428,
                                436
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  430,
                                  436
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              427,
                              436
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 7
                              },
                              "start": {
                                "column": 62,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 7
                            },
                            "start": {
                              "column": 72,
                              "line": 7
                            }
                          },
                          "range": [
                            437,
                            443
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                439,
                                443
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 7
                                },
                                "start": {
                                  "column": 74,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              439,
                              443
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 7
                              },
                              "start": {
                                "column": 74,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          426,
                          444
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 7
                          },
                          "start": {
                            "column": 61,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      424,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 7
                      },
                      "start": {
                        "column": 59,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  397,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              369,
              446
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            369,
            446
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        365,
        447
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "range": [
            448,
            457
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                487,
                489
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 8
                },
                "start": {
                  "column": 39,
                  "line": 8
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "range": [
              460,
              486
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "optional": false,
          "range": [
            460,
            490
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        },
        "range": [
          448,
          490
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        448,
        491
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "range": [
            492,
            504
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                534,
                541
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 9
                },
                "start": {
                  "column": 42,
                  "line": 9
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "range": [
              507,
              533
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 9
              },
              "start": {
                "column": 15,
                "line": 9
              }
            }
          },
          "optional": false,
          "range": [
            507,
            542
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        "range": [
          492,
          542
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        492,
        543
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "raw": "true",
            "value": true,
            "range": [
              582,
              586
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 28,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "range": [
            554,
            581
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          554,
          587
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        554,
        588
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 125,
                  "line": 12
                },
                "start": {
                  "column": 31,
                  "line": 12
                }
              },
              "range": [
                651,
                745
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 12
                                },
                                "start": {
                                  "column": 37,
                                  "line": 12
                                }
                              },
                              "range": [
                                657,
                                665
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  659,
                                  665
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              656,
                              665
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 12
                              },
                              "start": {
                                "column": 36,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 12
                            },
                            "start": {
                              "column": 46,
                              "line": 12
                            }
                          },
                          "range": [
                            666,
                            674
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              668,
                              674
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 12
                              },
                              "start": {
                                "column": 48,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          655,
                          675
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 12
                          },
                          "start": {
                            "column": 35,
                            "line": 12
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 12
                                },
                                "start": {
                                  "column": 58,
                                  "line": 12
                                }
                              },
                              "range": [
                                678,
                                686
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  680,
                                  686
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              677,
                              686
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 12
                              },
                              "start": {
                                "column": 57,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 12
                            },
                            "start": {
                              "column": 67,
                              "line": 12
                            }
                          },
                          "range": [
                            687,
                            695
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              689,
                              695
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 12
                              },
                              "start": {
                                "column": 69,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          676,
                          696
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 12
                          },
                          "start": {
                            "column": 56,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      653,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 12
                      },
                      "start": {
                        "column": 33,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 93,
                                  "line": 12
                                },
                                "start": {
                                  "column": 85,
                                  "line": 12
                                }
                              },
                              "range": [
                                705,
                                713
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  707,
                                  713
                                ],
                                "loc": {
                                  "end": {
                                    "column": 93,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 87,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              704,
                              713
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 12
                              },
                              "start": {
                                "column": 84,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 100,
                              "line": 12
                            },
                            "start": {
                              "column": 94,
                              "line": 12
                            }
                          },
                          "range": [
                            714,
                            720
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                716,
                                720
                              ],
                              "loc": {
                                "end": {
                                  "column": 100,
                                  "line": 12
                                },
                                "start": {
                                  "column": 96,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              716,
                              720
                            ],
                            "loc": {
                              "end": {
                                "column": 100,
                                "line": 12
                              },
                              "start": {
                                "column": 96,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          703,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 12
                          },
                          "start": {
                            "column": 83,
                            "line": 12
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 112,
                                  "line": 12
                                },
                                "start": {
                                  "column": 104,
                                  "line": 12
                                }
                              },
                              "range": [
                                724,
                                732
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  726,
                                  732
                                ],
                                "loc": {
                                  "end": {
                                    "column": 112,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 106,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              723,
                              732
                            ],
                            "loc": {
                              "end": {
                                "column": 112,
                                "line": 12
                              },
                              "start": {
                                "column": 103,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 122,
                              "line": 12
                            },
                            "start": {
                              "column": 113,
                              "line": 12
                            }
                          },
                          "range": [
                            733,
                            742
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              735,
                              742
                            ],
                            "loc": {
                              "end": {
                                "column": 122,
                                "line": 12
                              },
                              "start": {
                                "column": 115,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          722,
                          743
                        ],
                        "loc": {
                          "end": {
                            "column": 123,
                            "line": 12
                          },
                          "start": {
                            "column": 102,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      701,
                      745
                    ],
                    "loc": {
                      "end": {
                        "column": 125,
                        "line": 12
                      },
                      "start": {
                        "column": 81,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  653,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 125,
                    "line": 12
                  },
                  "start": {
                    "column": 33,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              624,
              745
            ],
            "loc": {
              "end": {
                "column": 125,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            624,
            745
          ],
          "loc": {
            "end": {
              "column": 125,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        620,
        746
      ],
      "loc": {
        "end": {
          "column": 126,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "range": [
            747,
            756
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                787,
                789
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 40,
                  "line": 13
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "range": [
              759,
              786
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
          "optional": false,
          "range": [
            759,
            790
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        },
        "range": [
          747,
          790
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        747,
        791
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "range": [
            792,
            804
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                835,
                842
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 14
                },
                "start": {
                  "column": 43,
                  "line": 14
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "range": [
              807,
              834
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 14
              },
              "start": {
                "column": 15,
                "line": 14
              }
            }
          },
          "optional": false,
          "range": [
            807,
            843
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 14
            },
            "start": {
              "column": 15,
              "line": 14
            }
          }
        },
        "range": [
          792,
          843
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        792,
        844
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "raw": "true",
            "value": true,
            "range": [
              873,
              877
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 15
              },
              "start": {
                "column": 28,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "range": [
            845,
            872
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          845,
          878
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        845,
        879
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "range": [
            910,
            937
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          910,
          939
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        910,
        940
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 16
        },
        "start": {
          "column": 0,
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
            "name": "unionOfDifferentParameterTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 85,
                  "line": 18
                },
                "start": {
                  "column": 34,
                  "line": 18
                }
              },
              "range": [
                1003,
                1054
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 18
                                },
                                "start": {
                                  "column": 40,
                                  "line": 18
                                }
                              },
                              "range": [
                                1009,
                                1017
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1011,
                                  1017
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 18
                                  }
                                }
                              }
                            },
                            "range": [
                              1008,
                              1017
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 18
                              },
                              "start": {
                                "column": 39,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 18
                            },
                            "start": {
                              "column": 49,
                              "line": 18
                            }
                          },
                          "range": [
                            1018,
                            1026
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1020,
                              1026
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 18
                              },
                              "start": {
                                "column": 51,
                                "line": 18
                              }
                            }
                          }
                        },
                        "range": [
                          1007,
                          1027
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 18
                          },
                          "start": {
                            "column": 38,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      1005,
                      1029
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 18
                      },
                      "start": {
                        "column": 36,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 18
                                },
                                "start": {
                                  "column": 67,
                                  "line": 18
                                }
                              },
                              "range": [
                                1036,
                                1044
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1038,
                                  1044
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 18
                                  }
                                }
                              }
                            },
                            "range": [
                              1035,
                              1044
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 18
                              },
                              "start": {
                                "column": 66,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 18
                            },
                            "start": {
                              "column": 76,
                              "line": 18
                            }
                          },
                          "range": [
                            1045,
                            1051
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                1047,
                                1051
                              ],
                              "loc": {
                                "end": {
                                  "column": 82,
                                  "line": 18
                                },
                                "start": {
                                  "column": 78,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              1047,
                              1051
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 18
                              },
                              "start": {
                                "column": 78,
                                "line": 18
                              }
                            }
                          }
                        },
                        "range": [
                          1034,
                          1052
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 18
                          },
                          "start": {
                            "column": 65,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      1032,
                      1054
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 18
                      },
                      "start": {
                        "column": 63,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  1005,
                  1054
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 18
                  },
                  "start": {
                    "column": 36,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              973,
              1054
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            973,
            1054
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        969,
        1055
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "raw": "10",
            "value": 10,
            "range": [
              1087,
              1089
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 19
              },
              "start": {
                "column": 31,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "range": [
            1056,
            1086
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          1056,
          1090
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        1056,
        1091
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              1152,
              1159
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 20
              },
              "start": {
                "column": 31,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "range": [
            1121,
            1151
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          1121,
          1160
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        1121,
        1161
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "range": [
            1191,
            1221
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          1191,
          1223
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        1191,
        1224
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentNumberOfSignatures",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 111,
                  "line": 23
                },
                "start": {
                  "column": 38,
                  "line": 23
                }
              },
              "range": [
                1293,
                1366
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 23
                                },
                                "start": {
                                  "column": 44,
                                  "line": 23
                                }
                              },
                              "range": [
                                1299,
                                1307
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1301,
                                  1307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 23
                                  }
                                }
                              }
                            },
                            "range": [
                              1298,
                              1307
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 23
                              },
                              "start": {
                                "column": 43,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 23
                            },
                            "start": {
                              "column": 53,
                              "line": 23
                            }
                          },
                          "range": [
                            1308,
                            1316
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1310,
                              1316
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 23
                              },
                              "start": {
                                "column": 55,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          1297,
                          1317
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 23
                          },
                          "start": {
                            "column": 42,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      1295,
                      1319
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 23
                      },
                      "start": {
                        "column": 40,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 23
                                },
                                "start": {
                                  "column": 71,
                                  "line": 23
                                }
                              },
                              "range": [
                                1326,
                                1334
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1328,
                                  1334
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 23
                                  }
                                }
                              }
                            },
                            "range": [
                              1325,
                              1334
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 23
                              },
                              "start": {
                                "column": 70,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 86,
                              "line": 23
                            },
                            "start": {
                              "column": 80,
                              "line": 23
                            }
                          },
                          "range": [
                            1335,
                            1341
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                1337,
                                1341
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 23
                                },
                                "start": {
                                  "column": 82,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              1337,
                              1341
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 23
                              },
                              "start": {
                                "column": 82,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          1324,
                          1342
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 23
                          },
                          "start": {
                            "column": 69,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 98,
                                  "line": 23
                                },
                                "start": {
                                  "column": 90,
                                  "line": 23
                                }
                              },
                              "range": [
                                1345,
                                1353
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1347,
                                  1353
                                ],
                                "loc": {
                                  "end": {
                                    "column": 98,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 92,
                                    "line": 23
                                  }
                                }
                              }
                            },
                            "range": [
                              1344,
                              1353
                            ],
                            "loc": {
                              "end": {
                                "column": 98,
                                "line": 23
                              },
                              "start": {
                                "column": 89,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 108,
                              "line": 23
                            },
                            "start": {
                              "column": 99,
                              "line": 23
                            }
                          },
                          "range": [
                            1354,
                            1363
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              1356,
                              1363
                            ],
                            "loc": {
                              "end": {
                                "column": 108,
                                "line": 23
                              },
                              "start": {
                                "column": 101,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          1343,
                          1364
                        ],
                        "loc": {
                          "end": {
                            "column": 109,
                            "line": 23
                          },
                          "start": {
                            "column": 88,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      1322,
                      1366
                    ],
                    "loc": {
                      "end": {
                        "column": 111,
                        "line": 23
                      },
                      "start": {
                        "column": 67,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  1295,
                  1366
                ],
                "loc": {
                  "end": {
                    "column": 111,
                    "line": 23
                  },
                  "start": {
                    "column": 40,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              1259,
              1366
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            1259,
            1366
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1255,
        1367
      ],
      "loc": {
        "end": {
          "column": 112,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "range": [
            1368,
            1402
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
        "optional": false,
        "range": [
          1368,
          1404
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        1368,
        1405
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "raw": "10",
            "value": 10,
            "range": [
              1471,
              1473
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 25
              },
              "start": {
                "column": 35,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "range": [
            1436,
            1470
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          1436,
          1474
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        1436,
        1475
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              1541,
              1548
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 26
              },
              "start": {
                "column": 35,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "range": [
            1506,
            1540
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          1506,
          1549
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        1506,
        1550
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "unionWithDifferentParameterCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 100,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
                }
              },
              "range": [
                1618,
                1682
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 28
                                },
                                "start": {
                                  "column": 42,
                                  "line": 28
                                }
                              },
                              "range": [
                                1624,
                                1632
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1626,
                                  1632
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 28
                                  }
                                }
                              }
                            },
                            "range": [
                              1623,
                              1632
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 28
                              },
                              "start": {
                                "column": 41,
                                "line": 28
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 28
                            },
                            "start": {
                              "column": 51,
                              "line": 28
                            }
                          },
                          "range": [
                            1633,
                            1641
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1635,
                              1641
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 28
                              },
                              "start": {
                                "column": 53,
                                "line": 28
                              }
                            }
                          }
                        },
                        "range": [
                          1622,
                          1642
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 28
                          },
                          "start": {
                            "column": 40,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      1620,
                      1644
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 28
                      },
                      "start": {
                        "column": 38,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 28
                                },
                                "start": {
                                  "column": 69,
                                  "line": 28
                                }
                              },
                              "range": [
                                1651,
                                1659
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1653,
                                  1659
                                ],
                                "loc": {
                                  "end": {
                                    "column": 77,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 71,
                                    "line": 28
                                  }
                                }
                              }
                            },
                            "range": [
                              1650,
                              1659
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 28
                              },
                              "start": {
                                "column": 68,
                                "line": 28
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 88,
                                  "line": 28
                                },
                                "start": {
                                  "column": 80,
                                  "line": 28
                                }
                              },
                              "range": [
                                1662,
                                1670
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1664,
                                  1670
                                ],
                                "loc": {
                                  "end": {
                                    "column": 88,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 28
                                  }
                                }
                              }
                            },
                            "range": [
                              1661,
                              1670
                            ],
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 28
                              },
                              "start": {
                                "column": 79,
                                "line": 28
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 28
                            },
                            "start": {
                              "column": 89,
                              "line": 28
                            }
                          },
                          "range": [
                            1671,
                            1679
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1673,
                              1679
                            ],
                            "loc": {
                              "end": {
                                "column": 97,
                                "line": 28
                              },
                              "start": {
                                "column": 91,
                                "line": 28
                              }
                            }
                          }
                        },
                        "range": [
                          1649,
                          1680
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 28
                          },
                          "start": {
                            "column": 67,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      1647,
                      1682
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 28
                      },
                      "start": {
                        "column": 65,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  1620,
                  1682
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 28
                  },
                  "start": {
                    "column": 38,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              1586,
              1682
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            1586,
            1682
          ],
          "loc": {
            "end": {
              "column": 100,
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
        1582,
        1684
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "range": [
            1685,
            1717
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          1685,
          1719
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        1685,
        1720
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              1772,
              1779
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 30
              },
              "start": {
                "column": 33,
                "line": 30
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "range": [
            1739,
            1771
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          1739,
          1780
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        1739,
        1781
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              1833,
              1840
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 31
              },
              "start": {
                "column": 33,
                "line": 31
              }
            }
          },
          {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              1842,
              1844
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 31
              },
              "start": {
                "column": 42,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "range": [
            1800,
            1832
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          1800,
          1845
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        1800,
        1846
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 108,
                  "line": 33
                },
                "start": {
                  "column": 31,
                  "line": 33
                }
              },
              "range": [
                1884,
                1961
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 33
                                },
                                "start": {
                                  "column": 37,
                                  "line": 33
                                }
                              },
                              "range": [
                                1890,
                                1898
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1892,
                                  1898
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 33
                                  }
                                }
                              }
                            },
                            "range": [
                              1889,
                              1898
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 33
                              },
                              "start": {
                                "column": 36,
                                "line": 33
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 33
                                },
                                "start": {
                                  "column": 49,
                                  "line": 33
                                }
                              },
                              "range": [
                                1902,
                                1910
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1904,
                                  1910
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 33
                                  }
                                }
                              }
                            },
                            "range": [
                              1900,
                              1910
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 33
                              },
                              "start": {
                                "column": 47,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 33
                            },
                            "start": {
                              "column": 58,
                              "line": 33
                            }
                          },
                          "range": [
                            1911,
                            1919
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1913,
                              1919
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 33
                              },
                              "start": {
                                "column": 60,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          1888,
                          1920
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 33
                          },
                          "start": {
                            "column": 35,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "range": [
                      1886,
                      1922
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 33
                      },
                      "start": {
                        "column": 33,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 33
                                },
                                "start": {
                                  "column": 76,
                                  "line": 33
                                }
                              },
                              "range": [
                                1929,
                                1937
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1931,
                                  1937
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 33
                                  }
                                }
                              }
                            },
                            "range": [
                              1928,
                              1937
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 33
                              },
                              "start": {
                                "column": 75,
                                "line": 33
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 96,
                                  "line": 33
                                },
                                "start": {
                                  "column": 88,
                                  "line": 33
                                }
                              },
                              "range": [
                                1941,
                                1949
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1943,
                                  1949
                                ],
                                "loc": {
                                  "end": {
                                    "column": 96,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 90,
                                    "line": 33
                                  }
                                }
                              }
                            },
                            "range": [
                              1939,
                              1949
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 33
                              },
                              "start": {
                                "column": 86,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 105,
                              "line": 33
                            },
                            "start": {
                              "column": 97,
                              "line": 33
                            }
                          },
                          "range": [
                            1950,
                            1958
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1952,
                              1958
                            ],
                            "loc": {
                              "end": {
                                "column": 105,
                                "line": 33
                              },
                              "start": {
                                "column": 99,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          1927,
                          1959
                        ],
                        "loc": {
                          "end": {
                            "column": 106,
                            "line": 33
                          },
                          "start": {
                            "column": 74,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "range": [
                      1925,
                      1961
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 33
                      },
                      "start": {
                        "column": 72,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  1886,
                  1961
                ],
                "loc": {
                  "end": {
                    "column": 108,
                    "line": 33
                  },
                  "start": {
                    "column": 33,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              1857,
              1961
            ],
            "loc": {
              "end": {
                "column": 108,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": null,
          "range": [
            1857,
            1961
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1853,
        1962
      ],
      "loc": {
        "end": {
          "column": 109,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            1963,
            1971
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2002,
                2009
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 34
                },
                "start": {
                  "column": 39,
                  "line": 34
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "range": [
              1974,
              2001
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 34
              },
              "start": {
                "column": 11,
                "line": 34
              }
            }
          },
          "optional": false,
          "range": [
            1974,
            2010
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 34
            },
            "start": {
              "column": 11,
              "line": 34
            }
          }
        },
        "range": [
          1963,
          2010
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1963,
        2011
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2012,
            2020
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2051,
                2058
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 35
                },
                "start": {
                  "column": 39,
                  "line": 35
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                2060,
                2062
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 35
                },
                "start": {
                  "column": 48,
                  "line": 35
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "range": [
              2023,
              2050
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 35
              },
              "start": {
                "column": 11,
                "line": 35
              }
            }
          },
          "optional": false,
          "range": [
            2023,
            2063
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 35
            },
            "start": {
              "column": 11,
              "line": 35
            }
          }
        },
        "range": [
          2012,
          2063
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        2012,
        2064
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 35
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2065,
            2073
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2104,
                2111
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 36
                },
                "start": {
                  "column": 39,
                  "line": 36
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                2113,
                2120
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 36
                },
                "start": {
                  "column": 48,
                  "line": 36
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "range": [
              2076,
              2103
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 36
              },
              "start": {
                "column": 11,
                "line": 36
              }
            }
          },
          "optional": false,
          "range": [
            2076,
            2121
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 36
            },
            "start": {
              "column": 11,
              "line": 36
            }
          }
        },
        "range": [
          2065,
          2121
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        2065,
        2122
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2150,
            2158
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "range": [
              2161,
              2188
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 37
              },
              "start": {
                "column": 11,
                "line": 37
              }
            }
          },
          "optional": false,
          "range": [
            2161,
            2190
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 37
            },
            "start": {
              "column": 11,
              "line": 37
            }
          }
        },
        "range": [
          2150,
          2190
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        2150,
        2191
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 106,
                  "line": 39
                },
                "start": {
                  "column": 31,
                  "line": 39
                }
              },
              "range": [
                2233,
                2308
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 39
                                },
                                "start": {
                                  "column": 37,
                                  "line": 39
                                }
                              },
                              "range": [
                                2239,
                                2247
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  2241,
                                  2247
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 39
                                  }
                                }
                              }
                            },
                            "range": [
                              2238,
                              2247
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 39
                              },
                              "start": {
                                "column": 36,
                                "line": 39
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 39
                                },
                                "start": {
                                  "column": 49,
                                  "line": 39
                                }
                              },
                              "range": [
                                2251,
                                2259
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2253,
                                  2259
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 39
                                  }
                                }
                              }
                            },
                            "range": [
                              2249,
                              2259
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 39
                              },
                              "start": {
                                "column": 47,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 39
                            },
                            "start": {
                              "column": 58,
                              "line": 39
                            }
                          },
                          "range": [
                            2260,
                            2268
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              2262,
                              2268
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 39
                              },
                              "start": {
                                "column": 60,
                                "line": 39
                              }
                            }
                          }
                        },
                        "range": [
                          2237,
                          2269
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 39
                          },
                          "start": {
                            "column": 35,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      2235,
                      2271
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 39
                      },
                      "start": {
                        "column": 33,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 39
                                },
                                "start": {
                                  "column": 76,
                                  "line": 39
                                }
                              },
                              "range": [
                                2278,
                                2286
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  2280,
                                  2286
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 39
                                  }
                                }
                              }
                            },
                            "range": [
                              2277,
                              2286
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 39
                              },
                              "start": {
                                "column": 75,
                                "line": 39
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 95,
                                  "line": 39
                                },
                                "start": {
                                  "column": 87,
                                  "line": 39
                                }
                              },
                              "range": [
                                2289,
                                2297
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2291,
                                  2297
                                ],
                                "loc": {
                                  "end": {
                                    "column": 95,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 89,
                                    "line": 39
                                  }
                                }
                              }
                            },
                            "range": [
                              2288,
                              2297
                            ],
                            "loc": {
                              "end": {
                                "column": 95,
                                "line": 39
                              },
                              "start": {
                                "column": 86,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 104,
                              "line": 39
                            },
                            "start": {
                              "column": 96,
                              "line": 39
                            }
                          },
                          "range": [
                            2298,
                            2306
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              2300,
                              2306
                            ],
                            "loc": {
                              "end": {
                                "column": 104,
                                "line": 39
                              },
                              "start": {
                                "column": 98,
                                "line": 39
                              }
                            }
                          }
                        },
                        "range": [
                          2276,
                          2306
                        ],
                        "loc": {
                          "end": {
                            "column": 104,
                            "line": 39
                          },
                          "start": {
                            "column": 74,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      2274,
                      2308
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 39
                      },
                      "start": {
                        "column": 72,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  2235,
                  2308
                ],
                "loc": {
                  "end": {
                    "column": 106,
                    "line": 39
                  },
                  "start": {
                    "column": 33,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              2206,
              2308
            ],
            "loc": {
              "end": {
                "column": 106,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          "init": null,
          "range": [
            2206,
            2308
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2202,
        2309
      ],
      "loc": {
        "end": {
          "column": 107,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2310,
            2318
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2349,
                2356
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 40
                },
                "start": {
                  "column": 39,
                  "line": 40
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "range": [
              2321,
              2348
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 40
              },
              "start": {
                "column": 11,
                "line": 40
              }
            }
          },
          "optional": false,
          "range": [
            2321,
            2357
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 40
            },
            "start": {
              "column": 11,
              "line": 40
            }
          }
        },
        "range": [
          2310,
          2357
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        2310,
        2358
      ],
      "loc": {
        "end": {
          "column": 48,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2386,
            2394
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2425,
                2432
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 41
                },
                "start": {
                  "column": 39,
                  "line": 41
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                2434,
                2436
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 41
                },
                "start": {
                  "column": 48,
                  "line": 41
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "range": [
              2397,
              2424
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 41
              },
              "start": {
                "column": 11,
                "line": 41
              }
            }
          },
          "optional": false,
          "range": [
            2397,
            2437
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 41
            },
            "start": {
              "column": 11,
              "line": 41
            }
          }
        },
        "range": [
          2386,
          2437
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        2386,
        2438
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2466,
            2474
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2505,
                2512
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 42
                },
                "start": {
                  "column": 39,
                  "line": 42
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                2514,
                2521
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 42
                },
                "start": {
                  "column": 48,
                  "line": 42
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "range": [
              2477,
              2504
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 42
              },
              "start": {
                "column": 11,
                "line": 42
              }
            }
          },
          "optional": false,
          "range": [
            2477,
            2522
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 42
            },
            "start": {
              "column": 11,
              "line": 42
            }
          }
        },
        "range": [
          2466,
          2522
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        2466,
        2523
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2551,
            2559
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "range": [
              2562,
              2589
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 43
              },
              "start": {
                "column": 11,
                "line": 43
              }
            }
          },
          "optional": false,
          "range": [
            2562,
            2591
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 43
            },
            "start": {
              "column": 11,
              "line": 43
            }
          }
        },
        "range": [
          2551,
          2591
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        2551,
        2592
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 96,
                  "line": 45
                },
                "start": {
                  "column": 31,
                  "line": 45
                }
              },
              "range": [
                2652,
                2717
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 45
                                },
                                "start": {
                                  "column": 37,
                                  "line": 45
                                }
                              },
                              "range": [
                                2658,
                                2666
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  2660,
                                  2666
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 45
                                  }
                                }
                              }
                            },
                            "range": [
                              2657,
                              2666
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 45
                              },
                              "start": {
                                "column": 36,
                                "line": 45
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 45
                                },
                                "start": {
                                  "column": 49,
                                  "line": 45
                                }
                              },
                              "range": [
                                2670,
                                2678
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2672,
                                  2678
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 45
                                  }
                                }
                              }
                            },
                            "range": [
                              2668,
                              2678
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 45
                              },
                              "start": {
                                "column": 47,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 45
                            },
                            "start": {
                              "column": 58,
                              "line": 45
                            }
                          },
                          "range": [
                            2679,
                            2687
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              2681,
                              2687
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 45
                              },
                              "start": {
                                "column": 60,
                                "line": 45
                              }
                            }
                          }
                        },
                        "range": [
                          2656,
                          2688
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 45
                          },
                          "start": {
                            "column": 35,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "range": [
                      2654,
                      2690
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 45
                      },
                      "start": {
                        "column": 33,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 45
                                },
                                "start": {
                                  "column": 76,
                                  "line": 45
                                }
                              },
                              "range": [
                                2697,
                                2705
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  2699,
                                  2705
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 45
                                  }
                                }
                              }
                            },
                            "range": [
                              2696,
                              2705
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 45
                              },
                              "start": {
                                "column": 75,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 45
                            },
                            "start": {
                              "column": 85,
                              "line": 45
                            }
                          },
                          "range": [
                            2706,
                            2714
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              2708,
                              2714
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 45
                              },
                              "start": {
                                "column": 87,
                                "line": 45
                              }
                            }
                          }
                        },
                        "range": [
                          2695,
                          2715
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 45
                          },
                          "start": {
                            "column": 74,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "range": [
                      2693,
                      2717
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 45
                      },
                      "start": {
                        "column": 72,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  2654,
                  2717
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 45
                  },
                  "start": {
                    "column": 33,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              2625,
              2717
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          "init": null,
          "range": [
            2625,
            2717
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2621,
        2718
      ],
      "loc": {
        "end": {
          "column": 97,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2719,
            2727
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2758,
                2765
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 46
                },
                "start": {
                  "column": 39,
                  "line": 46
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "range": [
              2730,
              2757
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 46
              },
              "start": {
                "column": 11,
                "line": 46
              }
            }
          },
          "optional": false,
          "range": [
            2730,
            2766
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 46
            },
            "start": {
              "column": 11,
              "line": 46
            }
          }
        },
        "range": [
          2719,
          2766
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        2719,
        2767
      ],
      "loc": {
        "end": {
          "column": 48,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2768,
            2776
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2807,
                2814
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 47
                },
                "start": {
                  "column": 39,
                  "line": 47
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                2816,
                2818
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 47
                },
                "start": {
                  "column": 48,
                  "line": 47
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "range": [
              2779,
              2806
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 47
              },
              "start": {
                "column": 11,
                "line": 47
              }
            }
          },
          "optional": false,
          "range": [
            2779,
            2819
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 47
            },
            "start": {
              "column": 11,
              "line": 47
            }
          }
        },
        "range": [
          2768,
          2819
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        2768,
        2820
      ],
      "loc": {
        "end": {
          "column": 52,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2827,
            2835
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                2866,
                2873
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 48
                },
                "start": {
                  "column": 39,
                  "line": 48
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                2875,
                2882
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 48
                },
                "start": {
                  "column": 48,
                  "line": 48
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "range": [
              2838,
              2865
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 48
              },
              "start": {
                "column": 11,
                "line": 48
              }
            }
          },
          "optional": false,
          "range": [
            2838,
            2883
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 48
            },
            "start": {
              "column": 11,
              "line": 48
            }
          }
        },
        "range": [
          2827,
          2883
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        2827,
        2884
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            2908,
            2916
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "range": [
              2919,
              2946
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 49
              },
              "start": {
                "column": 11,
                "line": 49
              }
            }
          },
          "optional": false,
          "range": [
            2919,
            2948
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 49
            },
            "start": {
              "column": 11,
              "line": 49
            }
          }
        },
        "range": [
          2908,
          2948
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        2908,
        2949
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 111,
                  "line": 51
                },
                "start": {
                  "column": 27,
                  "line": 51
                }
              },
              "range": [
                2997,
                3081
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 51
                                },
                                "start": {
                                  "column": 33,
                                  "line": 51
                                }
                              },
                              "range": [
                                3003,
                                3011
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  3005,
                                  3011
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 51
                                  }
                                }
                              }
                            },
                            "range": [
                              3002,
                              3011
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 51
                              },
                              "start": {
                                "column": 32,
                                "line": 51
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                3016,
                                3017
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 51
                                },
                                "start": {
                                  "column": 46,
                                  "line": 51
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 51
                                },
                                "start": {
                                  "column": 47,
                                  "line": 51
                                }
                              },
                              "range": [
                                3017,
                                3027
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3019,
                                    3025
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 51
                                    }
                                  }
                                },
                                "range": [
                                  3019,
                                  3027
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 51
                                  }
                                }
                              }
                            },
                            "range": [
                              3013,
                              3027
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 51
                              },
                              "start": {
                                "column": 43,
                                "line": 51
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 51
                            },
                            "start": {
                              "column": 58,
                              "line": 51
                            }
                          },
                          "range": [
                            3028,
                            3036
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3030,
                              3036
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 51
                              },
                              "start": {
                                "column": 60,
                                "line": 51
                              }
                            }
                          }
                        },
                        "range": [
                          3001,
                          3037
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 51
                          },
                          "start": {
                            "column": 31,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "range": [
                      2999,
                      3039
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 51
                      },
                      "start": {
                        "column": 29,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 51
                                },
                                "start": {
                                  "column": 76,
                                  "line": 51
                                }
                              },
                              "range": [
                                3046,
                                3054
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  3048,
                                  3054
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 51
                                  }
                                }
                              }
                            },
                            "range": [
                              3045,
                              3054
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 51
                              },
                              "start": {
                                "column": 75,
                                "line": 51
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                3059,
                                3060
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 51
                                },
                                "start": {
                                  "column": 89,
                                  "line": 51
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 100,
                                  "line": 51
                                },
                                "start": {
                                  "column": 90,
                                  "line": 51
                                }
                              },
                              "range": [
                                3060,
                                3070
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3062,
                                    3068
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 98,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 92,
                                      "line": 51
                                    }
                                  }
                                },
                                "range": [
                                  3062,
                                  3070
                                ],
                                "loc": {
                                  "end": {
                                    "column": 100,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 92,
                                    "line": 51
                                  }
                                }
                              }
                            },
                            "range": [
                              3056,
                              3070
                            ],
                            "loc": {
                              "end": {
                                "column": 100,
                                "line": 51
                              },
                              "start": {
                                "column": 86,
                                "line": 51
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 109,
                              "line": 51
                            },
                            "start": {
                              "column": 101,
                              "line": 51
                            }
                          },
                          "range": [
                            3071,
                            3079
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              3073,
                              3079
                            ],
                            "loc": {
                              "end": {
                                "column": 109,
                                "line": 51
                              },
                              "start": {
                                "column": 103,
                                "line": 51
                              }
                            }
                          }
                        },
                        "range": [
                          3044,
                          3079
                        ],
                        "loc": {
                          "end": {
                            "column": 109,
                            "line": 51
                          },
                          "start": {
                            "column": 74,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "range": [
                      3042,
                      3081
                    ],
                    "loc": {
                      "end": {
                        "column": 111,
                        "line": 51
                      },
                      "start": {
                        "column": 72,
                        "line": 51
                      }
                    }
                  }
                ],
                "range": [
                  2999,
                  3081
                ],
                "loc": {
                  "end": {
                    "column": 111,
                    "line": 51
                  },
                  "start": {
                    "column": 29,
                    "line": 51
                  }
                }
              }
            },
            "range": [
              2974,
              3081
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          "init": null,
          "range": [
            2974,
            3081
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 51
            },
            "start": {
              "column": 4,
              "line": 51
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2970,
        3082
      ],
      "loc": {
        "end": {
          "column": 112,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3083,
            3091
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3118,
                3125
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 52
                },
                "start": {
                  "column": 35,
                  "line": 52
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "range": [
              3094,
              3117
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 52
              },
              "start": {
                "column": 11,
                "line": 52
              }
            }
          },
          "optional": false,
          "range": [
            3094,
            3126
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 52
            },
            "start": {
              "column": 11,
              "line": 52
            }
          }
        },
        "range": [
          3083,
          3126
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        3083,
        3127
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3128,
            3136
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3163,
                3170
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 53
                },
                "start": {
                  "column": 35,
                  "line": 53
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                3172,
                3174
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 53
                },
                "start": {
                  "column": 44,
                  "line": 53
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "range": [
              3139,
              3162
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 53
              },
              "start": {
                "column": 11,
                "line": 53
              }
            }
          },
          "optional": false,
          "range": [
            3139,
            3175
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 53
            },
            "start": {
              "column": 11,
              "line": 53
            }
          }
        },
        "range": [
          3128,
          3175
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        3128,
        3176
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3177,
            3185
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3212,
                3219
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 54
                },
                "start": {
                  "column": 35,
                  "line": 54
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                3221,
                3223
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 54
                },
                "start": {
                  "column": 44,
                  "line": 54
                }
              }
            },
            {
              "type": "Literal",
              "raw": "11",
              "value": 11,
              "range": [
                3225,
                3227
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 54
                },
                "start": {
                  "column": 48,
                  "line": 54
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "range": [
              3188,
              3211
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 54
              },
              "start": {
                "column": 11,
                "line": 54
              }
            }
          },
          "optional": false,
          "range": [
            3188,
            3228
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 54
            },
            "start": {
              "column": 11,
              "line": 54
            }
          }
        },
        "range": [
          3177,
          3228
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        3177,
        3229
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3230,
            3238
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3265,
                3272
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 55
                },
                "start": {
                  "column": 35,
                  "line": 55
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                3274,
                3281
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 55
                },
                "start": {
                  "column": 44,
                  "line": 55
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "range": [
              3241,
              3264
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 55
              },
              "start": {
                "column": 11,
                "line": 55
              }
            }
          },
          "optional": false,
          "range": [
            3241,
            3282
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 55
            },
            "start": {
              "column": 11,
              "line": 55
            }
          }
        },
        "range": [
          3230,
          3282
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        3230,
        3283
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 55
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3311,
            3319
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "range": [
              3322,
              3345
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 56
              },
              "start": {
                "column": 11,
                "line": 56
              }
            }
          },
          "optional": false,
          "range": [
            3322,
            3347
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 56
            },
            "start": {
              "column": 11,
              "line": 56
            }
          }
        },
        "range": [
          3311,
          3347
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        3311,
        3348
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 106,
                  "line": 58
                },
                "start": {
                  "column": 27,
                  "line": 58
                }
              },
              "range": [
                3386,
                3465
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 58
                                },
                                "start": {
                                  "column": 33,
                                  "line": 58
                                }
                              },
                              "range": [
                                3392,
                                3400
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  3394,
                                  3400
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 58
                                  }
                                }
                              }
                            },
                            "range": [
                              3391,
                              3400
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 58
                              },
                              "start": {
                                "column": 32,
                                "line": 58
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                3405,
                                3406
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 58
                                },
                                "start": {
                                  "column": 46,
                                  "line": 58
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 58
                                },
                                "start": {
                                  "column": 47,
                                  "line": 58
                                }
                              },
                              "range": [
                                3406,
                                3416
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3408,
                                    3414
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 58
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 58
                                    }
                                  }
                                },
                                "range": [
                                  3408,
                                  3416
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 58
                                  }
                                }
                              }
                            },
                            "range": [
                              3402,
                              3416
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 58
                              },
                              "start": {
                                "column": 43,
                                "line": 58
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 58
                            },
                            "start": {
                              "column": 58,
                              "line": 58
                            }
                          },
                          "range": [
                            3417,
                            3425
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3419,
                              3425
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 58
                              },
                              "start": {
                                "column": 60,
                                "line": 58
                              }
                            }
                          }
                        },
                        "range": [
                          3390,
                          3426
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 58
                          },
                          "start": {
                            "column": 31,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      3388,
                      3428
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 58
                      },
                      "start": {
                        "column": 29,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 58
                                },
                                "start": {
                                  "column": 76,
                                  "line": 58
                                }
                              },
                              "range": [
                                3435,
                                3443
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  3437,
                                  3443
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 58
                                  }
                                }
                              }
                            },
                            "range": [
                              3434,
                              3443
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 58
                              },
                              "start": {
                                "column": 75,
                                "line": 58
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 95,
                                  "line": 58
                                },
                                "start": {
                                  "column": 87,
                                  "line": 58
                                }
                              },
                              "range": [
                                3446,
                                3454
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  3448,
                                  3454
                                ],
                                "loc": {
                                  "end": {
                                    "column": 95,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 89,
                                    "line": 58
                                  }
                                }
                              }
                            },
                            "range": [
                              3445,
                              3454
                            ],
                            "loc": {
                              "end": {
                                "column": 95,
                                "line": 58
                              },
                              "start": {
                                "column": 86,
                                "line": 58
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 104,
                              "line": 58
                            },
                            "start": {
                              "column": 96,
                              "line": 58
                            }
                          },
                          "range": [
                            3455,
                            3463
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              3457,
                              3463
                            ],
                            "loc": {
                              "end": {
                                "column": 104,
                                "line": 58
                              },
                              "start": {
                                "column": 98,
                                "line": 58
                              }
                            }
                          }
                        },
                        "range": [
                          3433,
                          3463
                        ],
                        "loc": {
                          "end": {
                            "column": 104,
                            "line": 58
                          },
                          "start": {
                            "column": 74,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      3431,
                      3465
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 58
                      },
                      "start": {
                        "column": 72,
                        "line": 58
                      }
                    }
                  }
                ],
                "range": [
                  3388,
                  3465
                ],
                "loc": {
                  "end": {
                    "column": 106,
                    "line": 58
                  },
                  "start": {
                    "column": 29,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              3363,
              3465
            ],
            "loc": {
              "end": {
                "column": 106,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          },
          "init": null,
          "range": [
            3363,
            3465
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 58
            },
            "start": {
              "column": 4,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        3359,
        3466
      ],
      "loc": {
        "end": {
          "column": 107,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3467,
            3475
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3502,
                3509
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 59
                },
                "start": {
                  "column": 35,
                  "line": 59
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "range": [
              3478,
              3501
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 59
              },
              "start": {
                "column": 11,
                "line": 59
              }
            }
          },
          "optional": false,
          "range": [
            3478,
            3510
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 59
            },
            "start": {
              "column": 11,
              "line": 59
            }
          }
        },
        "range": [
          3467,
          3510
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        3467,
        3511
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3539,
            3547
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3574,
                3581
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 60
                },
                "start": {
                  "column": 35,
                  "line": 60
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                3583,
                3585
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 60
                },
                "start": {
                  "column": 44,
                  "line": 60
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "range": [
              3550,
              3573
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 60
              },
              "start": {
                "column": 11,
                "line": 60
              }
            }
          },
          "optional": false,
          "range": [
            3550,
            3586
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 60
            },
            "start": {
              "column": 11,
              "line": 60
            }
          }
        },
        "range": [
          3539,
          3586
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        3539,
        3587
      ],
      "loc": {
        "end": {
          "column": 48,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3615,
            3623
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3650,
                3657
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 61
                },
                "start": {
                  "column": 35,
                  "line": 61
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                3659,
                3661
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 61
                },
                "start": {
                  "column": 44,
                  "line": 61
                }
              }
            },
            {
              "type": "Literal",
              "raw": "11",
              "value": 11,
              "range": [
                3663,
                3665
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 61
                },
                "start": {
                  "column": 48,
                  "line": 61
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "range": [
              3626,
              3649
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 61
              },
              "start": {
                "column": 11,
                "line": 61
              }
            }
          },
          "optional": false,
          "range": [
            3626,
            3666
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 61
            },
            "start": {
              "column": 11,
              "line": 61
            }
          }
        },
        "range": [
          3615,
          3666
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 61
          }
        }
      },
      "range": [
        3615,
        3667
      ],
      "loc": {
        "end": {
          "column": 52,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3695,
            3703
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
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3730,
                3737
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 62
                },
                "start": {
                  "column": 35,
                  "line": 62
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                3739,
                3746
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 62
                },
                "start": {
                  "column": 44,
                  "line": 62
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "range": [
              3706,
              3729
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 62
              },
              "start": {
                "column": 11,
                "line": 62
              }
            }
          },
          "optional": false,
          "range": [
            3706,
            3747
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 62
            },
            "start": {
              "column": 11,
              "line": 62
            }
          }
        },
        "range": [
          3695,
          3747
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 62
          },
          "start": {
            "column": 0,
            "line": 62
          }
        }
      },
      "range": [
        3695,
        3748
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3776,
            3784
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "range": [
              3787,
              3810
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 63
              },
              "start": {
                "column": 11,
                "line": 63
              }
            }
          },
          "optional": false,
          "range": [
            3787,
            3812
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 63
            },
            "start": {
              "column": 11,
              "line": 63
            }
          }
        },
        "range": [
          3776,
          3812
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 63
          },
          "start": {
            "column": 0,
            "line": 63
          }
        }
      },
      "range": [
        3776,
        3813
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 95,
                  "line": 65
                },
                "start": {
                  "column": 27,
                  "line": 65
                }
              },
              "range": [
                3869,
                3937
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 65
                                },
                                "start": {
                                  "column": 33,
                                  "line": 65
                                }
                              },
                              "range": [
                                3875,
                                3883
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  3877,
                                  3883
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 65
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 65
                                  }
                                }
                              }
                            },
                            "range": [
                              3874,
                              3883
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 65
                              },
                              "start": {
                                "column": 32,
                                "line": 65
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                3888,
                                3889
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 65
                                },
                                "start": {
                                  "column": 46,
                                  "line": 65
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 65
                                },
                                "start": {
                                  "column": 47,
                                  "line": 65
                                }
                              },
                              "range": [
                                3889,
                                3899
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3891,
                                    3897
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 65
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 65
                                    }
                                  }
                                },
                                "range": [
                                  3891,
                                  3899
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 65
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 65
                                  }
                                }
                              }
                            },
                            "range": [
                              3885,
                              3899
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 65
                              },
                              "start": {
                                "column": 43,
                                "line": 65
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 65
                            },
                            "start": {
                              "column": 58,
                              "line": 65
                            }
                          },
                          "range": [
                            3900,
                            3908
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3902,
                              3908
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 65
                              },
                              "start": {
                                "column": 60,
                                "line": 65
                              }
                            }
                          }
                        },
                        "range": [
                          3873,
                          3909
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 65
                          },
                          "start": {
                            "column": 31,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "range": [
                      3871,
                      3911
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 65
                      },
                      "start": {
                        "column": 29,
                        "line": 65
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 65
                                },
                                "start": {
                                  "column": 76,
                                  "line": 65
                                }
                              },
                              "range": [
                                3918,
                                3926
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  3920,
                                  3926
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 65
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 65
                                  }
                                }
                              }
                            },
                            "range": [
                              3917,
                              3926
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 65
                              },
                              "start": {
                                "column": 75,
                                "line": 65
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 65
                            },
                            "start": {
                              "column": 85,
                              "line": 65
                            }
                          },
                          "range": [
                            3927,
                            3935
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              3929,
                              3935
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 65
                              },
                              "start": {
                                "column": 87,
                                "line": 65
                              }
                            }
                          }
                        },
                        "range": [
                          3916,
                          3935
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 65
                          },
                          "start": {
                            "column": 74,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "range": [
                      3914,
                      3937
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 65
                      },
                      "start": {
                        "column": 72,
                        "line": 65
                      }
                    }
                  }
                ],
                "range": [
                  3871,
                  3937
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 65
                  },
                  "start": {
                    "column": 29,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              3846,
              3937
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          "init": null,
          "range": [
            3846,
            3937
          ],
          "loc": {
            "end": {
              "column": 95,
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
      "kind": "var",
      "range": [
        3842,
        3938
      ],
      "loc": {
        "end": {
          "column": 96,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3939,
            3947
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 66
            },
            "start": {
              "column": 0,
              "line": 66
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                3974,
                3981
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 66
                },
                "start": {
                  "column": 35,
                  "line": 66
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "range": [
              3950,
              3973
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 66
              },
              "start": {
                "column": 11,
                "line": 66
              }
            }
          },
          "optional": false,
          "range": [
            3950,
            3982
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 66
            },
            "start": {
              "column": 11,
              "line": 66
            }
          }
        },
        "range": [
          3939,
          3982
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 66
          },
          "start": {
            "column": 0,
            "line": 66
          }
        }
      },
      "range": [
        3939,
        3983
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            3984,
            3992
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 67
            },
            "start": {
              "column": 0,
              "line": 67
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                4019,
                4026
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 67
                },
                "start": {
                  "column": 35,
                  "line": 67
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                4028,
                4030
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 67
                },
                "start": {
                  "column": 44,
                  "line": 67
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "range": [
              3995,
              4018
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 67
              },
              "start": {
                "column": 11,
                "line": 67
              }
            }
          },
          "optional": false,
          "range": [
            3995,
            4031
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 67
            },
            "start": {
              "column": 11,
              "line": 67
            }
          }
        },
        "range": [
          3984,
          4031
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 67
          },
          "start": {
            "column": 0,
            "line": 67
          }
        }
      },
      "range": [
        3984,
        4032
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            4060,
            4068
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 68
            },
            "start": {
              "column": 0,
              "line": 68
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                4095,
                4102
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 68
                },
                "start": {
                  "column": 35,
                  "line": 68
                }
              }
            },
            {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                4104,
                4106
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 68
                },
                "start": {
                  "column": 44,
                  "line": 68
                }
              }
            },
            {
              "type": "Literal",
              "raw": "11",
              "value": 11,
              "range": [
                4108,
                4110
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 68
                },
                "start": {
                  "column": 48,
                  "line": 68
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "range": [
              4071,
              4094
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 68
              },
              "start": {
                "column": 11,
                "line": 68
              }
            }
          },
          "optional": false,
          "range": [
            4071,
            4111
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 68
            },
            "start": {
              "column": 11,
              "line": 68
            }
          }
        },
        "range": [
          4060,
          4111
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        4060,
        4112
      ],
      "loc": {
        "end": {
          "column": 52,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            4140,
            4148
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'hello'",
              "value": "hello",
              "range": [
                4175,
                4182
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 69
                },
                "start": {
                  "column": 35,
                  "line": 69
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                4184,
                4191
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 69
                },
                "start": {
                  "column": 44,
                  "line": 69
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "range": [
              4151,
              4174
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 69
              },
              "start": {
                "column": 11,
                "line": 69
              }
            }
          },
          "optional": false,
          "range": [
            4151,
            4192
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 69
            },
            "start": {
              "column": 11,
              "line": 69
            }
          }
        },
        "range": [
          4140,
          4192
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        4140,
        4193
      ],
      "loc": {
        "end": {
          "column": 53,
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
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            4217,
            4225
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 70
            },
            "start": {
              "column": 0,
              "line": 70
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "range": [
              4228,
              4251
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 70
              },
              "start": {
                "column": 11,
                "line": 70
              }
            }
          },
          "optional": false,
          "range": [
            4228,
            4253
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 70
            },
            "start": {
              "column": 11,
              "line": 70
            }
          }
        },
        "range": [
          4217,
          4253
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 70
          },
          "start": {
            "column": 0,
            "line": 70
          }
        }
      },
      "range": [
        4217,
        4254
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 96,
                  "line": 72
                },
                "start": {
                  "column": 27,
                  "line": 72
                }
              },
              "range": [
                4310,
                4379
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                4318,
                                4319
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 72
                                },
                                "start": {
                                  "column": 35,
                                  "line": 72
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 72
                                },
                                "start": {
                                  "column": 36,
                                  "line": 72
                                }
                              },
                              "range": [
                                4319,
                                4329
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    4321,
                                    4327
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 72
                                    }
                                  }
                                },
                                "range": [
                                  4321,
                                  4329
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 72
                                  }
                                }
                              }
                            },
                            "range": [
                              4315,
                              4329
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 72
                              },
                              "start": {
                                "column": 32,
                                "line": 72
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 72
                            },
                            "start": {
                              "column": 47,
                              "line": 72
                            }
                          },
                          "range": [
                            4330,
                            4338
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              4332,
                              4338
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 72
                              },
                              "start": {
                                "column": 49,
                                "line": 72
                              }
                            }
                          }
                        },
                        "range": [
                          4314,
                          4339
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 72
                          },
                          "start": {
                            "column": 31,
                            "line": 72
                          }
                        }
                      }
                    ],
                    "range": [
                      4312,
                      4341
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 72
                      },
                      "start": {
                        "column": 29,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 72
                                },
                                "start": {
                                  "column": 65,
                                  "line": 72
                                }
                              },
                              "range": [
                                4348,
                                4356
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  4350,
                                  4356
                                ],
                                "loc": {
                                  "end": {
                                    "column": 73,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 67,
                                    "line": 72
                                  }
                                }
                              }
                            },
                            "range": [
                              4347,
                              4356
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 72
                              },
                              "start": {
                                "column": 64,
                                "line": 72
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 72
                                },
                                "start": {
                                  "column": 76,
                                  "line": 72
                                }
                              },
                              "range": [
                                4359,
                                4367
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  4361,
                                  4367
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 72
                                  }
                                }
                              }
                            },
                            "range": [
                              4358,
                              4367
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 72
                              },
                              "start": {
                                "column": 75,
                                "line": 72
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 72
                            },
                            "start": {
                              "column": 85,
                              "line": 72
                            }
                          },
                          "range": [
                            4368,
                            4376
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              4370,
                              4376
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 72
                              },
                              "start": {
                                "column": 87,
                                "line": 72
                              }
                            }
                          }
                        },
                        "range": [
                          4346,
                          4377
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 72
                          },
                          "start": {
                            "column": 63,
                            "line": 72
                          }
                        }
                      }
                    ],
                    "range": [
                      4344,
                      4379
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 72
                      },
                      "start": {
                        "column": 61,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  4312,
                  4379
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 72
                  },
                  "start": {
                    "column": 29,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              4287,
              4379
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          "init": null,
          "range": [
            4287,
            4379
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 72
            },
            "start": {
              "column": 4,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        4283,
        4380
      ],
      "loc": {
        "end": {
          "column": 97,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            4381,
            4389
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                4416,
                4423
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 73
                },
                "start": {
                  "column": 35,
                  "line": 73
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "range": [
              4392,
              4415
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 73
              },
              "start": {
                "column": 11,
                "line": 73
              }
            }
          },
          "optional": false,
          "range": [
            4392,
            4424
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 73
            },
            "start": {
              "column": 11,
              "line": 73
            }
          }
        },
        "range": [
          4381,
          4424
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        4381,
        4425
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "range": [
            4487,
            4495
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 74
            },
            "start": {
              "column": 0,
              "line": 74
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                4522,
                4529
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 74
                },
                "start": {
                  "column": 35,
                  "line": 74
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"world\"",
              "value": "world",
              "range": [
                4531,
                4538
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 74
                },
                "start": {
                  "column": 44,
                  "line": 74
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "range": [
              4498,
              4521
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 74
              },
              "start": {
                "column": 11,
                "line": 74
              }
            }
          },
          "optional": false,
          "range": [
            4498,
            4539
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 74
            },
            "start": {
              "column": 11,
              "line": 74
            }
          }
        },
        "range": [
          4487,
          4539
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 74
          }
        }
      },
      "range": [
        4487,
        4540
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 75
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
