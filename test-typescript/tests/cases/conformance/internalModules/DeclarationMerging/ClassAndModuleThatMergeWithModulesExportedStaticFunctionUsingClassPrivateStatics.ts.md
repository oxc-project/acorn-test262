__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    254
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          17,
          101
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
              "name": "id",
              "optional": false,
              "range": [
                23,
                25
              ],
              "loc": {
                "end": {
                  "column": 6,
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
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                25,
                33
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  27,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              23,
              34
            ],
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
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                39,
                44
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
            "override": false,
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
                  "column": 9,
                  "line": 3
                }
              },
              "range": [
                44,
                47
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    46,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "range": [
                  46,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              39,
              48
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sfn",
              "optional": false,
              "range": [
                69,
                72
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                72,
                99
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        94,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 5
                        },
                        "start": {
                          "column": 44,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      87,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 5
                      },
                      "start": {
                        "column": 37,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  85,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 35,
                    "line": 5
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    },
                    "range": [
                      75,
                      83
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        77,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
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
                    73,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 5
                    },
                    "start": {
                      "column": 23,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              }
            },
            "range": [
              54,
              99
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clodule",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          16
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        101
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              168,
              250
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "'a'",
                          "value": "a",
                          "range": [
                            239,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 27,
                              "line": 11
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
                          "name": "clodule",
                          "optional": false,
                          "range": [
                            227,
                            234
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 11
                            },
                            "start": {
                              "column": 15,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sfn",
                          "optional": false,
                          "range": [
                            235,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 11
                            },
                            "start": {
                              "column": 23,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          227,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        227,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      220,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  210,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 46,
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
                "name": "fn",
                "optional": false,
                "range": [
                  184,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
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
                        "column": 30,
                        "line": 10
                      },
                      "start": {
                        "column": 27,
                        "line": 10
                      }
                    },
                    "range": [
                      191,
                      194
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          193,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 10
                          },
                          "start": {
                            "column": 29,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        193,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 10
                        },
                        "start": {
                          "column": 29,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    190,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 26,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 10
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    },
                    "range": [
                      197,
                      200
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          199,
                          200
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 10
                          },
                          "start": {
                            "column": 35,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        199,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 10
                        },
                        "start": {
                          "column": 35,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    196,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 10
                    },
                    "start": {
                      "column": 32,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 10
                  },
                  "start": {
                    "column": 37,
                    "line": 10
                  }
                },
                "range": [
                  201,
                  209
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    203,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 10
                    },
                    "start": {
                      "column": 39,
                      "line": 10
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                },
                "range": [
                  186,
                  189
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
                        187,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 23,
                          "line": 10
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      187,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  }
                ]
              },
              "range": [
                175,
                250
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          118,
          252
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 8
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          110,
          117
        ],
        "decorators": [],
        "name": "clodule",
        "optional": false,
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "kind": "module",
      "range": [
        103,
        252
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
