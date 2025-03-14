__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    669
  ],
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
            "name": "kindCache",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                44
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 1
                            },
                            "start": {
                              "column": 24,
                              "line": 1
                            }
                          },
                          "range": [
                            24,
                            32
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              26,
                              32
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 1
                              },
                              "start": {
                                "column": 26,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          20,
                          32
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 1
                          },
                          "start": {
                            "column": 20,
                            "line": 1
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
                          "column": 42,
                          "line": 1
                        },
                        "start": {
                          "column": 33,
                          "line": 1
                        }
                      },
                      "range": [
                        33,
                        42
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          35,
                          42
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 1
                          },
                          "start": {
                            "column": 35,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      19,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 19,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  17,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              47,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          },
          "range": [
            6,
            49
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "range": [
                              165,
                              169
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 5
                              },
                              "start": {
                                "column": 40,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "Class with kind \"",
                              "raw": "Class with kind \""
                            },
                            "range": [
                              145,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
                                "line": 5
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "\" is already registered.",
                              "raw": "\" is already registered."
                            },
                            "range": [
                              169,
                              195
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 5
                              },
                              "start": {
                                "column": 44,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          145,
                          195
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        139,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 14,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      135,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    129,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                123,
                201
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "kindCache",
                "optional": false,
                "range": [
                  106,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  116,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              },
              "range": [
                106,
                121
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "range": [
              102,
              201
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 4
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
                  "name": "kindCache",
                  "optional": false,
                  "range": [
                    204,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 2,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    214,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                },
                "range": [
                  204,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 2,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  222,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 20,
                    "line": 7
                  }
                }
              },
              "range": [
                204,
                226
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            "range": [
              204,
              227
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "range": [
          98,
          229
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 46,
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
        "name": "register",
        "optional": false,
        "range": [
          61,
          69
        ],
        "loc": {
          "end": {
            "column": 17,
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
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            },
            "range": [
              74,
              82
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                76,
                82
              ],
              "loc": {
                "end": {
                  "column": 30,
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
            70,
            82
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 18,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 3
          },
          "start": {
            "column": 31,
            "line": 3
          }
        },
        "range": [
          83,
          97
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSVoidKeyword",
              "range": [
                85,
                89
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 33,
                  "line": 3
                }
              }
            },
            {
              "type": "TSNeverKeyword",
              "range": [
                92,
                97
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 40,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            85,
            97
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 33,
              "line": 3
            }
          }
        }
      },
      "range": [
        52,
        229
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    301,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "register",
                "optional": false,
                "range": [
                  292,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 2,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                292,
                306
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "range": [
              292,
              307
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  324,
                  406
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "THE_KIND",
                      "optional": false,
                      "range": [
                        346,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 14
                        },
                        "start": {
                          "column": 20,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": true,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 14
                        },
                        "start": {
                          "column": 28,
                          "line": 14
                        }
                      },
                      "range": [
                        354,
                        361
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "range": [
                            356,
                            361
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 14
                            },
                            "start": {
                              "column": 30,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          356,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 14
                          },
                          "start": {
                            "column": 30,
                            "line": 14
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        364,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 14
                        },
                        "start": {
                          "column": 38,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      330,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        383,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 15
                        },
                        "start": {
                          "column": 17,
                          "line": 15
                        }
                      },
                      "range": [
                        387,
                        394
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKind",
                          "optional": false,
                          "range": [
                            389,
                            394
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 15
                            },
                            "start": {
                              "column": 19,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          389,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 15
                          },
                          "start": {
                            "column": 19,
                            "line": 15
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        397,
                        401
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 27,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      374,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 16
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "range": [
                318,
                406
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "range": [
              311,
              407
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "range": [
          288,
          409
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 57,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassFactory",
        "optional": false,
        "range": [
          240,
          252
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 10
              },
              "start": {
                "column": 48,
                "line": 10
              }
            },
            "range": [
              279,
              286
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TKind",
                "optional": false,
                "range": [
                  281,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 10
                  },
                  "start": {
                    "column": 50,
                    "line": 10
                  }
                }
              },
              "range": [
                281,
                286
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 10
                },
                "start": {
                  "column": 50,
                  "line": 10
                }
              }
            }
          },
          "range": [
            275,
            286
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 10
            },
            "start": {
              "column": 44,
              "line": 10
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 10
          },
          "start": {
            "column": 21,
            "line": 10
          }
        },
        "range": [
          252,
          274
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                267,
                273
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 10
                },
                "start": {
                  "column": 36,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKind",
              "optional": false,
              "range": [
                253,
                258
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              253,
              273
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        231,
        409
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          423,
          507
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                443,
                444
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 18,
                  "line": 20
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "\"A\"",
              "value": "A",
              "range": [
                447,
                450
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            },
            "range": [
              427,
              451
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                470,
                471
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 21
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "\"B\"",
              "value": "B",
              "range": [
                474,
                477
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
              454,
              478
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                497,
                498
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 22
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "\"C\"",
              "value": "C",
              "range": [
                501,
                504
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 22
                },
                "start": {
                  "column": 22,
                  "line": 22
                }
              }
            },
            "range": [
              481,
              505
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 12,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kinds",
        "optional": false,
        "range": [
          417,
          422
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        411,
        507
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        509,
        561
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            558,
            561
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 49,
              "line": 25
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AKind",
          "optional": false,
          "range": [
            522,
            527
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 25
            },
            "start": {
              "column": 13,
              "line": 25
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "range": [
                  549,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 25
                  },
                  "start": {
                    "column": 40,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  555,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 25
                  },
                  "start": {
                    "column": 46,
                    "line": 25
                  }
                }
              },
              "range": [
                549,
                556
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 25
                },
                "start": {
                  "column": 40,
                  "line": 25
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "range": [
              536,
              548
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 25
              },
              "start": {
                "column": 27,
                "line": 25
              }
            }
          },
          "optional": false,
          "range": [
            536,
            557
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 25
            },
            "start": {
              "column": 27,
              "line": 25
            }
          }
        },
        "range": [
          516,
          561
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        563,
        615
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            612,
            615
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 29
            },
            "start": {
              "column": 49,
              "line": 28
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BKind",
          "optional": false,
          "range": [
            576,
            581
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 28
            },
            "start": {
              "column": 13,
              "line": 28
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "range": [
                  603,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 28
                  },
                  "start": {
                    "column": 40,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  609,
                  610
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 28
                  },
                  "start": {
                    "column": 46,
                    "line": 28
                  }
                }
              },
              "range": [
                603,
                610
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 28
                },
                "start": {
                  "column": 40,
                  "line": 28
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "range": [
              590,
              602
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 28
              },
              "start": {
                "column": 27,
                "line": 28
              }
            }
          },
          "optional": false,
          "range": [
            590,
            611
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 28
            },
            "start": {
              "column": 27,
              "line": 28
            }
          }
        },
        "range": [
          570,
          615
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        617,
        669
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            666,
            669
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 49,
              "line": 31
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CKind",
          "optional": false,
          "range": [
            630,
            635
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 31
            },
            "start": {
              "column": 13,
              "line": 31
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kinds",
                "optional": false,
                "range": [
                  657,
                  662
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 31
                  },
                  "start": {
                    "column": 40,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  663,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 31
                  },
                  "start": {
                    "column": 46,
                    "line": 31
                  }
                }
              },
              "range": [
                657,
                664
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 31
                },
                "start": {
                  "column": 40,
                  "line": 31
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassFactory",
            "optional": false,
            "range": [
              644,
              656
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 31
              },
              "start": {
                "column": 27,
                "line": 31
              }
            }
          },
          "optional": false,
          "range": [
            644,
            665
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 31
            },
            "start": {
              "column": 27,
              "line": 31
            }
          }
        },
        "range": [
          624,
          669
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
