__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    207
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          48,
          71
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 3,
                  "line": 4
                }
              },
              "range": [
                53,
                61
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  55,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              52,
              61
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                64,
                65
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
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
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 3,
                  "line": 5
                }
              },
              "range": [
                65,
                69
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TG",
                  "optional": false,
                  "range": [
                    67,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                },
                "range": [
                  67,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              64,
              69
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 2,
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
            "column": 26,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestGeneric",
        "optional": false,
        "range": [
          32,
          43
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        },
        "range": [
          43,
          47
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TG",
              "optional": false,
              "range": [
                44,
                46
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              44,
              46
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        71
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
            "name": "removeF",
            "optional": false,
            "range": [
              79,
              86
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "range": [
                      141,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    134,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 9
                    },
                    "start": {
                      "column": 2,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                130,
                147
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 57,
                  "line": 8
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
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
                      "name": "f",
                      "optional": false,
                      "range": [
                        96,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "range": [
                        96,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      96,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "range": [
                        102,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 29,
                          "line": 8
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "range": [
                      99,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 26,
                        "line": 8
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 8
                    },
                    "start": {
                      "column": 35,
                      "line": 8
                    }
                  },
                  "range": [
                    108,
                    125
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        121,
                        125
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TX",
                            "optional": false,
                            "range": [
                              122,
                              124
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 8
                              },
                              "start": {
                                "column": 49,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            122,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 8
                            },
                            "start": {
                              "column": 49,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 8
                        },
                        "start": {
                          "column": 48,
                          "line": 8
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestGeneric",
                      "optional": false,
                      "range": [
                        110,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 8
                        },
                        "start": {
                          "column": 37,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      110,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 8
                      },
                      "start": {
                        "column": 37,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  94,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              },
              "range": [
                89,
                93
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TX",
                    "optional": false,
                    "range": [
                      90,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    90,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 17,
                      "line": 8
                    }
                  }
                }
              ]
            },
            "range": [
              89,
              147
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            79,
            147
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
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
        73,
        147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              },
              "range": [
                161,
                169
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  163,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              155,
              169
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
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
                        "name": "f",
                        "optional": false,
                        "range": [
                          190,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 12
                          },
                          "start": {
                            "column": 41,
                            "line": 12
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          193,
                          195
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 12
                          },
                          "start": {
                            "column": 44,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        190,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
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
                        "name": "g",
                        "optional": false,
                        "range": [
                          197,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 48,
                            "line": 12
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          200,
                          201
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 12
                          },
                          "start": {
                            "column": 51,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        197,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 12
                        },
                        "start": {
                          "column": 48,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    188,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 12
                    },
                    "start": {
                      "column": 39,
                      "line": 12
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeF",
                "optional": false,
                "range": [
                  172,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  179,
                  187
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      180,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 12
                      },
                      "start": {
                        "column": 31,
                        "line": 12
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                }
              },
              "range": [
                172,
                204
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 12
                },
                "start": {
                  "column": 56,
                  "line": 12
                }
              }
            },
            "range": [
              172,
              206
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          },
          "range": [
            155,
            206
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        149,
        206
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
