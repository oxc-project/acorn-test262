__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    156
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          70
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  },
                  "range": [
                    23,
                    31
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      25,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  22,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              },
              "range": [
                32,
                40
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              14,
              41
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  },
                  "range": [
                    55,
                    63
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      57,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  54,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              },
              "range": [
                64,
                68
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    66,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                },
                "range": [
                  66,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              46,
              68
            ],
            "loc": {
              "end": {
                "column": 26,
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
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        70
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
            "name": "C",
            "optional": false,
            "range": [
              72,
              73
            ],
            "loc": {
              "end": {
                "column": 1,
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
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              74,
              79
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          "range": [
            72,
            80
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            83,
            84
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 6
            },
            "start": {
              "column": 11,
              "line": 6
            }
          }
        },
        "range": [
          72,
          84
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        72,
        84
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 6
        },
        "start": {
          "column": 0,
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              87,
              90
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          "range": [
            85,
            90
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "2",
          "value": 2,
          "range": [
            93,
            94
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
        "range": [
          85,
          94
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        85,
        95
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "foo",
            "optional": false,
            "range": [
              102,
              105
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                108,
                109
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
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                110,
                115
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "range": [
              108,
              116
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "range": [
            102,
            116
          ],
          "loc": {
            "end": {
              "column": 20,
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
        96,
        116
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              117,
              118
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              119,
              121
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          },
          "range": [
            117,
            122
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            125,
            127
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 8,
              "line": 9
            }
          }
        },
        "range": [
          117,
          127
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        117,
        127
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "name": "C",
            "optional": false,
            "range": [
              128,
              129
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              130,
              131
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          "range": [
            128,
            132
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "2",
          "value": 2,
          "range": [
            135,
            136
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 10
            },
            "start": {
              "column": 7,
              "line": 10
            }
          }
        },
        "range": [
          128,
          136
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        128,
        137
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 10
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
            "name": "bar",
            "optional": false,
            "range": [
              144,
              147
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                150,
                151
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                152,
                154
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "range": [
              150,
              155
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "range": [
            144,
            155
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        138,
        155
      ],
      "loc": {
        "end": {
          "column": 17,
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
      "column": 18,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
