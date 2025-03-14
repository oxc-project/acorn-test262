__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    226
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          224
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "y",
              "range": [
                17,
                19
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "123",
              "value": 123,
              "range": [
                22,
                25
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              26
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "range": [
                38,
                47
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
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
                47,
                222
              ],
              "async": false,
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
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "range": [
                              88,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 4
                              },
                              "start": {
                                "column": 8,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "ClassExpression",
                                "abstract": false,
                                "body": {
                                  "type": "ClassBody",
                                  "range": [
                                    103,
                                    135
                                  ],
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "name": "x",
                                        "range": [
                                          105,
                                          107
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 4
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": false,
                                      "static": false,
                                      "value": {
                                        "type": "Literal",
                                        "raw": "1",
                                        "value": 1,
                                        "range": [
                                          110,
                                          111
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 30,
                                            "line": 4
                                          }
                                        }
                                      },
                                      "range": [
                                        105,
                                        112
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 4
                                        }
                                      }
                                    },
                                    {
                                      "type": "PropertyDefinition",
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "range": [
                                          122,
                                          123
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 4
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": true,
                                      "static": false,
                                      "value": {
                                        "type": "Literal",
                                        "raw": "\"prop\"",
                                        "value": "prop",
                                        "range": [
                                          126,
                                          132
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 4
                                          }
                                        }
                                      },
                                      "range": [
                                        113,
                                        133
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 4
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 4
                                    }
                                  }
                                },
                                "declare": false,
                                "decorators": [],
                                "id": null,
                                "implements": [],
                                "superClass": null,
                                "range": [
                                  97,
                                  135
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                93,
                                135
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 4
                                },
                                "start": {
                                  "column": 13,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                137,
                                138
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 4
                                },
                                "start": {
                                  "column": 57,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              92,
                              138
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            88,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "y",
                          "range": [
                            140,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 4
                            },
                            "start": {
                              "column": 60,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          88,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          145,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 4
                          },
                          "start": {
                            "column": 65,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        88,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      88,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "range": [
                              156,
                              159
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 5
                              },
                              "start": {
                                "column": 8,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "ClassExpression",
                                "abstract": false,
                                "body": {
                                  "type": "ClassBody",
                                  "range": [
                                    171,
                                    203
                                  ],
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "name": "x",
                                        "range": [
                                          173,
                                          175
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": false,
                                      "static": false,
                                      "value": {
                                        "type": "Literal",
                                        "raw": "1",
                                        "value": 1,
                                        "range": [
                                          178,
                                          179
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 30,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        173,
                                        180
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 5
                                        }
                                      }
                                    },
                                    {
                                      "type": "PropertyDefinition",
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "range": [
                                          190,
                                          191
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": true,
                                      "static": false,
                                      "value": {
                                        "type": "Literal",
                                        "raw": "\"prop\"",
                                        "value": "prop",
                                        "range": [
                                          194,
                                          200
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        181,
                                        201
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 5
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 5
                                    }
                                  }
                                },
                                "declare": false,
                                "decorators": [],
                                "id": null,
                                "implements": [],
                                "superClass": null,
                                "range": [
                                  165,
                                  203
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                161,
                                203
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 5
                                },
                                "start": {
                                  "column": 13,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                205,
                                206
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 5
                                },
                                "start": {
                                  "column": 57,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              160,
                              206
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            156,
                            207
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "y",
                          "range": [
                            208,
                            210
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 5
                            },
                            "start": {
                              "column": 60,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          156,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          214,
                          215
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 5
                          },
                          "start": {
                            "column": 66,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        156,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      156,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
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
                  78,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 51,
                    "line": 3
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    },
                    "range": [
                      51,
                      76
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 3
                                  }
                                },
                                "range": [
                                  59,
                                  67
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    61,
                                    67
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 3
                                    }
                                  }
                                }
                              },
                              "range": [
                                56,
                                67
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 3
                                },
                                "start": {
                                  "column": 29,
                                  "line": 3
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 3
                              },
                              "start": {
                                "column": 41,
                                "line": 3
                              }
                            },
                            "range": [
                              68,
                              74
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test",
                                "optional": false,
                                "range": [
                                  70,
                                  74
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                70,
                                74
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 3
                                },
                                "start": {
                                  "column": 43,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            55,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 3
                            },
                            "start": {
                              "column": 28,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        53,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    48,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
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
                  "column": 20,
                  "line": 3
                }
              }
            },
            "range": [
              31,
              222
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
