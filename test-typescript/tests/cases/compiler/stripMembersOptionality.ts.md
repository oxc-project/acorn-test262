__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    211
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
            "name": "someVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              },
              "range": [
                43,
                95
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    53,
                    95
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "range": [
                              60,
                              62
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 4
                              },
                              "start": {
                                "column": 4,
                                "line": 4
                              }
                            }
                          },
                          "kind": "method",
                          "optional": true,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 4
                                  }
                                },
                                "range": [
                                  67,
                                  75
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    69,
                                    75
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 4
                                    }
                                  }
                                }
                              },
                              "range": [
                                64,
                                75
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 4
                                },
                                "start": {
                                  "column": 8,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            },
                            "range": [
                              76,
                              91
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    78,
                                    84
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 4
                                    }
                                  }
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "range": [
                                    87,
                                    91
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 4
                                    }
                                  }
                                }
                              ],
                              "range": [
                                78,
                                91
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 4
                                },
                                "start": {
                                  "column": 22,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "static": false,
                          "range": [
                            60,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 4,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        54,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 1,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 5
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "range": [
                    45,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
                    }
                  }
                },
                "range": [
                  45,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              36,
              95
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            36,
            95
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        22,
        96
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
            "raw": "\"\"",
            "value": "",
            "range": [
              108,
              110
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
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
            "name": "someVal",
            "optional": false,
            "range": [
              97,
              104
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "range": [
              105,
              107
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            97,
            107
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          97,
          111
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        97,
        112
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 6
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
            "name": "someVal2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 2,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              },
              "range": [
                136,
                192
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    146,
                    192
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "range": [
                              153,
                              155
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 9
                              },
                              "start": {
                                "column": 4,
                                "line": 9
                              }
                            }
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 9
                              },
                              "start": {
                                "column": 7,
                                "line": 9
                              }
                            },
                            "range": [
                              156,
                              188
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 9
                                      }
                                    },
                                    "range": [
                                      162,
                                      170
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        164,
                                        170
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
                                    }
                                  },
                                  "range": [
                                    159,
                                    170
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 9
                                  }
                                },
                                "range": [
                                  172,
                                  188
                                ],
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        175,
                                        181
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 9
                                        }
                                      }
                                    },
                                    {
                                      "type": "TSNullKeyword",
                                      "range": [
                                        184,
                                        188
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 9
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    175,
                                    188
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 9
                                    }
                                  }
                                }
                              },
                              "range": [
                                158,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 9
                                },
                                "start": {
                                  "column": 9,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            153,
                            189
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
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
                        147,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 1,
                          "line": 10
                        },
                        "start": {
                          "column": 33,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 10
                    },
                    "start": {
                      "column": 32,
                      "line": 8
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "range": [
                    138,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 8
                    },
                    "start": {
                      "column": 24,
                      "line": 8
                    }
                  }
                },
                "range": [
                  138,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              128,
              192
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            128,
            192
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        114,
        193
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 10
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              206,
              208
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 12,
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
            "name": "someVal2",
            "optional": false,
            "range": [
              194,
              202
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "range": [
              203,
              205
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            194,
            205
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          194,
          209
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        194,
        210
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
