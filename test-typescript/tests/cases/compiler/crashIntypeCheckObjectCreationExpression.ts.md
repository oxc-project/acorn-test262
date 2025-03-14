__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    216
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        215
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            35,
            215
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
                "name": "injectRequestService",
                "optional": false,
                "range": [
                  48,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
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
                  68,
                  158
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
                            "type": "NewExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "service",
                                "optional": false,
                                "range": [
                                  142,
                                  149
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "X",
                              "optional": false,
                              "range": [
                                140,
                                141
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 3
                                },
                                "start": {
                                  "column": 44,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              136,
                              150
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 3
                              },
                              "start": {
                                "column": 40,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              104,
                              108
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 3
                              },
                              "start": {
                                "column": 8,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "injectBuildService",
                            "optional": false,
                            "range": [
                              109,
                              127
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 3
                              },
                              "start": {
                                "column": 13,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            104,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 3
                            },
                            "start": {
                              "column": 8,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            127,
                            135
                          ],
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                128,
                                134
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 3
                                },
                                "start": {
                                  "column": 32,
                                  "line": 3
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 3
                            },
                            "start": {
                              "column": 31,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          104,
                          151
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        104,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
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
                    94,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 57,
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
                    "name": "service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 2
                        },
                        "start": {
                          "column": 51,
                          "line": 2
                        }
                      },
                      "range": [
                        88,
                        92
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "range": [
                            90,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 2
                            },
                            "start": {
                              "column": 53,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          90,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 2
                          },
                          "start": {
                            "column": 53,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      81,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 2
                      },
                      "start": {
                        "column": 44,
                        "line": 2
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  },
                  "range": [
                    68,
                    80
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "range": [
                          69,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 2
                          },
                          "start": {
                            "column": 32,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        69,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 2
                        },
                        "start": {
                          "column": 32,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1",
                        "optional": false,
                        "range": [
                          73,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 2
                          },
                          "start": {
                            "column": 36,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        73,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 2
                        },
                        "start": {
                          "column": 36,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P2",
                        "optional": false,
                        "range": [
                          77,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 2
                          },
                          "start": {
                            "column": 40,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        77,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 2
                        },
                        "start": {
                          "column": 40,
                          "line": 2
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 2
                  }
                }
              },
              "range": [
                41,
                158
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
            },
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "injectBuildService",
                "optional": false,
                "range": [
                  170,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
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
                  188,
                  213
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    206,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 47,
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
                    "name": "service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 5
                        },
                        "start": {
                          "column": 41,
                          "line": 5
                        }
                      },
                      "range": [
                        200,
                        204
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "range": [
                            202,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 5
                            },
                            "start": {
                              "column": 43,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          202,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 5
                          },
                          "start": {
                            "column": 43,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      193,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 34,
                        "line": 5
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  },
                  "range": [
                    188,
                    192
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "range": [
                          189,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 5
                          },
                          "start": {
                            "column": 30,
                            "line": 5
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        189,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 30,
                          "line": 5
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 5
                  }
                }
              },
              "range": [
                163,
                213
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
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
              "line": 7
            },
            "start": {
              "column": 35,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildWorkspaceService",
          "optional": false,
          "range": [
            13,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
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
          215
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
          "line": 7
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
