__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    501
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'react'",
        "value": "react",
        "range": [
          63,
          70
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            52,
            57
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              52,
              57
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        }
      ],
      "range": [
        45,
        71
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MySFC",
                  "optional": false,
                  "range": [
                    117,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "JSXFragment",
                          "children": [
                            {
                              "type": "JSXText",
                              "range": [
                                163,
                                168
                              ],
                              "raw": "hello",
                              "value": "hello",
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 7
                                },
                                "start": {
                                  "column": 17,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "closingFragment": {
                            "type": "JSXClosingFragment",
                            "range": [
                              168,
                              171
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          },
                          "openingFragment": {
                            "type": "JSXOpeningFragment",
                            "range": [
                              161,
                              163
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 7
                              },
                              "start": {
                                "column": 15,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            161,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          154,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      144,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 35,
                        "line": 6
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
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
                            "column": 33,
                            "line": 6
                          },
                          "start": {
                            "column": 30,
                            "line": 6
                          }
                        },
                        "range": [
                          139,
                          142
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              141,
                              142
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 6
                              },
                              "start": {
                                "column": 32,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            141,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
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
                        134,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 25,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    125,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                },
                "range": [
                  117,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              113,
              179
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                229,
                296
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "render",
                    "optional": false,
                    "range": [
                      239,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      245,
                      290
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "JSXFragment",
                            "children": [
                              {
                                "type": "JSXText",
                                "range": [
                                  271,
                                  276
                                ],
                                "raw": "hello",
                                "value": "hello",
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "closingFragment": {
                              "type": "JSXClosingFragment",
                              "range": [
                                276,
                                279
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 11
                                },
                                "start": {
                                  "column": 26,
                                  "line": 11
                                }
                              }
                            },
                            "openingFragment": {
                              "type": "JSXOpeningFragment",
                              "range": [
                                269,
                                271
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 11
                                },
                                "start": {
                                  "column": 19,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              269,
                              279
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 11
                              },
                              "start": {
                                "column": 19,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            262,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        248,
                        290
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    239,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 49,
                  "line": 9
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyComponent",
              "optional": false,
              "range": [
                190,
                201
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "range": [
                  210,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "range": [
                  216,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 36,
                    "line": 9
                  }
                }
              },
              "range": [
                210,
                225
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                225,
                228
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      226,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 9
                      },
                      "start": {
                        "column": 46,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    226,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 9
                    },
                    "start": {
                      "column": 46,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 9
                },
                "start": {
                  "column": 45,
                  "line": 9
                }
              }
            },
            "range": [
              184,
              296
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    305,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      309,
                      318
                    ],
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MySFC",
                      "range": [
                        310,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    309,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                },
                "range": [
                  305,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              301,
              319
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    345,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      349,
                      364
                    ],
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyComponent",
                      "range": [
                        350,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    349,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 15
                    },
                    "start": {
                      "column": 12,
                      "line": 15
                    }
                  }
                },
                "range": [
                  345,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              341,
              365
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 4,
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    392,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      396,
                      423
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wrappedProps",
                          "optional": false,
                          "range": [
                            407,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 17
                            },
                            "start": {
                              "column": 23,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          403,
                          420
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MySFC",
                      "range": [
                        397,
                        402
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 17
                        },
                        "start": {
                          "column": 13,
                          "line": 17
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    396,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  392,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              388,
              423
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  "name": "q",
                  "optional": false,
                  "range": [
                    447,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      451,
                      484
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wrappedProps",
                          "optional": false,
                          "range": [
                            468,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 18
                            },
                            "start": {
                              "column": 29,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          464,
                          481
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 18
                          },
                          "start": {
                            "column": 25,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyComponent",
                      "range": [
                        452,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 18
                        },
                        "start": {
                          "column": 13,
                          "line": 18
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    451,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  447,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              443,
              484
            ],
            "loc": {
              "end": {
                "column": 45,
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
          107,
          501
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 34,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          82,
          86
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrappedProps",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            },
            "range": [
              102,
              105
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  104,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 31,
                    "line": 5
                  }
                }
              },
              "range": [
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            }
          },
          "range": [
            90,
            105
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        },
        "range": [
          86,
          89
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                87,
                88
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              87,
              88
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        73,
        501
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
