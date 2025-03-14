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
          15,
          44
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "barId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  },
                  "range": [
                    27,
                    35
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      29,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  22,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
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
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              },
              "range": [
                36,
                41
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  38,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              21,
              42
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBar",
        "optional": false,
        "range": [
          10,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
        44
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          61,
          163
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                67,
                70
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 6
                    },
                    "start": {
                      "column": 30,
                      "line": 6
                    }
                  },
                  "range": [
                    93,
                    99
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TBar",
                      "optional": false,
                      "range": [
                        95,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 6
                        },
                        "start": {
                          "column": 32,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      95,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 6
                      },
                      "start": {
                        "column": 32,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  90,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 6
                    },
                    "start": {
                      "column": 42,
                      "line": 6
                    }
                  },
                  "range": [
                    105,
                    126
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 6
                            },
                            "start": {
                              "column": 48,
                              "line": 6
                            }
                          },
                          "range": [
                            111,
                            117
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TBar",
                              "optional": false,
                              "range": [
                                113,
                                117
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 6
                                },
                                "start": {
                                  "column": 50,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              113,
                              117
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
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
                          108,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 6
                          },
                          "start": {
                            "column": 45,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 6
                        },
                        "start": {
                          "column": 56,
                          "line": 6
                        }
                      },
                      "range": [
                        119,
                        126
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TBar",
                          "optional": false,
                          "range": [
                            122,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 6
                            },
                            "start": {
                              "column": 59,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          122,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 6
                          },
                          "start": {
                            "column": 59,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      107,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 6
                      },
                      "start": {
                        "column": 44,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  101,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 6
                    },
                    "start": {
                      "column": 69,
                      "line": 6
                    }
                  },
                  "range": [
                    132,
                    153
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 6
                            },
                            "start": {
                              "column": 75,
                              "line": 6
                            }
                          },
                          "range": [
                            138,
                            144
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TBar",
                              "optional": false,
                              "range": [
                                140,
                                144
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 6
                                },
                                "start": {
                                  "column": 77,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              140,
                              144
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 6
                              },
                              "start": {
                                "column": 77,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          135,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 6
                          },
                          "start": {
                            "column": 72,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 6
                        },
                        "start": {
                          "column": 83,
                          "line": 6
                        }
                      },
                      "range": [
                        146,
                        153
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TBar",
                          "optional": false,
                          "range": [
                            149,
                            153
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 6
                            },
                            "start": {
                              "column": 86,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          149,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 6
                          },
                          "start": {
                            "column": 86,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      134,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 6
                      },
                      "start": {
                        "column": 71,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  128,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 6
                  },
                  "start": {
                    "column": 65,
                    "line": 6
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 97,
                  "line": 6
                },
                "start": {
                  "column": 91,
                  "line": 6
                }
              },
              "range": [
                154,
                160
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TBar",
                  "optional": false,
                  "range": [
                    156,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 6
                    },
                    "start": {
                      "column": 93,
                      "line": 6
                    }
                  }
                },
                "range": [
                  156,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 6
                  },
                  "start": {
                    "column": 93,
                    "line": 6
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              },
              "range": [
                70,
                89
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
                      "name": "IBar",
                      "optional": false,
                      "range": [
                        84,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 21,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      84,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TBar",
                    "optional": false,
                    "range": [
                      71,
                      75
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
                  "out": false,
                  "range": [
                    71,
                    88
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
                }
              ]
            },
            "range": [
              67,
              161
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 15,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "range": [
          56,
          60
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        46,
        163
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              },
              "range": [
                172,
                178
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "range": [
                    174,
                    178
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
                  174,
                  178
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
              }
            },
            "range": [
              169,
              178
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
          "init": null,
          "range": [
            169,
            178
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        165,
        179
      ],
      "loc": {
        "end": {
          "column": 14,
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    190,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    195,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                },
                "range": [
                  190,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              188,
              201
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                210,
                214
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 30,
                  "line": 10
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
                "name": "bar",
                "optional": false,
                "range": [
                  203,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              203,
              214
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                223,
                227
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 10
                },
                "start": {
                  "column": 43,
                  "line": 10
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
                "name": "bar",
                "optional": false,
                "range": [
                  216,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 36,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              216,
              227
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 10
              },
              "start": {
                "column": 36,
                "line": 10
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
            "name": "foo",
            "optional": false,
            "range": [
              180,
              183
            ],
            "loc": {
              "end": {
                "column": 3,
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
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              184,
              187
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "range": [
            180,
            187
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          180,
          228
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        180,
        229
      ],
      "loc": {
        "end": {
          "column": 49,
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
      "column": 49,
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
