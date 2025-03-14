__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    140
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        28
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            25,
            28
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IFoo",
          "optional": false,
          "range": [
            17,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          },
          "range": [
            21,
            24
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  22,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 1
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
        29,
        137
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "range": [
                      91,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                    87,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  87,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "range": [
                87,
                95
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
            }
          ],
          "range": [
            81,
            137
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 52,
              "line": 2
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
            45,
            48
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              },
              "range": [
                54,
                79
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ifoo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 2
                        },
                        "start": {
                          "column": 32,
                          "line": 2
                        }
                      },
                      "range": [
                        61,
                        70
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            67,
                            70
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  68,
                                  69
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                68,
                                69
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 2
                                },
                                "start": {
                                  "column": 39,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 2
                            },
                            "start": {
                              "column": 38,
                              "line": 2
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "range": [
                            63,
                            67
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
                        "range": [
                          63,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 2
                          },
                          "start": {
                            "column": 34,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      57,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 43,
                      "line": 2
                    }
                  },
                  "range": [
                    72,
                    79
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      75,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 46,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  56,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              52,
              79
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 22,
              "line": 2
            },
            "start": {
              "column": 19,
              "line": 2
            }
          },
          "range": [
            48,
            51
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  49,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                49,
                50
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          36,
          137
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
