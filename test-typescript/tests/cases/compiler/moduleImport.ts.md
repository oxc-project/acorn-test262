__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    204
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "XYZ",
              "optional": false,
              "range": [
                24,
                27
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    30,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    32,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "range": [
                  30,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "range": [
                  34,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                30,
                35
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              36
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              38,
              101
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                93,
                                94
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
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                95,
                                96
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 4
                                },
                                "start": {
                                  "column": 23,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              93,
                              96
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 21,
                                "line": 4
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
                            "name": "XYZ",
                            "optional": false,
                            "range": [
                              83,
                              86
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 4
                              },
                              "start": {
                                "column": 11,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pong",
                            "optional": false,
                            "range": [
                              87,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 15,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            83,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 11,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          83,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        83,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          78,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 4
                          },
                          "start": {
                            "column": 6,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        78,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 4
                        },
                        "start": {
                          "column": 6,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      74,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 2,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  70,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ping",
                "optional": false,
                "range": [
                  54,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
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
                        "column": 31,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    },
                    "range": [
                      60,
                      68
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        62,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 3
                        },
                        "start": {
                          "column": 25,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    59,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                45,
                101
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          }
        ],
        "range": [
          14,
          103
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          8,
          13
        ],
        "left": {
          "type": "TSQualifiedName",
          "range": [
            8,
            11
          ],
          "left": {
            "type": "Identifier",
            "range": [
              8,
              9
            ],
            "decorators": [],
            "name": "A",
            "optional": false,
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "right": {
            "type": "Identifier",
            "range": [
              10,
              11
            ],
            "decorators": [],
            "name": "B",
            "optional": false,
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 11,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            12,
            13
          ],
          "decorators": [],
          "name": "C",
          "optional": false,
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
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        1,
        103
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "range": [
                124,
                127
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    130,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    132,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                },
                "range": [
                  130,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  134,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "range": [
                130,
                135
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              117,
              136
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              138,
              202
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                194,
                                195
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 11
                                },
                                "start": {
                                  "column": 22,
                                  "line": 11
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                196,
                                197
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 11
                                },
                                "start": {
                                  "column": 24,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              194,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 11
                              },
                              "start": {
                                "column": 22,
                                "line": 11
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
                            "name": "ABC",
                            "optional": false,
                            "range": [
                              185,
                              188
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ping",
                            "optional": false,
                            "range": [
                              189,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 11
                              },
                              "start": {
                                "column": 17,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            185,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 11
                            },
                            "start": {
                              "column": 13,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          185,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 11
                          },
                          "start": {
                            "column": 13,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        185,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          178,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 11
                          },
                          "start": {
                            "column": 6,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          182,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 11
                          },
                          "start": {
                            "column": 10,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        178,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 11
                        },
                        "start": {
                          "column": 6,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      174,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 2,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  170,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 12
                  },
                  "start": {
                    "column": 33,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "pong",
                "optional": false,
                "range": [
                  154,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
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
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    },
                    "range": [
                      160,
                      168
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        162,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 25,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    159,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                145,
                202
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 12
              },
              "start": {
                "column": 1,
                "line": 10
              }
            }
          }
        ],
        "range": [
          114,
          204
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          112,
          113
        ],
        "decorators": [],
        "name": "X",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "kind": "module",
      "range": [
        105,
        204
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
