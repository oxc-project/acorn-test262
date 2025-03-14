__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    585
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          16,
          56
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                22,
                26
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                26,
                34
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  28,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
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
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "range": [
                40,
                45
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              },
              "range": [
                45,
                53
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  47,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
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
            "column": 16,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
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
        56
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              },
              "range": [
                76,
                109
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        84,
                        87
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
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 6
                            },
                            "start": {
                              "column": 11,
                              "line": 6
                            }
                          },
                          "range": [
                            91,
                            99
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              93,
                              99
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 6
                              },
                              "start": {
                                "column": 13,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          88,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
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
                          "column": 26,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      },
                      "range": [
                        100,
                        106
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          102,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      84,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  78,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              69,
              109
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            69,
            109
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        57,
        109
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
            "name": "hello",
            "optional": false,
            "range": [
              114,
              119
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              122,
              129
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "range": [
            114,
            129
          ],
          "loc": {
            "end": {
              "column": 19,
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
        110,
        130
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              },
              "range": [
                141,
                148
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    143,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "range": [
                  143,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              135,
              148
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    153,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"mower\"",
                  "value": "mower",
                  "range": [
                    159,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 9
                    },
                    "start": {
                      "column": 28,
                      "line": 9
                    }
                  }
                },
                "range": [
                  153,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 9
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "range": [
                    168,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 9
                    },
                    "start": {
                      "column": 37,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"mowing\"",
                  "value": "mowing",
                  "range": [
                    175,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 9
                    },
                    "start": {
                      "column": 44,
                      "line": 9
                    }
                  }
                },
                "range": [
                  168,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 9
                  },
                  "start": {
                    "column": 37,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              151,
              185
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 9
              },
              "start": {
                "column": 20,
                "line": 9
              }
            }
          },
          "range": [
            135,
            185
          ],
          "loc": {
            "end": {
              "column": 54,
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
        131,
        186
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    244,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    232,
                    239
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    240,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  232,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                232,
                250
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              232,
              251
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          226,
          253
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
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
        "name": "foo1",
        "optional": false,
        "range": [
          197,
          201
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
                "name": "name",
                "optional": false,
                "range": [
                  204,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 16,
                    "line": 11
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "range": [
                  210,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              "range": [
                204,
                215
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 29,
                "line": 11
              }
            },
            "range": [
              217,
              224
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "range": [
                  219,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                }
              },
              "range": [
                219,
                224
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 31,
                  "line": 11
                }
              }
            }
          },
          "range": [
            202,
            224
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "range": [
        188,
        253
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    325,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    313,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    321,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 12,
                      "line": 15
                    }
                  }
                },
                "range": [
                  313,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                313,
                331
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              313,
              332
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          307,
          334
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 53,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          263,
          267
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
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
                "name": "name",
                "optional": false,
                "range": [
                  270,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 14
                  },
                  "start": {
                    "column": 16,
                    "line": 14
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "range": [
                  276,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 22,
                    "line": 14
                  }
                }
              },
              "range": [
                270,
                281
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "range": [
                  283,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 14
                  },
                  "start": {
                    "column": 29,
                    "line": 14
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "range": [
                  290,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 14
                  },
                  "start": {
                    "column": 36,
                    "line": 14
                  }
                }
              },
              "range": [
                283,
                296
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 14
                },
                "start": {
                  "column": 29,
                  "line": 14
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 14
              },
              "start": {
                "column": 44,
                "line": 14
              }
            },
            "range": [
              298,
              305
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "range": [
                  300,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 14
                  },
                  "start": {
                    "column": 46,
                    "line": 14
                  }
                }
              },
              "range": [
                300,
                305
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 14
                },
                "start": {
                  "column": 46,
                  "line": 14
                }
              }
            }
          },
          "range": [
            268,
            305
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 14
            },
            "start": {
              "column": 14,
              "line": 14
            }
          }
        }
      ],
      "range": [
        254,
        334
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "range": [
                    384,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    372,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    380,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  372,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                372,
                389
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              372,
              390
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          366,
          392
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 31,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          344,
          348
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
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
                "name": "name",
                "optional": false,
                "range": [
                  351,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 16,
                    "line": 17
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
                "name": "name",
                "optional": false,
                "range": [
                  351,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 16,
                    "line": 17
                  }
                }
              },
              "range": [
                351,
                355
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            },
            "range": [
              357,
              364
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "range": [
                  359,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 17
                  },
                  "start": {
                    "column": 24,
                    "line": 17
                  }
                }
              },
              "range": [
                359,
                364
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 17
                }
              }
            }
          },
          "range": [
            349,
            364
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 17
            },
            "start": {
              "column": 14,
              "line": 17
            }
          }
        }
      ],
      "range": [
        335,
        392
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              399,
              405
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 21
              },
              "start": {
                "column": 5,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            394,
            398
          ],
          "loc": {
            "end": {
              "column": 4,
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
          394,
          406
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        394,
        407
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    415,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 22
                    },
                    "start": {
                      "column": 7,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"Edger\"",
                  "value": "Edger",
                  "range": [
                    421,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  415,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "range": [
                    430,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 22
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges",
                  "range": [
                    437,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 22
                    },
                    "start": {
                      "column": 29,
                      "line": 22
                    }
                  }
                },
                "range": [
                  430,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              413,
              454
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 22
              },
              "start": {
                "column": 5,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            408,
            412
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          408,
          455
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        408,
        456
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              463,
              469
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 24
              },
              "start": {
                "column": 5,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            458,
            462
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          458,
          470
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        458,
        471
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    479,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"Edger\"",
                  "value": "Edger",
                  "range": [
                    485,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                },
                "range": [
                  479,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 25
                  },
                  "start": {
                    "column": 7,
                    "line": 25
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "range": [
                    494,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 25
                    },
                    "start": {
                      "column": 22,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges",
                  "range": [
                    501,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 25
                    },
                    "start": {
                      "column": 29,
                      "line": 25
                    }
                  }
                },
                "range": [
                  494,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 25
                  },
                  "start": {
                    "column": 22,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              477,
              518
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 25
              },
              "start": {
                "column": 5,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            472,
            476
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          472,
          519
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        472,
        520
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              527,
              533
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 27
              },
              "start": {
                "column": 5,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            522,
            526
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          522,
          534
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        522,
        535
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    543,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 28
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"Edger\"",
                  "value": "Edger",
                  "range": [
                    549,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                },
                "range": [
                  543,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 28
                  },
                  "start": {
                    "column": 7,
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
                  "name": "skill",
                  "optional": false,
                  "range": [
                    558,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 28
                    },
                    "start": {
                      "column": 22,
                      "line": 28
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges",
                  "range": [
                    565,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 28
                    },
                    "start": {
                      "column": 29,
                      "line": 28
                    }
                  }
                },
                "range": [
                  558,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 28
                  },
                  "start": {
                    "column": 22,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              541,
              582
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 28
              },
              "start": {
                "column": 5,
                "line": 28
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            536,
            540
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          536,
          583
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        536,
        584
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
