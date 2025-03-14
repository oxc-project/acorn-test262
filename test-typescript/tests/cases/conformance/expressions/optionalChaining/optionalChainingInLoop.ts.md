__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    253
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
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                66,
                73
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    68,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  68,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              62,
              73
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              76,
              78
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          },
          "range": [
            62,
            78
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        56,
        78
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "comp",
                    "optional": false,
                    "range": [
                      110,
                      114
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sp",
                    "optional": false,
                    "range": [
                      115,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    110,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    118,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  110,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            149,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 4
                            },
                            "start": {
                              "column": 43,
                              "line": 4
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
                            151,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 4
                            },
                            "start": {
                              "column": 45,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          149,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 4
                          },
                          "start": {
                            "column": 43,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "alternate": {
                          "type": "Literal",
                          "raw": "'0'",
                          "value": "0",
                          "range": [
                            173,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 4
                            },
                            "start": {
                              "column": 67,
                              "line": 4
                            }
                          }
                        },
                        "consequent": {
                          "type": "Literal",
                          "raw": "'1'",
                          "value": "1",
                          "range": [
                            167,
                            170
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 4
                            },
                            "start": {
                              "column": 61,
                              "line": 4
                            }
                          }
                        },
                        "test": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "comp",
                            "optional": false,
                            "range": [
                              157,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 4
                              },
                              "start": {
                                "column": 51,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "xp",
                            "optional": false,
                            "range": [
                              162,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 4
                              },
                              "start": {
                                "column": 56,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            157,
                            164
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
                        },
                        "range": [
                          157,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 4
                          },
                          "start": {
                            "column": 51,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        149,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 4
                        },
                        "start": {
                          "column": 43,
                          "line": 4
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 4
                            },
                            "start": {
                              "column": 33,
                              "line": 4
                            }
                          },
                          "range": [
                            139,
                            144
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              141,
                              144
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 4
                              },
                              "start": {
                                "column": 35,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          138,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 4
                          },
                          "start": {
                            "column": 32,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      137,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
                        "line": 4
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "comp",
                        "optional": false,
                        "range": [
                          122,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sp",
                        "optional": false,
                        "range": [
                          127,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        122,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "range": [
                        130,
                        131
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      122,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "find",
                    "optional": false,
                    "range": [
                      132,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    122,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "range": [
                  122,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              },
              "range": [
                110,
                178
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              110,
              178
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "body": {
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "range": [
                          220,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          225,
                          226
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 6
                          },
                          "start": {
                            "column": 13,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        220,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "range": [
                                  231,
                                  235
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 6
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "range": [
                                  236,
                                  237
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                231,
                                237
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 6
                                },
                                "start": {
                                  "column": 19,
                                  "line": 6
                                }
                              }
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "range": [
                                239,
                                245
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 6
                                },
                                "start": {
                                  "column": 27,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              231,
                              245
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 6
                              },
                              "start": {
                                "column": 19,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            231,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 6
                            },
                            "start": {
                              "column": 19,
                              "line": 6
                            }
                          }
                        },
                        "operator": "!",
                        "prefix": true,
                        "range": [
                          230,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        229,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      220,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    220,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                210,
                251
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "range": [
                      194,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    194,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                188,
                198
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "comp",
                "optional": false,
                "range": [
                  202,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
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
                  207,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 28,
                    "line": 5
                  }
                }
              },
              "range": [
                202,
                208
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              183,
              251
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          104,
          253
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 25,
            "line": 3
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "comp",
              "optional": false,
              "range": [
                90,
                94
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "init": null,
            "range": [
              90,
              94
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          84,
          94
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "list",
        "optional": false,
        "range": [
          98,
          102
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "range": [
        79,
        253
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
