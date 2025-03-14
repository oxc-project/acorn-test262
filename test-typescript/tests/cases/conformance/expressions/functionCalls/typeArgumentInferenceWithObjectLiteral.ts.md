__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    767
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          22,
          61
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "read",
              "optional": false,
              "range": [
                28,
                32
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                34,
                37
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    36,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  36,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              28,
              38
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "write",
              "optional": false,
              "range": [
                43,
                48
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  },
                  "range": [
                    54,
                    57
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        56,
                        57
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
                      56,
                      57
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
                  }
                },
                "range": [
                  49,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              43,
              59
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
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
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "range": [
          10,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          21
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
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        61
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
        "body": [],
        "range": [
          95,
          98
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 6
          },
          "start": {
            "column": 32,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          72,
          75
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
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
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            },
            "range": [
              80,
              93
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  90,
                  93
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        91,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 6
                        },
                        "start": {
                          "column": 28,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      91,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Computed",
                "optional": false,
                "range": [
                  82,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              },
              "range": [
                82,
                93
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            }
          },
          "range": [
            79,
            93
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        },
        "range": [
          75,
          78
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
                76,
                77
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
            "out": false,
            "range": [
              76,
              77
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
          }
        ]
      },
      "range": [
        63,
        98
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              },
              "range": [
                105,
                113
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  107,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              104,
              113
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            104,
            113
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        100,
        114
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 8
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "read",
                  "optional": false,
                  "range": [
                    216,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    222,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "range": [
                  216,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "write",
                  "optional": false,
                  "range": [
                    235,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        251,
                        252
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
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        255,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      251,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 20,
                        "line": 13
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        242,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 13
                        },
                        "start": {
                          "column": 11,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    242,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  235,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              210,
              262
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            206,
            209
          ],
          "loc": {
            "end": {
              "column": 3,
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
          206,
          263
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        206,
        264
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "write",
                  "optional": false,
                  "range": [
                    275,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        291,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 16
                        },
                        "start": {
                          "column": 20,
                          "line": 16
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        295,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 24,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      291,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 20,
                        "line": 16
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        282,
                        287
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    282,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "range": [
                  275,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "read",
                  "optional": false,
                  "range": [
                    306,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      318,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 16,
                        "line": 17
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    312,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "range": [
                  306,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              269,
              321
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            265,
            268
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          265,
          322
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        265,
        323
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          333,
          338
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                335,
                336
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 20
                }
              }
            },
            "range": [
              335,
              336
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 20
              },
              "start": {
                "column": 10,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 20
          },
          "start": {
            "column": 8,
            "line": 20
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "range": [
          330,
          332
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "range": [
        325,
        338
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          347,
          352
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                349,
                350
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 10,
                  "line": 21
                }
              }
            },
            "range": [
              349,
              350
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 21
              },
              "start": {
                "column": 10,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 8,
            "line": 21
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "range": [
          344,
          346
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "range": [
        339,
        352
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          438,
          440
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
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
                "column": 60,
                "line": 25
              },
              "start": {
                "column": 27,
                "line": 25
              }
            },
            "range": [
              448,
              481
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "range": [
                      452,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 25
                      },
                      "start": {
                        "column": 31,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 25
                      },
                      "start": {
                        "column": 32,
                        "line": 25
                      }
                    },
                    "range": [
                      453,
                      466
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 39,
                                "line": 25
                              },
                              "start": {
                                "column": 36,
                                "line": 25
                              }
                            },
                            "range": [
                              457,
                              460
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  459,
                                  460
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                459,
                                460
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 25
                                },
                                "start": {
                                  "column": 38,
                                  "line": 25
                                }
                              }
                            }
                          },
                          "range": [
                            456,
                            460
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
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 25
                          },
                          "start": {
                            "column": 41,
                            "line": 25
                          }
                        },
                        "range": [
                          462,
                          466
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              465,
                              466
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 25
                              },
                              "start": {
                                "column": 44,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            465,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 25
                            },
                            "start": {
                              "column": 44,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        455,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 25
                        },
                        "start": {
                          "column": 34,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    452,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 25
                    },
                    "start": {
                      "column": 31,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "range": [
                      468,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 25
                      },
                      "start": {
                        "column": 47,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 25
                      },
                      "start": {
                        "column": 48,
                        "line": 25
                      }
                    },
                    "range": [
                      469,
                      478
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 25
                          },
                          "start": {
                            "column": 53,
                            "line": 25
                          }
                        },
                        "range": [
                          474,
                          478
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              477,
                              478
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 25
                              },
                              "start": {
                                "column": 56,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            477,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 25
                            },
                            "start": {
                              "column": 56,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        471,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 25
                        },
                        "start": {
                          "column": 50,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    468,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 25
                    },
                    "start": {
                      "column": 47,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                450,
                481
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 25
                },
                "start": {
                  "column": 29,
                  "line": 25
                }
              }
            }
          },
          "range": [
            447,
            481
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 25
            },
            "start": {
              "column": 26,
              "line": 25
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
                "column": 66,
                "line": 25
              },
              "start": {
                "column": 63,
                "line": 25
              }
            },
            "range": [
              484,
              487
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  486,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 25
                  },
                  "start": {
                    "column": 65,
                    "line": 25
                  }
                }
              },
              "range": [
                486,
                487
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 25
                },
                "start": {
                  "column": 65,
                  "line": 25
                }
              }
            }
          },
          "range": [
            483,
            487
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 25
            },
            "start": {
              "column": 62,
              "line": 25
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 25
          },
          "start": {
            "column": 67,
            "line": 25
          }
        },
        "range": [
          488,
          491
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              490,
              491
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 25
              },
              "start": {
                "column": 69,
                "line": 25
              }
            }
          },
          "range": [
            490,
            491
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 25
            },
            "start": {
              "column": 69,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 25
          },
          "start": {
            "column": 19,
            "line": 25
          }
        },
        "range": [
          440,
          446
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
                441,
                442
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 25
                },
                "start": {
                  "column": 20,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              441,
              442
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 25
              },
              "start": {
                "column": 20,
                "line": 25
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
                444,
                445
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
            "out": false,
            "range": [
              444,
              445
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
          }
        ]
      },
      "range": [
        421,
        492
      ],
      "loc": {
        "end": {
          "column": 71,
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 6,
                  "line": 27
                }
              },
              "range": [
                500,
                508
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  502,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              498,
              508
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": null,
          "range": [
            498,
            508
          ],
          "loc": {
            "end": {
              "column": 14,
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
        494,
        509
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "range": [
              514,
              516
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "range": [
                        524,
                        525
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 28
                        },
                        "start": {
                          "column": 14,
                          "line": 28
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          532,
                          533
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 28
                          },
                          "start": {
                            "column": 22,
                            "line": 28
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            527,
                            528
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 28
                            },
                            "start": {
                              "column": 17,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "range": [
                        527,
                        533
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 28
                        },
                        "start": {
                          "column": 17,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      524,
                      533
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 28
                      },
                      "start": {
                        "column": 14,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "range": [
                        535,
                        536
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 28
                        },
                        "start": {
                          "column": 25,
                          "line": 28
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          544,
                          545
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 28
                          },
                          "start": {
                            "column": 34,
                            "line": 28
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        538,
                        545
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 28
                        },
                        "start": {
                          "column": 28,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      535,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 28
                      },
                      "start": {
                        "column": 25,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  522,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 28
                  },
                  "start": {
                    "column": 12,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  549,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 28
                  },
                  "start": {
                    "column": 39,
                    "line": 28
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                519,
                521
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              519,
              551
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 28
              },
              "start": {
                "column": 9,
                "line": 28
              }
            }
          },
          "range": [
            514,
            551
          ],
          "loc": {
            "end": {
              "column": 41,
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
        510,
        552
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "v1",
            "optional": false,
            "range": [
              557,
              559
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "range": [
                        567,
                        568
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 29
                        },
                        "start": {
                          "column": 14,
                          "line": 29
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          575,
                          576
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 29
                          },
                          "start": {
                            "column": 22,
                            "line": 29
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            570,
                            571
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 29
                            },
                            "start": {
                              "column": 17,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        570,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      567,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 29
                      },
                      "start": {
                        "column": 14,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "range": [
                        578,
                        579
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 29
                        },
                        "start": {
                          "column": 25,
                          "line": 29
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          587,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 29
                          },
                          "start": {
                            "column": 34,
                            "line": 29
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        581,
                        588
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 29
                        },
                        "start": {
                          "column": 28,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      578,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 29
                      },
                      "start": {
                        "column": 25,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  565,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 29
                  },
                  "start": {
                    "column": 12,
                    "line": 29
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "range": [
                    592,
                    594
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 29
                    },
                    "start": {
                      "column": 39,
                      "line": 29
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    595,
                    596
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 29
                    },
                    "start": {
                      "column": 42,
                      "line": 29
                    }
                  }
                },
                "range": [
                  592,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 29
                  },
                  "start": {
                    "column": 39,
                    "line": 29
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                562,
                564
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "optional": false,
            "range": [
              562,
              597
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 29
              },
              "start": {
                "column": 9,
                "line": 29
              }
            }
          },
          "range": [
            557,
            597
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        553,
        598
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "v1",
            "optional": false,
            "range": [
              603,
              605
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "range": [
                        613,
                        614
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 30
                        },
                        "start": {
                          "column": 14,
                          "line": 30
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          621,
                          622
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 30
                          },
                          "start": {
                            "column": 22,
                            "line": 30
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            616,
                            617
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 30
                            },
                            "start": {
                              "column": 17,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        616,
                        622
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 30
                        },
                        "start": {
                          "column": 17,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      613,
                      622
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 30
                      },
                      "start": {
                        "column": 14,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "range": [
                        624,
                        625
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 30
                        },
                        "start": {
                          "column": 25,
                          "line": 30
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "range": [
                            633,
                            635
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 30
                            },
                            "start": {
                              "column": 34,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "range": [
                            636,
                            637
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 30
                            },
                            "start": {
                              "column": 37,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          633,
                          637
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 30
                          },
                          "start": {
                            "column": 34,
                            "line": 30
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        627,
                        637
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 30
                        },
                        "start": {
                          "column": 28,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      624,
                      637
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 30
                      },
                      "start": {
                        "column": 25,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  611,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 30
                  },
                  "start": {
                    "column": 12,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  641,
                  642
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 30
                  },
                  "start": {
                    "column": 42,
                    "line": 30
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                608,
                610
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              608,
              643
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          },
          "range": [
            603,
            643
          ],
          "loc": {
            "end": {
              "column": 44,
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
        599,
        644
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 6,
                  "line": 32
                }
              },
              "range": [
                652,
                656
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "range": [
                    654,
                    656
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "range": [
                  654,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              650,
              656
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": null,
          "range": [
            650,
            656
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        646,
        657
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "v2",
            "optional": false,
            "range": [
              662,
              664
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "range": [
                        672,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 33
                        },
                        "start": {
                          "column": 14,
                          "line": 33
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          680,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 33
                          },
                          "start": {
                            "column": 22,
                            "line": 33
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            675,
                            676
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 33
                            },
                            "start": {
                              "column": 17,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        675,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 33
                        },
                        "start": {
                          "column": 17,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      672,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 33
                      },
                      "start": {
                        "column": 14,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "range": [
                        683,
                        684
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 33
                        },
                        "start": {
                          "column": 25,
                          "line": 33
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "range": [
                            692,
                            694
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 33
                            },
                            "start": {
                              "column": 34,
                              "line": 33
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "range": [
                            695,
                            696
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 33
                            },
                            "start": {
                              "column": 37,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          692,
                          696
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 33
                          },
                          "start": {
                            "column": 34,
                            "line": 33
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        686,
                        696
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 33
                        },
                        "start": {
                          "column": 28,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      683,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 33
                      },
                      "start": {
                        "column": 25,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  670,
                  698
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 33
                  },
                  "start": {
                    "column": 12,
                    "line": 33
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "range": [
                    700,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 33
                    },
                    "start": {
                      "column": 42,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    703,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 33
                    },
                    "start": {
                      "column": 45,
                      "line": 33
                    }
                  }
                },
                "range": [
                  700,
                  704
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 33
                  },
                  "start": {
                    "column": 42,
                    "line": 33
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                667,
                669
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "optional": false,
            "range": [
              667,
              705
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 33
              }
            }
          },
          "range": [
            662,
            705
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        658,
        706
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "v3",
            "optional": false,
            "range": [
              712,
              714
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "range": [
                        722,
                        723
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          730,
                          731
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 35
                          },
                          "start": {
                            "column": 22,
                            "line": 35
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            725,
                            726
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 35
                            },
                            "start": {
                              "column": 17,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        725,
                        731
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 35
                        },
                        "start": {
                          "column": 17,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      722,
                      731
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 35
                      },
                      "start": {
                        "column": 14,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "range": [
                        733,
                        734
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 35
                        },
                        "start": {
                          "column": 25,
                          "line": 35
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "range": [
                            742,
                            744
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 35
                            },
                            "start": {
                              "column": 34,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "range": [
                            745,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 35
                            },
                            "start": {
                              "column": 37,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          742,
                          746
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 35
                          },
                          "start": {
                            "column": 34,
                            "line": 35
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        736,
                        746
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 35
                        },
                        "start": {
                          "column": 28,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      733,
                      746
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 35
                      },
                      "start": {
                        "column": 25,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  720,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 35
                  },
                  "start": {
                    "column": 12,
                    "line": 35
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "range": [
                    750,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 35
                    },
                    "start": {
                      "column": 42,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    753,
                    754
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 35
                    },
                    "start": {
                      "column": 45,
                      "line": 35
                    }
                  }
                },
                "range": [
                  750,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 35
                  },
                  "start": {
                    "column": 42,
                    "line": 35
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                717,
                719
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 35
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            },
            "optional": false,
            "range": [
              717,
              755
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 35
              },
              "start": {
                "column": 9,
                "line": 35
              }
            }
          },
          "range": [
            712,
            755
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        708,
        756
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
