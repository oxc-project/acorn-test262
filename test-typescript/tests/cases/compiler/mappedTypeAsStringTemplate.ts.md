__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    144
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          110,
          113
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 3
          },
          "start": {
            "column": 88,
            "line": 3
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
          31,
          34
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foox",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 86,
                "line": 3
              },
              "start": {
                "column": 83,
                "line": 3
              }
            },
            "range": [
              105,
              108
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 3
                  },
                  "start": {
                    "column": 85,
                    "line": 3
                  }
                }
              },
              "range": [
                107,
                108
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 3
                },
                "start": {
                  "column": 85,
                  "line": 3
                }
              }
            }
          },
          "range": [
            101,
            108
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 3
            },
            "start": {
              "column": 79,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 78,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          34,
          100
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      59,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 3
                      },
                      "start": {
                        "column": 37,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 37,
                      "line": 3
                    }
                  }
                },
                "range": [
                  53,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  48,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      64,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 42,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "y",
                      "raw": "y"
                    },
                    "range": [
                      85,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 3
                      },
                      "start": {
                        "column": 63,
                        "line": 3
                      }
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        74,
                        85
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              75,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 3
                              },
                              "start": {
                                "column": 53,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            75,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 3
                            },
                            "start": {
                              "column": 53,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            78,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 3
                            },
                            "start": {
                              "column": 56,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 3
                        },
                        "start": {
                          "column": 52,
                          "line": 3
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "range": [
                        67,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 3
                        },
                        "start": {
                          "column": 45,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      67,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 3
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  64,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 3
                  },
                  "start": {
                    "column": 42,
                    "line": 3
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  91,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 3
                  },
                  "start": {
                    "column": 69,
                    "line": 3
                  }
                }
              },
              "range": [
                45,
                99
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
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
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              35,
              99
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        113
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "c",
            "optional": false,
            "range": [
              121,
              122
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
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    127,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    130,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "range": [
                  127,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              125,
              133
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "range": [
            121,
            133
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        115,
        134
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              140,
              141
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            136,
            139
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          136,
          142
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        136,
        143
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 7
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
