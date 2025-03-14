__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    286
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          47,
          49
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 26,
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
        "name": "alert",
        "optional": false,
        "range": [
          30,
          35
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            },
            "range": [
              37,
              45
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                39,
                45
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            }
          },
          "range": [
            36,
            45
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        }
      ],
      "range": [
        21,
        49
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 3
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
            "name": "parameterFn",
            "optional": false,
            "range": [
              57,
              68
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "range": [
                      103,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 5
                      },
                      "start": {
                        "column": 52,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "range": [
                      109,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 5
                      },
                      "start": {
                        "column": 58,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    103,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 5
                    },
                    "start": {
                      "column": 52,
                      "line": 5
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "alert",
                "optional": false,
                "range": [
                  97,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 5
                  },
                  "start": {
                    "column": 46,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                97,
                115
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 5
                },
                "start": {
                  "column": 46,
                  "line": 5
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
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 5
                    }
                  },
                  "range": [
                    77,
                    92
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
                          "name": "store",
                          "optional": false,
                          "range": [
                            79,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 5
                            },
                            "start": {
                              "column": 28,
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
                              "column": 40,
                              "line": 5
                            },
                            "start": {
                              "column": 33,
                              "line": 5
                            }
                          },
                          "range": [
                            84,
                            91
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              85,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 34,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          79,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 5
                          },
                          "start": {
                            "column": 28,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      78,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  72,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              71,
              115
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            57,
            115
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        51,
        115
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 5
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
            "name": "brokenFunction",
            "optional": false,
            "range": [
              122,
              136
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  217,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 6
                  },
                  "start": {
                    "column": 101,
                    "line": 6
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 6
                      },
                      "start": {
                        "column": 86,
                        "line": 6
                      }
                    },
                    "range": [
                      202,
                      212
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OwnProps",
                        "optional": false,
                        "range": [
                          204,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 6
                          },
                          "start": {
                            "column": 88,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        204,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 6
                        },
                        "start": {
                          "column": 88,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    201,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 6
                    },
                    "start": {
                      "column": 85,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                200,
                218
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 6
                },
                "start": {
                  "column": 84,
                  "line": 6
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
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  },
                  "range": [
                    151,
                    195
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 6
                            },
                            "start": {
                              "column": 39,
                              "line": 6
                            }
                          },
                          "range": [
                            155,
                            186
                          ],
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dispatch",
                                      "optional": false,
                                      "range": [
                                        158,
                                        166
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 6
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
                                          "column": 58,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 50,
                                          "line": 6
                                        }
                                      },
                                      "range": [
                                        166,
                                        174
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          168,
                                          174
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 58,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 6
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      158,
                                      174
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 6
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  157,
                                  175
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 6
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OwnProps",
                                  "optional": false,
                                  "range": [
                                    178,
                                    186
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 62,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  178,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              157,
                              186
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 6
                              },
                              "start": {
                                "column": 41,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          154,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 6
                          },
                          "start": {
                            "column": 38,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 6
                        },
                        "start": {
                          "column": 72,
                          "line": 6
                        }
                      },
                      "range": [
                        188,
                        195
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          191,
                          195
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 6
                          },
                          "start": {
                            "column": 75,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      153,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 6
                      },
                      "start": {
                        "column": 37,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  150,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 6
                  },
                  "start": {
                    "column": 34,
                    "line": 6
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              },
              "range": [
                139,
                149
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OwnProps",
                    "optional": false,
                    "range": [
                      140,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    140,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              139,
              218
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          },
          "range": [
            122,
            218
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        116,
        218
      ],
      "loc": {
        "end": {
          "column": 102,
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
        219,
        285
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Form3",
              "optional": false,
              "range": [
                232,
                237
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
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
                        "name": "store",
                        "optional": false,
                        "range": [
                          269,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 7
                          },
                          "start": {
                            "column": 50,
                            "line": 7
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          276,
                          283
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 7
                          },
                          "start": {
                            "column": 57,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        269,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 7
                        },
                        "start": {
                          "column": 50,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    268,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 7
                    },
                    "start": {
                      "column": 49,
                      "line": 7
                    }
                  }
                }
              ],
              "callee": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parameterFn",
                    "optional": false,
                    "range": [
                      255,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 7
                      },
                      "start": {
                        "column": 36,
                        "line": 7
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "brokenFunction",
                  "optional": false,
                  "range": [
                    240,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 21,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "range": [
                  240,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                240,
                285
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "range": [
              232,
              285
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          226,
          285
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 66,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
