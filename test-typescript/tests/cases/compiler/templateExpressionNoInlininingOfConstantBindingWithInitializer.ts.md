__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    273
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params",
        "optional": false,
        "range": [
          5,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                18,
                23
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
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
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                24,
                41
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      26,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      35,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  26,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              18,
              41
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          14,
          43
        ],
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
      "range": [
        0,
        43
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          94,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "range": [
                          94,
                          107
                        ],
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            94,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 6
                            },
                            "start": {
                              "column": 10,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "'123'",
                          "value": "123",
                          "range": [
                            102,
                            107
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 18,
                              "line": 6
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        94,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 10,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    92,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parameters",
                  "optional": false,
                  "range": [
                    112,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                },
                "range": [
                  92,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              86,
              122
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      135,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      132,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      140,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  132,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'345'",
                "value": "345",
                "range": [
                  147,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              "range": [
                132,
                152
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "range": [
              125,
              152
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "range": [
          82,
          154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 37,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example",
        "optional": false,
        "range": [
          54,
          61
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parameters",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            },
            "range": [
              72,
              80
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Params",
                "optional": false,
                "range": [
                  74,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 29,
                    "line": 5
                  }
                }
              },
              "range": [
                74,
                80
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            }
          },
          "range": [
            62,
            80
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        }
      ],
      "range": [
        45,
        154
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          206,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 11
                          },
                          "start": {
                            "column": 10,
                            "line": 11
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "range": [
                          206,
                          219
                        ],
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            206,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 10,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "'123'",
                          "value": "123",
                          "range": [
                            214,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 11
                          },
                          "start": {
                            "column": 10,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        206,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 11
                        },
                        "start": {
                          "column": 10,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    204,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parameters",
                  "optional": false,
                  "range": [
                    224,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 28,
                      "line": 11
                    }
                  }
                },
                "range": [
                  204,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              198,
              234
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    243,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        250,
                        255
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        247,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        255,
                        257
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 12
                        },
                        "start": {
                          "column": 20,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    247,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  243,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              237,
              258
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                268,
                269
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "range": [
              261,
              270
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "range": [
          194,
          272
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 38,
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
        "name": "example2",
        "optional": false,
        "range": [
          165,
          173
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parameters",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 28,
                "line": 10
              }
            },
            "range": [
              184,
              192
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Params",
                "optional": false,
                "range": [
                  186,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 30,
                    "line": 10
                  }
                }
              },
              "range": [
                186,
                192
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 30,
                  "line": 10
                }
              }
            }
          },
          "range": [
            174,
            192
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 10
            },
            "start": {
              "column": 18,
              "line": 10
            }
          }
        }
      ],
      "range": [
        156,
        272
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
