__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    330
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "'admin'",
                "value": "admin",
                "range": [
                  94,
                  101
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
                87,
                102
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "user",
                "optional": false,
                "range": [
                  70,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 12,
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
                "raw": "'Jack'",
                "value": "Jack",
                "range": [
                  79,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "range": [
                70,
                85
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              66,
              102
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                114,
                123
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              107,
              124
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          60,
          126
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 38,
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
        "name": "getPermissions",
        "optional": false,
        "range": [
          31,
          45
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "user",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            },
            "range": [
              50,
              58
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                52,
                58
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
                }
              }
            }
          },
          "range": [
            46,
            58
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        }
      ],
      "range": [
        22,
        126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "admins",
            "optional": false,
            "range": [
              134,
              140
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "range": [
                        183,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 8
                        },
                        "start": {
                          "column": 55,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPermissions",
                    "optional": false,
                    "range": [
                      168,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 8
                      },
                      "start": {
                        "column": 40,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    168,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 8
                    },
                    "start": {
                      "column": 40,
                      "line": 8
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
                    "name": "e",
                    "optional": false,
                    "range": [
                      163,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 35,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  163,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 8
                  },
                  "start": {
                    "column": 35,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'Mike'",
                    "value": "Mike",
                    "range": [
                      144,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'Joe'",
                    "value": "Joe",
                    "range": [
                      152,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  143,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  159,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "range": [
                143,
                162
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              143,
              186
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 8
              }
            }
          },
          "range": [
            134,
            186
          ],
          "loc": {
            "end": {
              "column": 58,
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
        128,
        187
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  250,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  256,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
                  }
                }
              },
              "range": [
                250,
                265
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              243,
              266
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          237,
          268
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 48,
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
        "name": "isDefined",
        "optional": false,
        "range": [
          198,
          207
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
              }
            },
            "range": [
              212,
              227
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      214,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 25,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    214,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    218,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 10
                    },
                    "start": {
                      "column": 29,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                214,
                227
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              }
            }
          },
          "range": [
            211,
            227
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 10
            },
            "start": {
              "column": 22,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 10
          },
          "start": {
            "column": 39,
            "line": 10
          }
        },
        "range": [
          228,
          236
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              230,
              231
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 10
              },
              "start": {
                "column": 46,
                "line": 10
              }
            },
            "range": [
              235,
              236
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  235,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 46,
                    "line": 10
                  }
                }
              },
              "range": [
                235,
                236
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 10
                },
                "start": {
                  "column": 46,
                  "line": 10
                }
              }
            }
          },
          "range": [
            230,
            236
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 10
            },
            "start": {
              "column": 41,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 10
          },
          "start": {
            "column": 18,
            "line": 10
          }
        },
        "range": [
          207,
          210
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
                208,
                209
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              208,
              209
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 19,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        189,
        268
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "foundAdmins",
            "optional": false,
            "range": [
              276,
              287
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isDefined",
                "optional": false,
                "range": [
                  304,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 34,
                    "line": 14
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
                "name": "admins",
                "optional": false,
                "range": [
                  290,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  297,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 14
                  }
                }
              },
              "range": [
                290,
                303
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              290,
              314
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 14
              },
              "start": {
                "column": 20,
                "line": 14
              }
            }
          },
          "range": [
            276,
            314
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        270,
        315
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
      "line": 3
    }
  },
  "hashbang": null
}
```
