__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    179
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                20
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  17,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        27,
        137
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            42,
            137
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
                  48,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                },
                "range": [
                  50,
                  58
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    52,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  61,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "range": [
                48,
                63
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                "name": "f",
                "optional": false,
                "range": [
                  74,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
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
                  75,
                  106
                ],
                "async": true,
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
                            "type": "ThisExpression",
                            "range": [
                              80,
                              84
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
                            "type": "PrivateIdentifier",
                            "name": "x",
                            "range": [
                              85,
                              87
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
                            80,
                            87
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
                        "right": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                96,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 4
                                },
                                "start": {
                                  "column": 32,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "x",
                              "range": [
                                101,
                                103
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 4
                                },
                                "start": {
                                  "column": 37,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              96,
                              103
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 4
                              },
                              "start": {
                                "column": 32,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            90,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 4
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          80,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        80,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    78,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
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
                    "column": 42,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "range": [
                68,
                106
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                "name": "g",
                "optional": false,
                "range": [
                  111,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
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
                  112,
                  135
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "in",
                        "left": {
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "range": [
                            125,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 5
                            },
                            "start": {
                              "column": 18,
                              "line": 5
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "range": [
                            131,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 5
                            },
                            "start": {
                              "column": 24,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          125,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        118,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    116,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
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
                    "name": "u",
                    "optional": false,
                    "range": [
                      113,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 5
                      },
                      "start": {
                        "column": 6,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              },
              "range": [
                111,
                135
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "range": [
                23,
                26
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 1,
                  "line": 2
                }
              }
            },
            "range": [
              22,
              26
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            40,
            41
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
        "implements": [],
        "superClass": null,
        "range": [
          34,
          137
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 5,
          "line": 2
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
            "name": "o",
            "optional": false,
            "range": [
              145,
              146
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
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
                    151,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    154,
                    155
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
                  151,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              149,
              157
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "range": [
            145,
            157
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        139,
        158
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
              165,
              166
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    174,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                },
                "range": [
                  171,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              169,
              177
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            165,
            177
          ],
          "loc": {
            "end": {
              "column": 18,
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
        159,
        178
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "module",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    703
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        66
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__extends",
          "optional": false,
          "range": [
            24,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              },
              "range": [
                35,
                45
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    37,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                },
                "range": [
                  37,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              34,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              },
              "range": [
                48,
                58
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    50,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                },
                "range": [
                  50,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              47,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 65,
              "line": 1
            },
            "start": {
              "column": 59,
              "line": 1
            }
          },
          "range": [
            59,
            65
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              61,
              65
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 1
              },
              "start": {
                "column": 61,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          66
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 66,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        67,
        179
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "range": [
            91,
            101
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 2
                },
                "start": {
                  "column": 45,
                  "line": 2
                }
              },
              "range": [
                112,
                124
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "range": [
                      114,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 2
                      },
                      "start": {
                        "column": 47,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    114,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 2
                    },
                    "start": {
                      "column": 47,
                      "line": 2
                    }
                  }
                },
                "range": [
                  114,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 2
                  },
                  "start": {
                    "column": 47,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              102,
              124
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 2
              },
              "start": {
                "column": 35,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 2
                },
                "start": {
                  "column": 65,
                  "line": 2
                }
              },
              "range": [
                132,
                137
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  134,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 2
                  },
                  "start": {
                    "column": 67,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              126,
              137
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 2
              },
              "start": {
                "column": 59,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 93,
                  "line": 2
                },
                "start": {
                  "column": 76,
                  "line": 2
                }
              },
              "range": [
                143,
                160
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      145,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 2
                      },
                      "start": {
                        "column": 78,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      154,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 2
                      },
                      "start": {
                        "column": 87,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  145,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 2
                  },
                  "start": {
                    "column": 78,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              139,
              160
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 2
              },
              "start": {
                "column": 72,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 105,
                  "line": 2
                },
                "start": {
                  "column": 100,
                  "line": 2
                }
              },
              "range": [
                167,
                172
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  169,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 2
                  },
                  "start": {
                    "column": 102,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              162,
              172
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 2
              },
              "start": {
                "column": 95,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 111,
              "line": 2
            },
            "start": {
              "column": 106,
              "line": 2
            }
          },
          "range": [
            173,
            178
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              175,
              178
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 2
              },
              "start": {
                "column": 108,
                "line": 2
              }
            }
          }
        },
        "range": [
          74,
          179
        ],
        "loc": {
          "end": {
            "column": 112,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 112,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        180,
        263
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__param",
          "optional": false,
          "range": [
            204,
            211
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
                }
              },
              "range": [
                222,
                230
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  224,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              212,
              230
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 32,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 3
                },
                "start": {
                  "column": 61,
                  "line": 3
                }
              },
              "range": [
                241,
                251
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    243,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 3
                    },
                    "start": {
                      "column": 63,
                      "line": 3
                    }
                  }
                },
                "range": [
                  243,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 3
                  },
                  "start": {
                    "column": 63,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              232,
              251
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 3
              },
              "start": {
                "column": 52,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 82,
              "line": 3
            },
            "start": {
              "column": 72,
              "line": 3
            }
          },
          "range": [
            252,
            262
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                254,
                262
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 3
                },
                "start": {
                  "column": 74,
                  "line": 3
                }
              }
            },
            "range": [
              254,
              262
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 3
              },
              "start": {
                "column": 74,
                "line": 3
              }
            }
          }
        },
        "range": [
          187,
          263
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 83,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        264,
        347
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__metadata",
          "optional": false,
          "range": [
            288,
            298
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 4
                },
                "start": {
                  "column": 46,
                  "line": 4
                }
              },
              "range": [
                310,
                315
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  312,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 4
                  },
                  "start": {
                    "column": 48,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              299,
              315
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 4
              },
              "start": {
                "column": 35,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 4
                },
                "start": {
                  "column": 66,
                  "line": 4
                }
              },
              "range": [
                330,
                335
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  332,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 4
                  },
                  "start": {
                    "column": 68,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              317,
              335
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 4
              },
              "start": {
                "column": 53,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 82,
              "line": 4
            },
            "start": {
              "column": 72,
              "line": 4
            }
          },
          "range": [
            336,
            346
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                338,
                346
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 4
                },
                "start": {
                  "column": 74,
                  "line": 4
                }
              }
            },
            "range": [
              338,
              346
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 4
              },
              "start": {
                "column": 74,
                "line": 4
              }
            }
          }
        },
        "range": [
          271,
          347
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 83,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        348,
        452
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "range": [
            372,
            381
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 41,
                  "line": 5
                }
              },
              "range": [
                389,
                394
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  391,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              382,
              394
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 5
                },
                "start": {
                  "column": 58,
                  "line": 5
                }
              },
              "range": [
                406,
                411
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  408,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 5
                  },
                  "start": {
                    "column": 60,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              396,
              411
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 5
              },
              "start": {
                "column": 48,
                "line": 5
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 5
                },
                "start": {
                  "column": 66,
                  "line": 5
                }
              },
              "range": [
                414,
                424
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    416,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 5
                    },
                    "start": {
                      "column": 68,
                      "line": 5
                    }
                  }
                },
                "range": [
                  416,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 5
                  },
                  "start": {
                    "column": 68,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              413,
              424
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 5
              },
              "start": {
                "column": 65,
                "line": 5
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 97,
                  "line": 5
                },
                "start": {
                  "column": 87,
                  "line": 5
                }
              },
              "range": [
                435,
                445
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    437,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 5
                    },
                    "start": {
                      "column": 89,
                      "line": 5
                    }
                  }
                },
                "range": [
                  437,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 5
                  },
                  "start": {
                    "column": 89,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              426,
              445
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 5
              },
              "start": {
                "column": 78,
                "line": 5
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 103,
              "line": 5
            },
            "start": {
              "column": 98,
              "line": 5
            }
          },
          "range": [
            446,
            451
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              448,
              451
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 5
              },
              "start": {
                "column": 100,
                "line": 5
              }
            }
          }
        },
        "range": [
          355,
          452
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 104,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        453,
        537
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "range": [
            477,
            499
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 6
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 6
                },
                "start": {
                  "column": 48,
                  "line": 6
                }
              },
              "range": [
                501,
                506
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  503,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 50,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              500,
              506
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 6
              },
              "start": {
                "column": 47,
                "line": 6
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 6
                },
                "start": {
                  "column": 56,
                  "line": 6
                }
              },
              "range": [
                509,
                514
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  511,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 6
                  },
                  "start": {
                    "column": 58,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              508,
              514
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 6
              },
              "start": {
                "column": 55,
                "line": 6
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 6
                },
                "start": {
                  "column": 64,
                  "line": 6
                }
              },
              "range": [
                517,
                522
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  519,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 6
                  },
                  "start": {
                    "column": 66,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              516,
              522
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 6
              },
              "start": {
                "column": 63,
                "line": 6
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 77,
                  "line": 6
                },
                "start": {
                  "column": 72,
                  "line": 6
                }
              },
              "range": [
                525,
                530
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  527,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 6
                  },
                  "start": {
                    "column": 74,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              524,
              530
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 6
              },
              "start": {
                "column": 71,
                "line": 6
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 83,
              "line": 6
            },
            "start": {
              "column": 78,
              "line": 6
            }
          },
          "range": [
            531,
            536
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              533,
              536
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 6
              },
              "start": {
                "column": 80,
                "line": 6
              }
            }
          }
        },
        "range": [
          460,
          537
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 84,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        538,
        630
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldSet",
          "optional": false,
          "range": [
            562,
            584
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 7
                },
                "start": {
                  "column": 48,
                  "line": 7
                }
              },
              "range": [
                586,
                591
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  588,
                  591
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              585,
              591
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 7
              },
              "start": {
                "column": 47,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 7
                },
                "start": {
                  "column": 56,
                  "line": 7
                }
              },
              "range": [
                594,
                599
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  596,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 7
                  },
                  "start": {
                    "column": 58,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              593,
              599
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 7
              },
              "start": {
                "column": 55,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 7
                },
                "start": {
                  "column": 64,
                  "line": 7
                }
              },
              "range": [
                602,
                607
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  604,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 7
                  },
                  "start": {
                    "column": 66,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              601,
              607
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 7
              },
              "start": {
                "column": 63,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 77,
                  "line": 7
                },
                "start": {
                  "column": 72,
                  "line": 7
                }
              },
              "range": [
                610,
                615
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  612,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 7
                  },
                  "start": {
                    "column": 74,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              609,
              615
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 7
              },
              "start": {
                "column": 71,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 85,
                  "line": 7
                },
                "start": {
                  "column": 80,
                  "line": 7
                }
              },
              "range": [
                618,
                623
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  620,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 7
                  },
                  "start": {
                    "column": 82,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              617,
              623
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 7
              },
              "start": {
                "column": 79,
                "line": 7
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 91,
              "line": 7
            },
            "start": {
              "column": 86,
              "line": 7
            }
          },
          "range": [
            624,
            629
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              626,
              629
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 7
              },
              "start": {
                "column": 88,
                "line": 7
              }
            }
          }
        },
        "range": [
          545,
          630
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 92,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        631,
        702
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldIn",
          "optional": false,
          "range": [
            655,
            676
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 8
            },
            "start": {
              "column": 24,
              "line": 8
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 8
                },
                "start": {
                  "column": 47,
                  "line": 8
                }
              },
              "range": [
                678,
                683
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  680,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 8
                  },
                  "start": {
                    "column": 49,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              677,
              683
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 8
              },
              "start": {
                "column": 46,
                "line": 8
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 60,
                  "line": 8
                },
                "start": {
                  "column": 55,
                  "line": 8
                }
              },
              "range": [
                686,
                691
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  688,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 8
                  },
                  "start": {
                    "column": 57,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              685,
              691
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 8
              },
              "start": {
                "column": 54,
                "line": 8
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 70,
              "line": 8
            },
            "start": {
              "column": 61,
              "line": 8
            }
          },
          "range": [
            692,
            701
          ],
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "range": [
              694,
              701
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 8
              },
              "start": {
                "column": 63,
                "line": 8
              }
            }
          }
        },
        "range": [
          638,
          702
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 71,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "module",
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
