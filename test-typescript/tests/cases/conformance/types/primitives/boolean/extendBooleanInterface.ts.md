__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    229
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          18,
          74
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "range": [
                24,
                31
              ],
              "loc": {
                "end": {
                  "column": 11,
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
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              },
              "range": [
                33,
                41
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  35,
                  41
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
            "static": false,
            "range": [
              24,
              42
            ],
            "loc": {
              "end": {
                "column": 22,
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
              "name": "doOtherStuff",
              "optional": false,
              "range": [
                47,
                59
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  },
                  "range": [
                    64,
                    67
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        66,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  63,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              },
              "range": [
                68,
                71
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    70,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
                      "line": 3
                    }
                  }
                },
                "range": [
                  70,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              },
              "range": [
                59,
                62
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
                      60,
                      61
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
                  "out": false,
                  "range": [
                    60,
                    61
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
              ]
            },
            "range": [
              47,
              72
            ],
            "loc": {
              "end": {
                "column": 29,
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
            "column": 18,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boolean",
        "optional": false,
        "range": [
          10,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        74
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
              80,
              81
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
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              84,
              88
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            80,
            88
          ],
          "loc": {
            "end": {
              "column": 12,
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
        76,
        89
      ],
      "loc": {
        "end": {
          "column": 13,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                95,
                103
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  97,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
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
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
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
                  106,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "range": [
                  108,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              },
              "range": [
                106,
                115
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              106,
              117
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            94,
            117
          ],
          "loc": {
            "end": {
              "column": 27,
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
        118
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "name": "b",
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
                124,
                132
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  126,
                  132
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
              123,
              132
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'hm'",
                "value": "hm",
                "range": [
                  150,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
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
                "name": "x",
                "optional": false,
                "range": [
                  135,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doOtherStuff",
                "optional": false,
                "range": [
                  137,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
                  }
                }
              },
              "range": [
                135,
                149
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              135,
              155
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            123,
            155
          ],
          "loc": {
            "end": {
              "column": 36,
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
        119,
        156
      ],
      "loc": {
        "end": {
          "column": 37,
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 5,
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
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              161,
              170
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  173,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'doStuff'",
                "value": "doStuff",
                "range": [
                  175,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "range": [
                173,
                185
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              173,
              187
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          },
          "range": [
            161,
            187
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        157,
        188
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              },
              "range": [
                194,
                202
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  196,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              193,
              202
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'hm'",
                "value": "hm",
                "range": [
                  223,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 10
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  205,
                  206
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
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'doOtherStuff'",
                "value": "doOtherStuff",
                "range": [
                  207,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              },
              "range": [
                205,
                222
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              205,
              228
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          },
          "range": [
            193,
            228
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        189,
        229
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 10
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
      "column": 40,
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
