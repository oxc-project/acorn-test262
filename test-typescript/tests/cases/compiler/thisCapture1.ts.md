__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    184
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          184
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              28
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
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
              "name": "getSettings",
              "optional": false,
              "range": [
                40,
                51
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
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
                51,
                182
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
                          "name": "ret",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 4
                              },
                              "start": {
                                "column": 15,
                                "line": 4
                              }
                            },
                            "range": [
                              90,
                              95
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                92,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 4
                                },
                                "start": {
                                  "column": 17,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            87,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          87,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      83,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "range": [
                                            143,
                                            147
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 16,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 12,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "range": [
                                            148,
                                            149
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 18,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 17,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "range": [
                                          143,
                                          149
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "raw": "0",
                                        "value": 0,
                                        "range": [
                                          152,
                                          153
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "range": [
                                        143,
                                        153
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      143,
                                      154
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 6
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  129,
                                  164
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 5
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                123,
                                164
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 7
                                },
                                "start": {
                                  "column": 26,
                                  "line": 5
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
                              "name": "ret",
                              "optional": false,
                              "range": [
                                112,
                                115
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 5
                                },
                                "start": {
                                  "column": 15,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "always",
                              "optional": false,
                              "range": [
                                116,
                                122
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 5
                                },
                                "start": {
                                  "column": 19,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              112,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            112,
                            165
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "promise",
                          "optional": false,
                          "range": [
                            166,
                            173
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          112,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        112,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      105,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  73,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 3
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
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    },
                    "range": [
                      56,
                      66
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          58,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        58,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    52,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                },
                "range": [
                  67,
                  72
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    69,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 3
                    },
                    "start": {
                      "column": 40,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "range": [
              33,
              182
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
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
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
      "range": [
        0,
        184
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
