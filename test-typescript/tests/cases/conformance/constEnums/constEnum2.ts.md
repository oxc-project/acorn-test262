__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    353,
    519
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
            "name": "CONST",
            "optional": false,
            "range": [
              359,
              364
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "%",
            "left": {
              "type": "Literal",
              "raw": "9000",
              "value": 9000,
              "range": [
                367,
                371
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                374,
                375
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 21,
                  "line": 9
                }
              }
            },
            "range": [
              367,
              375
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "range": [
            359,
            375
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        353,
        376
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          390,
          519
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                396,
                397
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                400,
                402
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              396,
              402
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                408,
                409
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "initializer": {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Literal",
                "raw": "199",
                "value": 199,
                "range": [
                  412,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
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
                            429,
                            433
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 12
                            },
                            "start": {
                              "column": 25,
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
                            434,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 12
                            },
                            "start": {
                              "column": 30,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          429,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 12
                          },
                          "start": {
                            "column": 25,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        429,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 12
                        },
                        "start": {
                          "column": 25,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1000",
                      "value": 1000,
                      "range": [
                        445,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      429,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 12
                      },
                      "start": {
                        "column": 25,
                        "line": 12
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
                    "name": "Math",
                    "optional": false,
                    "range": [
                      418,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "floor",
                    "optional": false,
                    "range": [
                      423,
                      428
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 19,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    418,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  418,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              },
              "range": [
                412,
                450
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              408,
              450
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                456,
                457
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "initializer": {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  460,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    465,
                    468
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 13,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "%",
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
                              482,
                              486
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 13
                              },
                              "start": {
                                "column": 30,
                                "line": 13
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
                              487,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 13
                              },
                              "start": {
                                "column": 35,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            482,
                            493
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 13
                            },
                            "start": {
                              "column": 30,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          482,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 13
                          },
                          "start": {
                            "column": 30,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "8",
                        "value": 8,
                        "range": [
                          498,
                          499
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 13
                          },
                          "start": {
                            "column": 46,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        482,
                        499
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 13
                        },
                        "start": {
                          "column": 30,
                          "line": 13
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
                      "name": "Math",
                      "optional": false,
                      "range": [
                        471,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 13
                        },
                        "start": {
                          "column": 19,
                          "line": 13
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "range": [
                        476,
                        481
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      471,
                      481
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    471,
                    500
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 19,
                      "line": 13
                    }
                  }
                },
                "range": [
                  465,
                  500
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                }
              },
              "range": [
                460,
                501
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              456,
              501
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                507,
                508
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "CONST",
              "optional": false,
              "range": [
                511,
                516
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "range": [
              507,
              516
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 13,
            "line": 10
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          388,
          389
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 10
          }
        }
      },
      "range": [
        377,
        519
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 9
    }
  },
  "hashbang": null
}
```
