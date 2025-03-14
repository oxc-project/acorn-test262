__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    313
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        26
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            22,
            26
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 22,
              "line": 1
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
            16,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          26
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "raw": "\"prop.inner\"",
                    "value": "prop.inner",
                    "range": [
                      45,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 5,
                        "line": 6
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      60,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    44,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "range": [
                      69,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "range": [
                            85,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"b\"",
                          "value": "b",
                          "range": [
                            92,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 8
                            },
                            "start": {
                              "column": 15,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          85,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      75,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    69,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                38,
                104
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  108,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              },
              "range": [
                108,
                113
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              }
            },
            "range": [
              38,
              113
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "range": [
            34,
            113
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 10
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
        28,
        113
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "foo",
            "optional": false,
            "range": [
              115,
              118
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "range": [
                119,
                120
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
              "type": "Literal",
              "raw": "\"prop.inner\"",
              "value": "prop.inner",
              "range": [
                121,
                133
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            "range": [
              119,
              134
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "range": [
            115,
            135
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"A\"",
          "value": "A",
          "range": [
            137,
            140
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 12
            },
            "start": {
              "column": 22,
              "line": 12
            }
          }
        },
        "range": [
          115,
          140
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        115,
        141
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "foo",
            "optional": false,
            "range": [
              142,
              145
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  146,
                  147
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
                "name": "prop",
                "optional": false,
                "range": [
                  148,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 6,
                    "line": 13
                  }
                }
              },
              "range": [
                146,
                152
              ],
              "loc": {
                "end": {
                  "column": 10,
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
              "name": "inner",
              "optional": false,
              "range": [
                153,
                158
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
            },
            "range": [
              146,
              158
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
          },
          "range": [
            142,
            159
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"B\"",
          "value": "B",
          "range": [
            162,
            165
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 13
            },
            "start": {
              "column": 20,
              "line": 13
            }
          }
        },
        "range": [
          142,
          165
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        142,
        166
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        168,
        240
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            185,
            240
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    192,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 16
                    },
                    "start": {
                      "column": 5,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "\"prop.inner\"",
                  "value": "prop.inner",
                  "range": [
                    194,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  192,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 16
                  },
                  "start": {
                    "column": 5,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Literal",
                    "raw": "\"A\"",
                    "value": "A",
                    "range": [
                      210,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 23,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "range": [
                          219,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 17
                          },
                          "start": {
                            "column": 5,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          221,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 17
                          },
                          "start": {
                            "column": 7,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        219,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 17
                        },
                        "start": {
                          "column": 5,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "range": [
                        226,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 17
                        },
                        "start": {
                          "column": 12,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      219,
                      231
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 5,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    210,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 23,
                      "line": 16
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"B\"",
                  "value": "B",
                  "range": [
                    235,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 17
                    },
                    "start": {
                      "column": 21,
                      "line": 17
                    }
                  }
                },
                "range": [
                  210,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 17
                  },
                  "start": {
                    "column": 23,
                    "line": 16
                  }
                }
              },
              "range": [
                191,
                238
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 17,
              "line": 15
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            181,
            184
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 15
            },
            "start": {
              "column": 13,
              "line": 15
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          175,
          240
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        242,
        313
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
              "name": "oo",
              "optional": false,
              "range": [
                253,
                255
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "range": [
                        265,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 21
                        },
                        "start": {
                          "column": 5,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "'prop.inner'",
                      "value": "prop.inner",
                      "range": [
                        267,
                        279
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
                    },
                    "range": [
                      265,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 21
                      },
                      "start": {
                        "column": 5,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"A\"",
                    "value": "A",
                    "range": [
                      282,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 21
                      },
                      "start": {
                        "column": 22,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    264,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "range": [
                          292,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 22
                          },
                          "start": {
                            "column": 5,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          294,
                          298
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
                      "range": [
                        292,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 22
                        },
                        "start": {
                          "column": 5,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "range": [
                        299,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      292,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 5,
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
                    "raw": "\"B\"",
                    "value": "B",
                    "range": [
                      307,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 22
                      },
                      "start": {
                        "column": 20,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    291,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                258,
                313
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 23
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "range": [
              253,
              313
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          249,
          313
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
