__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    421
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          252
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
              "name": "t",
              "optional": false,
              "range": [
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                21,
                29
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  23,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              20,
              30
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "range": [
                36,
                38
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                38,
                250
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "TSTypeAliasDeclaration",
                    "declare": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ContainingThis",
                      "optional": false,
                      "range": [
                        56,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "range": [
                        73,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 30,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      51,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            168,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
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
                                "name": "x",
                                "optional": false,
                                "range": [
                                  174,
                                  175
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 7
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ThisExpression",
                                "range": [
                                  177,
                                  181
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                174,
                                181
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
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  183,
                                  184
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 7
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    186,
                                    190
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 7
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "range": [
                                    191,
                                    192
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  186,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                183,
                                192
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 7
                                },
                                "start": {
                                  "column": 27,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            172,
                            194
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          168,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      164,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 8
                              },
                              "start": {
                                "column": 13,
                                "line": 8
                              }
                            },
                            "range": [
                              209,
                              243
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
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      213,
                                      214
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 8
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
                                        "column": 34,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 8
                                      }
                                    },
                                    "range": [
                                      214,
                                      230
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ContainingThis",
                                        "optional": false,
                                        "range": [
                                          216,
                                          230
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "range": [
                                        216,
                                        230
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 8
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    213,
                                    231
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 8
                                    }
                                  }
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "range": [
                                      232,
                                      233
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 8
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
                                        "column": 45,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 8
                                      }
                                    },
                                    "range": [
                                      233,
                                      241
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "range": [
                                        235,
                                        241
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 8
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    232,
                                    241
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 8
                                    }
                                  }
                                }
                              ],
                              "range": [
                                211,
                                243
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 8
                                },
                                "start": {
                                  "column": 15,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            208,
                            243
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          208,
                          243
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      204,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
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
                  41,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 4
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
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "range": [
              36,
              250
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          6,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
        252
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "obj",
            "optional": false,
            "range": [
              337,
              340
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    349,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    350,
                    389
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              370,
                              374
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 15
                              },
                              "start": {
                                "column": 15,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "spaaace",
                            "optional": false,
                            "range": [
                              375,
                              382
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 15
                              },
                              "start": {
                                "column": 20,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            370,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 15
                            },
                            "start": {
                              "column": 15,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          363,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      353,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 5,
                      "line": 14
                    }
                  }
                },
                "range": [
                  349,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              343,
              391
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 13
              }
            }
          },
          "range": [
            337,
            391
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        333,
        392
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 18
                },
                "start": {
                  "column": 7,
                  "line": 18
                }
              },
              "range": [
                400,
                419
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
                      "name": "f",
                      "optional": false,
                      "range": [
                        404,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
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
                          "column": 23,
                          "line": 18
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      },
                      "range": [
                        405,
                        416
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 18
                            },
                            "start": {
                              "column": 17,
                              "line": 18
                            }
                          },
                          "range": [
                            410,
                            416
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              413,
                              416
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 18
                              },
                              "start": {
                                "column": 20,
                                "line": 18
                              }
                            }
                          }
                        },
                        "range": [
                          407,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 18
                          },
                          "start": {
                            "column": 14,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      404,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 18
                      },
                      "start": {
                        "column": 11,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  402,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              397,
              419
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            397,
            419
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        393,
        420
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
