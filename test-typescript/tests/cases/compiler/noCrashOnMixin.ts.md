__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    360
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          15,
          54
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                31,
                42
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
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
                42,
                52
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  45,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 2
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
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              52
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
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
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Abstract",
        "optional": false,
        "range": [
          6,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
        54
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          88,
          91
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 32,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Concrete",
        "optional": false,
        "range": [
          62,
          70
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Abstract",
        "optional": false,
        "range": [
          79,
          87
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 6
          }
        }
      },
      "range": [
        56,
        91
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          98,
          109
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                128,
                132
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 9
                },
                "start": {
                  "column": 35,
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
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 39,
                  "line": 9
                }
              },
              "range": [
                132,
                139
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    134,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 41,
                      "line": 9
                    }
                  }
                },
                "range": [
                  134,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 41,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              125,
              139
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 32,
                "line": 9
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 52,
              "line": 9
            },
            "start": {
              "column": 48,
              "line": 9
            }
          },
          "range": [
            141,
            145
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                144,
                145
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 9
                },
                "start": {
                  "column": 51,
                  "line": 9
                }
              }
            },
            "range": [
              144,
              145
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 9
              },
              "start": {
                "column": 51,
                "line": 9
              }
            }
          }
        },
        "range": [
          120,
          145
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 9
          },
          "start": {
            "column": 27,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 9
          },
          "start": {
            "column": 16,
            "line": 9
          }
        },
        "range": [
          109,
          117
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                114,
                116
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 21,
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
                110,
                111
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              110,
              116
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        93,
        146
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  235,
                  242
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "range": [
                  230,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              "range": [
                216,
                242
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              209,
              243
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          203,
          245
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 55,
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
        "name": "Mixin",
        "optional": false,
        "range": [
          157,
          162
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 11
              },
              "start": {
                "column": 46,
                "line": 11
              }
            },
            "range": [
              194,
              201
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "range": [
                  196,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 11
                  },
                  "start": {
                    "column": 48,
                    "line": 11
                  }
                }
              },
              "range": [
                196,
                201
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 11
                },
                "start": {
                  "column": 48,
                  "line": 11
                }
              }
            }
          },
          "range": [
            190,
            201
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 11
            },
            "start": {
              "column": 42,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 11
          },
          "start": {
            "column": 14,
            "line": 11
          }
        },
        "range": [
          162,
          189
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
                "name": "Constructor",
                "optional": false,
                "range": [
                  177,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "range": [
                177,
                188
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 29,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBase",
              "optional": false,
              "range": [
                163,
                168
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              163,
              188
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        148,
        245
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          259,
          262
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Empty",
        "optional": false,
        "range": [
          253,
          258
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        247,
        262
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          304,
          360
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "trigger",
              "optional": false,
              "range": [
                317,
                324
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
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
                324,
                358
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Concrete",
                        "optional": false,
                        "range": [
                          341,
                          349
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        337,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      337,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  327,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 21,
                    "line": 20
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
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 20
                }
              }
            },
            "range": [
              310,
              358
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
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
            "column": 40,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CrashTrigger",
        "optional": false,
        "range": [
          270,
          282
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Empty",
            "optional": false,
            "range": [
              297,
              302
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 19
              },
              "start": {
                "column": 33,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "range": [
            291,
            296
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 19
            },
            "start": {
              "column": 27,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          291,
          303
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 19
          },
          "start": {
            "column": 27,
            "line": 19
          }
        }
      },
      "range": [
        264,
        360
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
