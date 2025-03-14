__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    159
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          15,
          43
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
                18,
                22
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 3
                },
                "start": {
                  "column": 0,
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
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              },
              "range": [
                22,
                30
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  24,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              18,
              31
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 0,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 6,
                  "line": 5
                },
                "start": {
                  "column": 3,
                  "line": 5
                }
              },
              "range": [
                36,
                39
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    38,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                },
                "range": [
                  38,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "range": [
              33,
              40
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
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
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          14
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
          54,
          93
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                57,
                60
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 0,
                  "line": 11
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
                60,
                90
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        82,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 13
                        },
                        "start": {
                          "column": 7,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      75,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 13
                      },
                      "start": {
                        "column": 0,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  72,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 11
                  }
                },
                "range": [
                  62,
                  71
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      65,
                      71
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          66,
                          70
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
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      64,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 11
                      },
                      "start": {
                        "column": 7,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    64,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 7,
                      "line": 11
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 1,
                  "line": 15
                },
                "start": {
                  "column": 3,
                  "line": 11
                }
              }
            },
            "range": [
              57,
              90
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 11
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
            "column": 8,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "range": [
          52,
          53
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
      "range": [
        46,
        93
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          114,
          155
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                117,
                120
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 21
                },
                "start": {
                  "column": 0,
                  "line": 21
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
                120,
                152
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        144,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 23
                        },
                        "start": {
                          "column": 7,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      137,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 23
                      },
                      "start": {
                        "column": 0,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  134,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 25
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 5,
                    "line": 21
                  }
                },
                "range": [
                  122,
                  133
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      125,
                      133
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          126,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 21
                          },
                          "start": {
                            "column": 9,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      124,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 21
                      },
                      "start": {
                        "column": 7,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    124,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 7,
                      "line": 21
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 1,
                  "line": 25
                },
                "start": {
                  "column": 3,
                  "line": 21
                }
              }
            },
            "range": [
              117,
              152
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 18,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "range": [
          102,
          103
        ],
        "loc": {
          "end": {
            "column": 7,
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
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "range": [
          112,
          113
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 19
          },
          "start": {
            "column": 16,
            "line": 19
          }
        }
      },
      "range": [
        96,
        155
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
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
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
