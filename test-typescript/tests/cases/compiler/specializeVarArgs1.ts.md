__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    250
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          23,
          26
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Observable",
        "optional": false,
        "range": [
          10,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          23
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
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          85,
          116
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "push",
              "optional": false,
              "range": [
                92,
                96
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "range": [
                    100,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  },
                  "range": [
                    106,
                    111
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          108,
                          109
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 9
                          },
                          "start": {
                            "column": 20,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        108,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      108,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  97,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              92,
              113
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "range": [
              68,
              78
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              78,
              83
            ],
            "params": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      79,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 5
                      },
                      "start": {
                        "column": 48,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    79,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 5
                    },
                    "start": {
                      "column": 48,
                      "line": 5
                    }
                  }
                },
                "range": [
                  79,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 5
                  },
                  "start": {
                    "column": 48,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 5
              },
              "start": {
                "column": 47,
                "line": 5
              }
            }
          },
          "range": [
            68,
            83
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 5
            },
            "start": {
              "column": 37,
              "line": 5
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObservableArray",
        "optional": false,
        "range": [
          41,
          56
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        },
        "range": [
          56,
          59
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
                57,
                58
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              57,
              58
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        31,
        116
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                180,
                184
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 15
                },
                "start": {
                  "column": 59,
                  "line": 15
                }
              }
            },
            "range": [
              173,
              185
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 15
              },
              "start": {
                "column": 52,
                "line": 15
              }
            }
          }
        ],
        "range": [
          171,
          186
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 15
          },
          "start": {
            "column": 50,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "observableArray",
        "optional": false,
        "range": [
          130,
          145
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 15
          },
          "start": {
            "column": 29,
            "line": 15
          }
        },
        "range": [
          150,
          170
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              167,
              170
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
                    168,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 15
                    },
                    "start": {
                      "column": 47,
                      "line": 15
                    }
                  }
                },
                "range": [
                  168,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 15
                  },
                  "start": {
                    "column": 47,
                    "line": 15
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 15
              },
              "start": {
                "column": 46,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObservableArray",
            "optional": false,
            "range": [
              152,
              167
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 15
              },
              "start": {
                "column": 31,
                "line": 15
              }
            }
          },
          "range": [
            152,
            170
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 15
            },
            "start": {
              "column": 31,
              "line": 15
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 15
          },
          "start": {
            "column": 24,
            "line": 15
          }
        },
        "range": [
          145,
          148
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
                146,
                147
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 25,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              146,
              147
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 25,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        121,
        186
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "range": [
              195,
              196
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "observableArray",
              "optional": false,
              "range": [
                200,
                215
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                215,
                223
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    216,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 19
                    },
                    "start": {
                      "column": 25,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              }
            },
            "range": [
              200,
              225
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            195,
            225
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        191,
        226
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "raw": "'Some Value'",
            "value": "Some Value",
            "range": [
              235,
              247
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 7,
                "line": 21
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
            "name": "a",
            "optional": false,
            "range": [
              228,
              229
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              230,
              234
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          },
          "range": [
            228,
            234
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          228,
          248
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        228,
        249
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
