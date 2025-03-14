__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    773
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          377
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                25,
                36
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
                36,
                227
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
                                  195,
                                  199
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
                                  200,
                                  201
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
                                195,
                                201
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
                                  204,
                                  205
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
                                  209,
                                  210
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
                                204,
                                210
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
                              195,
                              210
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
                            195,
                            211
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
                        181,
                        221
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
                              94,
                              95
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
                              100,
                              109
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
                            94,
                            109
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
                              113,
                              114
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
                              119,
                              128
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
                            113,
                            128
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
                          94,
                          128
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
                                134,
                                138
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
                                139,
                                140
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
                              134,
                              140
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
                              145,
                              154
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
                            134,
                            154
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
                                158,
                                162
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
                                163,
                                164
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
                              158,
                              164
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
                              169,
                              178
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
                            158,
                            178
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
                          134,
                          178
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
                        93,
                        179
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
                      89,
                      221
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
                  79,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 58,
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
                          "column": 28,
                          "line": 2
                        },
                        "start": {
                          "column": 25,
                          "line": 2
                        }
                      },
                      "range": [
                        46,
                        49
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            48,
                            49
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 2
                            },
                            "start": {
                              "column": 27,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          48,
                          49
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
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
                      45,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
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
                    37,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
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
                          60,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 2
                          },
                          "start": {
                            "column": 39,
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
                          63,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 2
                          },
                          "start": {
                            "column": 42,
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
                          66,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 2
                          },
                          "start": {
                            "column": 45,
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
                          "column": 56,
                          "line": 2
                        },
                        "start": {
                          "column": 47,
                          "line": 2
                        }
                      },
                      "range": [
                        68,
                        77
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
                                71,
                                72
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
                            },
                            "range": [
                              71,
                              72
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
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                73,
                                74
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 2
                                },
                                "start": {
                                  "column": 52,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              73,
                              74
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 2
                              },
                              "start": {
                                "column": 52,
                                "line": 2
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
                                75,
                                76
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 2
                                },
                                "start": {
                                  "column": 54,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              75,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 2
                              },
                              "start": {
                                "column": 54,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "range": [
                          70,
                          77
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 2
                          },
                          "start": {
                            "column": 49,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      59,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    51,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 2
                    },
                    "start": {
                      "column": 30,
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
              25,
              227
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
                240,
                244
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
                244,
                276
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
                          264,
                          268
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
                          269,
                          270
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
                        264,
                        270
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
                      257,
                      270
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
                  247,
                  276
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
              233,
              276
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
                289,
                293
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
                293,
                325
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
                          313,
                          317
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
                          318,
                          319
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
                        313,
                        319
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
                      306,
                      319
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
                  296,
                  325
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
              282,
              325
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
                338,
                342
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
                342,
                375
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
                          362,
                          366
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
                          367,
                          368
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
                        362,
                        368
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
                      355,
                      369
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
                  345,
                  375
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
              331,
              375
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
            "column": 19,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          18
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
                10,
                11
              ],
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
            "out": false,
            "range": [
              10,
              11
            ],
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
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        1,
        377
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
              383,
              384
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
                  394,
                  403
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
                      406,
                      407
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
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      409,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                      415,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 21
                      },
                      "start": {
                        "column": 36,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  405,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 39,
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
                391,
                393
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
              387,
              419
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            383,
            419
          ],
          "loc": {
            "end": {
              "column": 40,
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
        379,
        420
      ],
      "loc": {
        "end": {
          "column": 41,
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
                  426,
                  429
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
                  431,
                  434
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
                  436,
                  439
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
              425,
              440
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
                      444,
                      445
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
                      446,
                      450
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
                    444,
                    450
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
                  444,
                  452
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
                      454,
                      455
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
                      456,
                      460
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
                    454,
                    460
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
                  454,
                  462
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
                      464,
                      465
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
                      466,
                      470
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
                    464,
                    470
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
                  464,
                  472
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
              443,
              473
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
            425,
            473
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
        421,
        474
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
              480,
              481
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
                  491,
                  493
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
                      496,
                      497
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
                    "raw": "true",
                    "value": true,
                    "range": [
                      499,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                      505,
                      509
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 24
                      },
                      "start": {
                        "column": 29,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  495,
                  510
                ],
                "loc": {
                  "end": {
                    "column": 34,
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
                488,
                490
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
              484,
              511
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            480,
            511
          ],
          "loc": {
            "end": {
              "column": 35,
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
        476,
        512
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
                  518,
                  521
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
                  523,
                  526
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
                  528,
                  531
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
              517,
              532
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
                      536,
                      537
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
                      538,
                      542
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
                    536,
                    542
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
                  536,
                  544
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
                      546,
                      547
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
                      548,
                      552
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
                    546,
                    552
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
                  546,
                  554
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
                      556,
                      557
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
                      558,
                      562
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
                    556,
                    562
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
                  556,
                  564
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
              535,
              565
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
            517,
            565
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
        513,
        566
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
              572,
              573
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
                  583,
                  585
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
                      588,
                      597
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
                      599,
                      601
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
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      603,
                      605
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
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
                  587,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 38,
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
                580,
                582
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
              576,
              607
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "range": [
            572,
            607
          ],
          "loc": {
            "end": {
              "column": 39,
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
        568,
        608
      ],
      "loc": {
        "end": {
          "column": 40,
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
                  614,
                  617
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
                  619,
                  622
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
                  624,
                  627
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
              613,
              628
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
                      632,
                      633
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
                      634,
                      638
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
                    632,
                    638
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
                  632,
                  640
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
                      642,
                      643
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
                      644,
                      648
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
                    642,
                    648
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
                  642,
                  650
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
                      652,
                      653
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
                      654,
                      658
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
                    652,
                    658
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
                  652,
                  660
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
              631,
              661
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
            613,
            661
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
        609,
        662
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
            "name": "w",
            "optional": false,
            "range": [
              668,
              669
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                  679,
                  681
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 30
                  },
                  "start": {
                    "column": 15,
                    "line": 30
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
                      684,
                      693
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 20,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      695,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 30
                      },
                      "start": {
                        "column": 31,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      706,
                      715
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 30
                      },
                      "start": {
                        "column": 42,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  683,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 30
                  },
                  "start": {
                    "column": 19,
                    "line": 30
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
                676,
                678
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 12,
                  "line": 30
                }
              }
            },
            "range": [
              672,
              717
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 30
              }
            }
          },
          "range": [
            668,
            717
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        664,
        718
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
                  724,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 31
                  },
                  "start": {
                    "column": 5,
                    "line": 31
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "range": [
                  729,
                  732
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 31
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "range": [
                  734,
                  737
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              723,
              738
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
                      742,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 31
                      },
                      "start": {
                        "column": 23,
                        "line": 31
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
                      744,
                      748
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 31
                      },
                      "start": {
                        "column": 25,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    742,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 23,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "range": [
                  742,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 31
                  },
                  "start": {
                    "column": 23,
                    "line": 31
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
                      752,
                      753
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 31
                      },
                      "start": {
                        "column": 33,
                        "line": 31
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
                      754,
                      758
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 31
                      },
                      "start": {
                        "column": 35,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    752,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 31
                    },
                    "start": {
                      "column": 33,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "range": [
                  752,
                  760
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 31
                  },
                  "start": {
                    "column": 33,
                    "line": 31
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
                      762,
                      763
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 31
                      },
                      "start": {
                        "column": 43,
                        "line": 31
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
                      764,
                      768
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 31
                      },
                      "start": {
                        "column": 45,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    762,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 31
                    },
                    "start": {
                      "column": 43,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "range": [
                  762,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 31
                  },
                  "start": {
                    "column": 43,
                    "line": 31
                  }
                }
              }
            ],
            "range": [
              741,
              771
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 31
              },
              "start": {
                "column": 22,
                "line": 31
              }
            }
          },
          "range": [
            723,
            771
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        719,
        772
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
