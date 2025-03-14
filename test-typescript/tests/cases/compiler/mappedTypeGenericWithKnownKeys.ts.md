__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    20,
    304
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
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
                  "name": "obj",
                  "optional": false,
                  "range": [
                    116,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      122,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        134,
                        175
                      ],
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Shape",
                                  "optional": false,
                                  "range": [
                                    141,
                                    146
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  141,
                                  146
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                135,
                                146
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 4
                                },
                                "start": {
                                  "column": 29,
                                  "line": 4
                                }
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"knownLiteralKey\"",
                                "value": "knownLiteralKey",
                                "range": [
                                  149,
                                  166
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                149,
                                166
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 4
                                },
                                "start": {
                                  "column": 43,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "range": [
                            135,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 4
                            },
                            "start": {
                              "column": 29,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            168,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 4
                            },
                            "start": {
                              "column": 62,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 4
                        },
                        "start": {
                          "column": 28,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        128,
                        134
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
                    "range": [
                      128,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    122,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "range": [
                  116,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              110,
              176
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
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
                  "name": "obj",
                  "optional": false,
                  "range": [
                    182,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "knownLiteralKey",
                  "optional": false,
                  "range": [
                    186,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "range": [
                  182,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  204,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "range": [
                182,
                205
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              182,
              206
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    211,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
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
                  "name": "key",
                  "optional": false,
                  "range": [
                    215,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "range": [
                  211,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  222,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "range": [
                211,
                223
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              211,
              224
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    230,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
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
                  "name": "unknownLiteralKey",
                  "optional": false,
                  "range": [
                    234,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "range": [
                  230,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  254,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 9
                  },
                  "start": {
                    "column": 28,
                    "line": 9
                  }
                }
              },
              "range": [
                230,
                255
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              230,
              256
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    270,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      274,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      280,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    274,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "range": [
                  270,
                  287
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
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  290,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 10
                  }
                }
              },
              "range": [
                270,
                291
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              270,
              292
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          104,
          303
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 84,
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
        "name": "test",
        "optional": false,
        "range": [
          29,
          33
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 3
              },
              "start": {
                "column": 57,
                "line": 3
              }
            },
            "range": [
              77,
              84
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  79,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 3
                  },
                  "start": {
                    "column": 59,
                    "line": 3
                  }
                }
              },
              "range": [
                79,
                84
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 3
                },
                "start": {
                  "column": 59,
                  "line": 3
                }
              }
            }
          },
          "range": [
            72,
            84
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 3
            },
            "start": {
              "column": 52,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 82,
                "line": 3
              },
              "start": {
                "column": 69,
                "line": 3
              }
            },
            "range": [
              89,
              102
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "range": [
                    97,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 3
                    },
                    "start": {
                      "column": 77,
                      "line": 3
                    }
                  }
                },
                "range": [
                  97,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 3
                  },
                  "start": {
                    "column": 77,
                    "line": 3
                  }
                }
              },
              "range": [
                91,
                102
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 3
                },
                "start": {
                  "column": 71,
                  "line": 3
                }
              }
            }
          },
          "range": [
            86,
            102
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 3
            },
            "start": {
              "column": 66,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        },
        "range": [
          33,
          71
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  54,
                  70
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      55,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      63,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 3
                      },
                      "start": {
                        "column": 43,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  48,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "range": [
                48,
                70
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "range": [
                34,
                39
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              34,
              70
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        20,
        303
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
