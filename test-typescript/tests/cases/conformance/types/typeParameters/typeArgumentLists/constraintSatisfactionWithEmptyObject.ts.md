__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    85,
    562
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          122,
          125
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 4
          },
          "start": {
            "column": 37,
            "line": 4
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
          94,
          97
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
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
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            },
            "range": [
              117,
              120
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              },
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 34,
                  "line": 4
                }
              }
            }
          },
          "range": [
            116,
            120
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 4
            },
            "start": {
              "column": 31,
              "line": 4
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 4
          }
        },
        "range": [
          97,
          115
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
                "name": "Object",
                "optional": false,
                "range": [
                  108,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              },
              "range": [
                108,
                114
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              98,
              114
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        85,
        125
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "r",
            "optional": false,
            "range": [
              130,
              131
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  138,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                134,
                137
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              134,
              141
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            130,
            141
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        126,
        142
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "a",
            "optional": false,
            "range": [
              147,
              148
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
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              151,
              153
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            147,
            153
          ],
          "loc": {
            "end": {
              "column": 10,
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
        143,
        154
      ],
      "loc": {
        "end": {
          "column": 11,
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
            "name": "r",
            "optional": false,
            "range": [
              159,
              160
            ],
            "loc": {
              "end": {
                "column": 5,
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
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  167,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                163,
                166
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              163,
              170
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            159,
            170
          ],
          "loc": {
            "end": {
              "column": 15,
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
        155,
        171
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          199,
          235
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                205,
                216
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                216,
                233
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  230,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 10
                        },
                        "start": {
                          "column": 24,
                          "line": 10
                        }
                      },
                      "range": [
                        225,
                        228
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            227,
                            228
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 10
                            },
                            "start": {
                              "column": 26,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          227,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 10
                          },
                          "start": {
                            "column": 26,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      224,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    217,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              205,
              233
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
            "column": 26,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          179,
          180
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        },
        "range": [
          180,
          198
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
                "name": "Object",
                "optional": false,
                "range": [
                  191,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "range": [
                191,
                197
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              181,
              197
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        173,
        235
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "r2",
            "optional": false,
            "range": [
              241,
              243
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  252,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                250,
                251
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "range": [
              246,
              255
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            241,
            255
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 13
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
        237,
        256
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          288,
          301
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                294,
                295
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 5,
                  "line": 16
                }
              },
              "range": [
                295,
                298
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    297,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  297,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              294,
              299
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 16
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
            "line": 17
          },
          "start": {
            "column": 30,
            "line": 15
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          268,
          269
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        },
        "range": [
          269,
          287
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
                "name": "Object",
                "optional": false,
                "range": [
                  280,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 22,
                    "line": 15
                  }
                }
              },
              "range": [
                280,
                286
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                270,
                271
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              270,
              286
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        258,
        301
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                307,
                314
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    310,
                    314
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        311,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 18
                        },
                        "start": {
                          "column": 9,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    309,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                },
                "range": [
                  309,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              306,
              314
            ],
            "loc": {
              "end": {
                "column": 12,
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
            306,
            314
          ],
          "loc": {
            "end": {
              "column": 12,
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
        302,
        315
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          368,
          371
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 21
          },
          "start": {
            "column": 34,
            "line": 21
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
          343,
          347
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
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
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 29,
                "line": 21
              }
            },
            "range": [
              363,
              366
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  365,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 21
                  },
                  "start": {
                    "column": 31,
                    "line": 21
                  }
                }
              },
              "range": [
                365,
                366
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 31,
                  "line": 21
                }
              }
            }
          },
          "range": [
            362,
            366
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 21
            },
            "start": {
              "column": 28,
              "line": 21
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 21
          }
        },
        "range": [
          347,
          361
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                358,
                360
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 21
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                348,
                349
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              348,
              360
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 14,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        334,
        371
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "r",
            "optional": false,
            "range": [
              376,
              377
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  385,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
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
                380,
                384
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              380,
              388
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "range": [
            376,
            388
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        372,
        389
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
              394,
              395
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              398,
              400
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            394,
            400
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        390,
        401
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "r",
            "optional": false,
            "range": [
              406,
              407
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  415,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
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
                410,
                414
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              410,
              418
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            406,
            418
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        402,
        419
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          444,
          480
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                450,
                461
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                461,
                478
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  475,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 27
                        },
                        "start": {
                          "column": 24,
                          "line": 27
                        }
                      },
                      "range": [
                        470,
                        473
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            472,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 27
                            },
                            "start": {
                              "column": 26,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          472,
                          473
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 27
                          },
                          "start": {
                            "column": 26,
                            "line": 27
                          }
                        }
                      }
                    },
                    "range": [
                      469,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 27
                      },
                      "start": {
                        "column": 23,
                        "line": 27
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    462,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 27
                    },
                    "start": {
                      "column": 16,
                      "line": 27
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 27
                },
                "start": {
                  "column": 15,
                  "line": 27
                }
              }
            },
            "range": [
              450,
              478
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 23,
            "line": 26
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          427,
          429
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 26
          },
          "start": {
            "column": 6,
            "line": 26
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 26
          },
          "start": {
            "column": 8,
            "line": 26
          }
        },
        "range": [
          429,
          443
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                440,
                442
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 26
                },
                "start": {
                  "column": 19,
                  "line": 26
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                430,
                431
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              430,
              442
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        421,
        480
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "r2",
            "optional": false,
            "range": [
              486,
              488
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  498,
                  500
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 16,
                    "line": 30
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "range": [
                495,
                497
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 13,
                  "line": 30
                }
              }
            },
            "range": [
              491,
              501
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          },
          "range": [
            486,
            501
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        482,
        502
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          531,
          544
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                537,
                538
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                  "column": 8,
                  "line": 33
                },
                "start": {
                  "column": 5,
                  "line": 33
                }
              },
              "range": [
                538,
                541
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    540,
                    541
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 33
                    },
                    "start": {
                      "column": 7,
                      "line": 33
                    }
                  }
                },
                "range": [
                  540,
                  541
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 33
                  },
                  "start": {
                    "column": 7,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              537,
              542
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 27,
            "line": 32
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          514,
          516
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 32
          },
          "start": {
            "column": 10,
            "line": 32
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 32
          },
          "start": {
            "column": 12,
            "line": 32
          }
        },
        "range": [
          516,
          530
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                527,
                529
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 32
                },
                "start": {
                  "column": 23,
                  "line": 32
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                517,
                518
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              517,
              529
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 32
              },
              "start": {
                "column": 13,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        504,
        544
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 35
                },
                "start": {
                  "column": 6,
                  "line": 35
                }
              },
              "range": [
                551,
                559
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    555,
                    559
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        556,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 35
                    },
                    "start": {
                      "column": 10,
                      "line": 35
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "range": [
                    553,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "range": [
                  553,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              549,
              559
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": null,
          "range": [
            549,
            559
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        545,
        560
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
