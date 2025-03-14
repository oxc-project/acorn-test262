__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    252
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        251
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            17,
            251
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
                "name": "client",
                "optional": false,
                "range": [
                  21,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 2
                  },
                  "start": {
                    "column": 2,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getThing",
                      "optional": false,
                      "range": [
                        36,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "''",
                            "value": "",
                            "range": [
                              68,
                              70
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 3
                              },
                              "start": {
                                "column": 36,
                                "line": 3
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
                            "name": "Promise",
                            "optional": false,
                            "range": [
                              52,
                              59
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 3
                              },
                              "start": {
                                "column": 20,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "range": [
                              60,
                              67
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 3
                              },
                              "start": {
                                "column": 28,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            52,
                            67
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 3
                            },
                            "start": {
                              "column": 20,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          52,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 3
                          },
                          "start": {
                            "column": 20,
                            "line": 3
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        46,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      36,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  30,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "range": [
                21,
                75
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 2,
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
                "name": "foo",
                "optional": false,
                "range": [
                  79,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
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
                  82,
                  249
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    179,
                                    183
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 68,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 64,
                                      "line": 8
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "client",
                                  "optional": false,
                                  "range": [
                                    184,
                                    190
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 69,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  179,
                                  190
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 8
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getThing",
                                "optional": false,
                                "range": [
                                  200,
                                  208
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                179,
                                208
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 9
                                },
                                "start": {
                                  "column": 64,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              179,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 9
                              },
                              "start": {
                                "column": 64,
                                "line": 8
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "range": [
                              214,
                              221
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 9
                              },
                              "start": {
                                "column": 23,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            179,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 64,
                              "line": 8
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              232,
                              238
                            ],
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "range": [
                                  233,
                                  237
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 9
                              },
                              "start": {
                                "column": 41,
                                "line": 9
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "range": [
                              225,
                              232
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 9
                              },
                              "start": {
                                "column": 34,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            225,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 9
                            },
                            "start": {
                              "column": 34,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          179,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 9
                          },
                          "start": {
                            "column": 64,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        106,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 10
                        },
                        "start": {
                          "column": 4,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    100,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 6
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
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 6
                    }
                  },
                  "range": [
                    84,
                    99
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        93,
                        99
                      ],
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "range": [
                            94,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        86,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      86,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              },
              "range": [
                79,
                249
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
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
          "name": "Foo",
          "optional": false,
          "range": [
            13,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
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
        "range": [
          7,
          251
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
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
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
