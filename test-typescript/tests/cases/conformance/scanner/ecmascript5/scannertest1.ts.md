__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    39,
    731
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          59,
          729
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
              "name": "isDecimalDigit",
              "optional": false,
              "range": [
                79,
                93
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                93,
                186
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": ">=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            131,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 5
                            },
                            "start": {
                              "column": 15,
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
                            "name": "CharacterCodes",
                            "optional": false,
                            "range": [
                              136,
                              150
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "range": [
                              151,
                              153
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 5
                              },
                              "start": {
                                "column": 35,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            136,
                            153
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          131,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "<=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            157,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 5
                            },
                            "start": {
                              "column": 41,
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
                            "name": "CharacterCodes",
                            "optional": false,
                            "range": [
                              162,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 5
                              },
                              "start": {
                                "column": 46,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_9",
                            "optional": false,
                            "range": [
                              177,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 5
                              },
                              "start": {
                                "column": 61,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            162,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 5
                            },
                            "start": {
                              "column": 46,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          157,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 5
                          },
                          "start": {
                            "column": 41,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        131,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      124,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  114,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 53,
                    "line": 4
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
                        "line": 4
                      }
                    },
                    "range": [
                      95,
                      103
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        97,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 36,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    94,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 4
                  },
                  "start": {
                    "column": 43,
                    "line": 4
                  }
                },
                "range": [
                  104,
                  113
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    106,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 4
                    },
                    "start": {
                      "column": 45,
                      "line": 4
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 4
                }
              }
            },
            "range": [
              65,
              186
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
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
              "name": "isHexDigit",
              "optional": false,
              "range": [
                206,
                216
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                216,
                412
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                269,
                                270
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 9
                                },
                                "start": {
                                  "column": 30,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isDecimalDigit",
                            "optional": false,
                            "range": [
                              254,
                              268
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
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
                            254,
                            271
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 9
                            },
                            "start": {
                              "column": 15,
                              "line": 9
                            }
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                291,
                                292
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 10
                                },
                                "start": {
                                  "column": 16,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "range": [
                                  296,
                                  310
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 10
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  311,
                                  312
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                296,
                                312
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 10
                                },
                                "start": {
                                  "column": 21,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              291,
                              312
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 10
                              },
                              "start": {
                                "column": 16,
                                "line": 10
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                316,
                                317
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 10
                                },
                                "start": {
                                  "column": 41,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "range": [
                                  321,
                                  335
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 10
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "range": [
                                  336,
                                  337
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                321,
                                337
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 10
                                },
                                "start": {
                                  "column": 46,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              316,
                              337
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 10
                              },
                              "start": {
                                "column": 41,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            291,
                            337
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 10
                            },
                            "start": {
                              "column": 16,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          254,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": ">=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              358,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 11
                              },
                              "start": {
                                "column": 16,
                                "line": 11
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "range": [
                                363,
                                377
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 11
                                },
                                "start": {
                                  "column": 21,
                                  "line": 11
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
                                378,
                                379
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 11
                                },
                                "start": {
                                  "column": 36,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              363,
                              379
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 11
                              },
                              "start": {
                                "column": 21,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            358,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 11
                            },
                            "start": {
                              "column": 16,
                              "line": 11
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              383,
                              384
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 11
                              },
                              "start": {
                                "column": 41,
                                "line": 11
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "range": [
                                388,
                                402
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 11
                                },
                                "start": {
                                  "column": 46,
                                  "line": 11
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "range": [
                                403,
                                404
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 11
                                },
                                "start": {
                                  "column": 61,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              388,
                              404
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 11
                              },
                              "start": {
                                "column": 46,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            383,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 11
                            },
                            "start": {
                              "column": 41,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          358,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        254,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      247,
                      406
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  237,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 49,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 8
                      },
                      "start": {
                        "column": 30,
                        "line": 8
                      }
                    },
                    "range": [
                      218,
                      226
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        220,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    217,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 8
                    },
                    "start": {
                      "column": 29,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 8
                  }
                },
                "range": [
                  227,
                  236
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    229,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 8
                    },
                    "start": {
                      "column": 41,
                      "line": 8
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 8
                }
              }
            },
            "range": [
              192,
              412
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
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
              "name": "hexValue",
              "optional": false,
              "range": [
                432,
                440
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                440,
                727
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                494,
                                495
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 15
                                },
                                "start": {
                                  "column": 32,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isHexDigit",
                            "optional": false,
                            "range": [
                              483,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 15
                              },
                              "start": {
                                "column": 21,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            483,
                            496
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 15
                            },
                            "start": {
                              "column": 21,
                              "line": 15
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
                          "name": "Debug",
                          "optional": false,
                          "range": [
                            470,
                            475
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "range": [
                            476,
                            482
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 15
                            },
                            "start": {
                              "column": 14,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          470,
                          482
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        470,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      470,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "ConditionalExpression",
                        "alternate": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                695,
                                696
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 20
                                },
                                "start": {
                                  "column": 18,
                                  "line": 20
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "range": [
                                  699,
                                  713
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 20
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
                                  714,
                                  715
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                699,
                                715
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 20
                                },
                                "start": {
                                  "column": 22,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              695,
                              715
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 20
                              },
                              "start": {
                                "column": 18,
                                "line": 20
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              718,
                              720
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 20
                              },
                              "start": {
                                "column": 41,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            695,
                            720
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 20
                            },
                            "start": {
                              "column": 18,
                              "line": 20
                            }
                          }
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                651,
                                652
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 19
                                },
                                "start": {
                                  "column": 18,
                                  "line": 19
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "range": [
                                  655,
                                  669
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  670,
                                  671
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                655,
                                671
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 19
                                },
                                "start": {
                                  "column": 22,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              651,
                              671
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 19
                              },
                              "start": {
                                "column": 18,
                                "line": 19
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              674,
                              676
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 19
                              },
                              "start": {
                                "column": 41,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            651,
                            676
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 19
                            },
                            "start": {
                              "column": 18,
                              "line": 19
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                585,
                                586
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 18
                                },
                                "start": {
                                  "column": 15,
                                  "line": 18
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "range": [
                                  590,
                                  604
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  605,
                                  606
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                590,
                                606
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 18
                                },
                                "start": {
                                  "column": 20,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              585,
                              606
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 18
                              },
                              "start": {
                                "column": 15,
                                "line": 18
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                610,
                                611
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 18
                                },
                                "start": {
                                  "column": 40,
                                  "line": 18
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "range": [
                                  615,
                                  629
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "range": [
                                  630,
                                  631
                                ],
                                "loc": {
                                  "end": {
                                    "column": 61,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                615,
                                631
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 18
                                },
                                "start": {
                                  "column": 45,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              610,
                              631
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 18
                              },
                              "start": {
                                "column": 40,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            585,
                            631
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 18
                            },
                            "start": {
                              "column": 15,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          584,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 18
                          }
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            547,
                            548
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "range": [
                              551,
                              565
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 17
                              },
                              "start": {
                                "column": 19,
                                "line": 17
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "range": [
                              566,
                              568
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 17
                              },
                              "start": {
                                "column": 34,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            551,
                            568
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 17
                            },
                            "start": {
                              "column": 19,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          547,
                          568
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 17
                          },
                          "start": {
                            "column": 15,
                            "line": 17
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              529,
                              530
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 16
                              },
                              "start": {
                                "column": 30,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isDecimalDigit",
                          "optional": false,
                          "range": [
                            514,
                            528
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          514,
                          531
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        514,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      507,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  460,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 46,
                    "line": 14
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 14
                      },
                      "start": {
                        "column": 28,
                        "line": 14
                      }
                    },
                    "range": [
                      442,
                      450
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        444,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 14
                        },
                        "start": {
                          "column": 30,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    441,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 14
                    },
                    "start": {
                      "column": 27,
                      "line": 14
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 14
                  },
                  "start": {
                    "column": 37,
                    "line": 14
                  }
                },
                "range": [
                  451,
                  459
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    453,
                    459
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 14
                    },
                    "start": {
                      "column": 39,
                      "line": 14
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 26,
                  "line": 14
                }
              }
            },
            "range": [
              418,
              727
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
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
            "line": 22
          },
          "start": {
            "column": 20,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CharacterInfo",
        "optional": false,
        "range": [
          45,
          58
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        39,
        729
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
