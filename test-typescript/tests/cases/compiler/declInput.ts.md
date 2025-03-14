__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    173
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          18
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
          30,
          172
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
              "name": "f",
              "optional": false,
              "range": [
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
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
                42,
                59
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        54,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      47,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
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
                  45,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
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
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              34,
              59
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
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
              "name": "g",
              "optional": false,
              "range": [
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
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
                70,
                125
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              83,
                              84
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 7
                              },
                              "start": {
                                "column": 23,
                                "line": 7
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSTypeAssertion",
                            "expression": {
                              "type": "Literal",
                              "raw": "null",
                              "value": null,
                              "range": [
                                91,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 7
                                },
                                "start": {
                                  "column": 31,
                                  "line": 7
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  87,
                                  90
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                87,
                                90
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 7
                                },
                                "start": {
                                  "column": 27,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              86,
                              95
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 7
                              },
                              "start": {
                                "column": 26,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            83,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 7
                            },
                            "start": {
                              "column": 23,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              97,
                              98
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 7
                              },
                              "start": {
                                "column": 37,
                                "line": 7
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
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              100,
                              109
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 7
                              },
                              "start": {
                                "column": 40,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            97,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 7
                            },
                            "start": {
                              "column": 37,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              111,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 7
                              },
                              "start": {
                                "column": 51,
                                "line": 7
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Literal",
                              "raw": "4",
                              "value": 4,
                              "range": [
                                119,
                                120
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 7
                                },
                                "start": {
                                  "column": 59,
                                  "line": 7
                                }
                              }
                            },
                            "operator": "void",
                            "prefix": true,
                            "range": [
                              114,
                              120
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 7
                              },
                              "start": {
                                "column": 54,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            111,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 7
                            },
                            "start": {
                              "column": 51,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        82,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 7
                        },
                        "start": {
                          "column": 22,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      75,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  73,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
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
                  "column": 65,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              62,
              125
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
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
              "name": "h",
              "optional": false,
              "range": [
                135,
                136
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 9,
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
                136,
                170
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          164,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 8
                          },
                          "start": {
                            "column": 38,
                            "line": 8
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        164,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 8
                        },
                        "start": {
                          "column": 38,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      164,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 8
                      },
                      "start": {
                        "column": 38,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  162,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 8
                  },
                  "start": {
                    "column": 36,
                    "line": 8
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      137,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "4",
                    "value": 4,
                    "range": [
                      141,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    137,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      144,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      148,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    144,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      154,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      158,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    154,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              128,
              170
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          26,
          29
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        20,
        172
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
