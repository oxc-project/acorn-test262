__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    168
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        111
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            18,
            111
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  24,
                  35
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
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
                  35,
                  109
                ],
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
                            "name": "child",
                            "optional": false,
                            "range": [
                              83,
                              88
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 3
                              },
                              "start": {
                                "column": 12,
                                "line": 3
                              }
                            }
                          },
                          "init": {
                            "type": "NewExpression",
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "range": [
                                  97,
                                  101
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                95,
                                96
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 3
                                },
                                "start": {
                                  "column": 24,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              91,
                              102
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 3
                              },
                              "start": {
                                "column": 20,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            83,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        79,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    69,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 49,
                      "line": 2
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
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      },
                      "range": [
                        44,
                        67
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 2
                                },
                                "start": {
                                  "column": 31,
                                  "line": 2
                                }
                              },
                              "range": [
                                51,
                                58
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    54,
                                    58
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T1",
                                        "optional": false,
                                        "range": [
                                          55,
                                          57
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
                                            "line": 2
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 2
                                          }
                                        }
                                      },
                                      "range": [
                                        55,
                                        57
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 2
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 2
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 2
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    53,
                                    54
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 2
                                    }
                                  }
                                },
                                "range": [
                                  53,
                                  58
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              47,
                              58
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 2
                              },
                              "start": {
                                "column": 27,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 2
                            },
                            "start": {
                              "column": 40,
                              "line": 2
                            }
                          },
                          "range": [
                            60,
                            67
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              63,
                              67
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 2
                              },
                              "start": {
                                "column": 43,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          46,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      36,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              },
              "range": [
                24,
                109
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
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
              "line": 5
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          },
          "range": [
            14,
            18
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "range": [
                  15,
                  17
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                15,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          111
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
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
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        113,
        167
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            132,
            167
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  138,
                  149
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                  149,
                  165
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    162,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
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
                    "name": "parent",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 8
                        },
                        "start": {
                          "column": 22,
                          "line": 8
                        }
                      },
                      "range": [
                        156,
                        160
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "range": [
                            158,
                            160
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 24,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          158,
                          160
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 8
                          },
                          "start": {
                            "column": 24,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      150,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              },
              "range": [
                138,
                165
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 7
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            126,
            127
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 18,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          },
          "range": [
            127,
            131
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  128,
                  130
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
              "out": false,
              "range": [
                128,
                130
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
            }
          ]
        },
        "range": [
          120,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
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
          "column": 1,
          "line": 9
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
