__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    161
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "range": [
                15,
                22
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                23,
                34
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        25,
                        28
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      25,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "range": [
                        31,
                        34
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      31,
                      34
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  25,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              15,
              35
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          11,
          37
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        38
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              },
              "range": [
                55,
                60
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    57,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "range": [
                  57,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              54,
              60
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            54,
            60
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        40,
        61
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          73,
          160
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
                81,
                84
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                84,
                158
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "range": [
                              108,
                              115
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 10
                              },
                              "start": {
                                "column": 6,
                                "line": 10
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "ThisExpression",
                              "range": [
                                117,
                                121
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 10
                                },
                                "start": {
                                  "column": 15,
                                  "line": 10
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "range": [
                                      125,
                                      128
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    125,
                                    128
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 10
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Box",
                                    "optional": false,
                                    "range": [
                                      131,
                                      134
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
                                  "range": [
                                    131,
                                    134
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
                                }
                              ],
                              "range": [
                                125,
                                134
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 10
                                },
                                "start": {
                                  "column": 23,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              117,
                              134
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
                            108,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 10
                            },
                            "start": {
                              "column": 6,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              145,
                              146
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 11
                              },
                              "start": {
                                "column": 9,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            142,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 11
                            },
                            "start": {
                              "column": 6,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        100,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 12
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      93,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 13
                  },
                  "start": {
                    "column": 12,
                    "line": 8
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
                  "column": 3,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "range": [
              77,
              158
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 7
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
          69,
          72
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        63,
        160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
