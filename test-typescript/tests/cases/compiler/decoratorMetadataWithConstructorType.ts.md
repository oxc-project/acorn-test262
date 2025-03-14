__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    227
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                52
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
                        27,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 2
                        },
                        "start": {
                          "column": 4,
                          "line": 2
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
                              "line": 2
                            },
                            "start": {
                              "column": 11,
                              "line": 2
                            }
                          },
                          "range": [
                            34,
                            42
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              36,
                              42
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 2
                              },
                              "start": {
                                "column": 13,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          31,
                          42
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
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
                          "line": 2
                        },
                        "start": {
                          "column": 20,
                          "line": 2
                        }
                      },
                      "range": [
                        43,
                        49
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          45,
                          49
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 2
                          },
                          "start": {
                            "column": 22,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  21,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              52
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            52
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        53
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
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
          63,
          110
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                69,
                80
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                80,
                108
              ],
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
                          "type": "Literal",
                          "raw": "'new A'",
                          "value": "new A",
                          "range": [
                            97,
                            104
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 6
                            },
                            "start": {
                              "column": 32,
                              "line": 6
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
                            85,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
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
                            93,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 28,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          85,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        85,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      85,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  83,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
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
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              69,
              108
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 8,
            "line": 5
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
          61,
          62
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
      "implements": [],
      "superClass": null,
      "range": [
        55,
        110
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          168,
          171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 56,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "range": [
          121,
          130
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 9
              },
              "start": {
                "column": 25,
                "line": 9
              }
            },
            "range": [
              137,
              145
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "range": [
                  139,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                }
              },
              "range": [
                139,
                145
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              }
            }
          },
          "range": [
            131,
            145
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 9
              },
              "start": {
                "column": 46,
                "line": 9
              }
            },
            "range": [
              158,
              166
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                160,
                166
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 9
                },
                "start": {
                  "column": 48,
                  "line": 9
                }
              }
            }
          },
          "range": [
            147,
            166
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 9
            },
            "start": {
              "column": 35,
              "line": 9
            }
          }
        }
      ],
      "range": [
        112,
        171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        173,
        226
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            188,
            226
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decorator",
                    "optional": false,
                    "range": [
                      195,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 13
                      },
                      "start": {
                        "column": 5,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    194,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  209,
                  210
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
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 5,
                    "line": 14
                  }
                },
                "range": [
                  210,
                  213
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      212,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    212,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                }
              },
              "value": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    220,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                },
                "range": [
                  216,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "range": [
                194,
                224
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 15,
              "line": 12
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
            186,
            187
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 12
            },
            "start": {
              "column": 13,
              "line": 12
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          180,
          226
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
