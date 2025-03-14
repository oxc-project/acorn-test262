__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    243
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          12,
          34
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "range": [
                18,
                21
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              21
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "range": [
                27,
                32
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
            "range": [
              27,
              32
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Colors",
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
      "range": [
        0,
        34
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
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Colors",
              "optional": false,
              "range": [
                44,
                50
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "range": [
                51,
                54
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              44,
              54
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            40,
            54
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        36,
        55
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "p",
            "optional": false,
            "range": [
              94,
              95
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "range": [
                100,
                105
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              98,
              105
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            94,
            105
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        90,
        106
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              118,
              125
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          "range": [
            116,
            125
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          116,
          127
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        116,
        128
      ],
      "loc": {
        "end": {
          "column": 12,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  201,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Green",
                "optional": false,
                "range": [
                  203,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 6,
                    "line": 12
                  }
                }
              },
              "range": [
                201,
                208
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              201,
              209
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    223,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "range": [
                    225,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
                    }
                  }
                },
                "range": [
                  223,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                223,
                234
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              223,
              235
            ],
            "loc": {
              "end": {
                "column": 16,
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
          195,
          243
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 38,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fill",
        "optional": false,
        "range": [
          166,
          170
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 33,
                "line": 11
              }
            },
            "range": [
              190,
              193
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  192,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              },
              "range": [
                192,
                193
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 35,
                  "line": 11
                }
              }
            }
          },
          "range": [
            189,
            193
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 11
            },
            "start": {
              "column": 32,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 11
          },
          "start": {
            "column": 13,
            "line": 11
          }
        },
        "range": [
          170,
          188
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Colors",
                "optional": false,
                "range": [
                  181,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "range": [
                181,
                187
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                171,
                172
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              171,
              187
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        157,
        243
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
