__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    300
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
            "name": "IGNORE_EXTRA_VARIABLES",
            "optional": false,
            "range": [
              6,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                31,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              31,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            }
          },
          "range": [
            6,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        40
      ],
      "loc": {
        "end": {
          "column": 40,
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
        93,
        300
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
                "type": "ClassExpression",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    216,
                    297
                  ],
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "computed": true,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IGNORE_EXTRA_VARIABLES",
                        "optional": false,
                        "range": [
                          227,
                          249
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 6
                          },
                          "start": {
                            "column": 9,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "value": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          253,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 6
                          },
                          "start": {
                            "column": 35,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        226,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 5
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
                  "name": "ctor",
                  "optional": false,
                  "range": [
                    211,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                "range": [
                  197,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                190,
                298
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            184,
            300
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 91,
              "line": 4
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ignoreExtraVariables",
          "optional": false,
          "range": [
            109,
            129
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 89,
                  "line": 4
                },
                "start": {
                  "column": 82,
                  "line": 4
                }
              },
              "range": [
                175,
                182
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CtorT",
                  "optional": false,
                  "range": [
                    177,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 4
                    },
                    "start": {
                      "column": 84,
                      "line": 4
                    }
                  }
                },
                "range": [
                  177,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 4
                  },
                  "start": {
                    "column": 84,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              170,
              182
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 4
              },
              "start": {
                "column": 77,
                "line": 4
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 75,
              "line": 4
            },
            "start": {
              "column": 36,
              "line": 4
            }
          },
          "range": [
            129,
            168
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "params": [
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            152,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 4
                            },
                            "start": {
                              "column": 59,
                              "line": 4
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 4
                            },
                            "start": {
                              "column": 63,
                              "line": 4
                            }
                          },
                          "range": [
                            156,
                            162
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                157,
                                160
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 4
                                },
                                "start": {
                                  "column": 64,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              157,
                              162
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 4
                              },
                              "start": {
                                "column": 64,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          149,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 4
                          },
                          "start": {
                            "column": 56,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 4
                        },
                        "start": {
                          "column": 70,
                          "line": 4
                        }
                      },
                      "range": [
                        163,
                        166
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "range": [
                          164,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 4
                          },
                          "start": {
                            "column": 71,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      145,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 4
                      },
                      "start": {
                        "column": 52,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  144,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 4
                  },
                  "start": {
                    "column": 51,
                    "line": 4
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "CtorT",
                "optional": false,
                "range": [
                  130,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 4
                  },
                  "start": {
                    "column": 37,
                    "line": 4
                  }
                }
              },
              "out": false,
              "range": [
                130,
                167
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 4
                },
                "start": {
                  "column": 37,
                  "line": 4
                }
              }
            }
          ]
        },
        "range": [
          100,
          300
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
