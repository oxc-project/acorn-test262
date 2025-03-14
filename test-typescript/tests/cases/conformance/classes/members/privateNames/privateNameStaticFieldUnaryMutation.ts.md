__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    913
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          912
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "test",
              "range": [
                21,
                26
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                26,
                34
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  28,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "24",
              "value": 24,
              "range": [
                37,
                39
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              40
            ],
            "loc": {
              "end": {
                "column": 30,
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                45,
                56
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                56,
                366
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            69,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            71,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 10,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          69,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        69,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      69,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            88,
                            89
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            90,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 5
                            },
                            "start": {
                              "column": 10,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          88,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": false,
                      "range": [
                        88,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      88,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            109,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 6
                            },
                            "start": {
                              "column": 10,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            111,
                            116
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          109,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        107,
                        116
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      107,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            128,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 7
                            },
                            "start": {
                              "column": 10,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            130,
                            135
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          128,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": true,
                      "range": [
                        126,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      126,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            151,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 14,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                155,
                                156
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 8
                                },
                                "start": {
                                  "column": 18,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                157,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 8
                                },
                                "start": {
                                  "column": 20,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              155,
                              162
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 8
                              },
                              "start": {
                                "column": 18,
                                "line": 8
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            155,
                            164
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 8
                            },
                            "start": {
                              "column": 18,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          151,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      145,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                          "range": [
                            180,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                184,
                                185
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 9
                                },
                                "start": {
                                  "column": 18,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                186,
                                191
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 9
                                },
                                "start": {
                                  "column": 20,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              184,
                              191
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 9
                              },
                              "start": {
                                "column": 18,
                                "line": 9
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": false,
                          "range": [
                            184,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 9
                            },
                            "start": {
                              "column": 18,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          180,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      174,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
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
                            209,
                            210
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 10
                            },
                            "start": {
                              "column": 14,
                              "line": 10
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                215,
                                216
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 10
                                },
                                "start": {
                                  "column": 20,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                217,
                                222
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 10
                                },
                                "start": {
                                  "column": 22,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              215,
                              222
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 10
                              },
                              "start": {
                                "column": 20,
                                "line": 10
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": true,
                          "range": [
                            213,
                            222
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 10
                            },
                            "start": {
                              "column": 18,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          209,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 10
                          },
                          "start": {
                            "column": 14,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      203,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            238,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 14,
                              "line": 11
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                244,
                                245
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 11
                                },
                                "start": {
                                  "column": 20,
                                  "line": 11
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                246,
                                251
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 11
                                },
                                "start": {
                                  "column": 22,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              244,
                              251
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 11
                              },
                              "start": {
                                "column": 20,
                                "line": 11
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": true,
                          "range": [
                            242,
                            251
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          238,
                          251
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 11
                          },
                          "start": {
                            "column": 14,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      232,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        304,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 12
                        },
                        "start": {
                          "column": 51,
                          "line": 12
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            266,
                            267
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
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            268,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 12
                            },
                            "start": {
                              "column": 15,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          266,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          276,
                          277
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 23,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        266,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            279,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 12
                            },
                            "start": {
                              "column": 26,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            281,
                            286
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 12
                            },
                            "start": {
                              "column": 28,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          279,
                          286
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 12
                          },
                          "start": {
                            "column": 26,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          289,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 12
                          },
                          "start": {
                            "column": 36,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        279,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 12
                        },
                        "start": {
                          "column": 26,
                          "line": 12
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            295,
                            296
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 12
                            },
                            "start": {
                              "column": 42,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            297,
                            302
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 12
                            },
                            "start": {
                              "column": 44,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          295,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 42,
                            "line": 12
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        293,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 12
                        },
                        "start": {
                          "column": 40,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      261,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        358,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 13
                        },
                        "start": {
                          "column": 51,
                          "line": 13
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            320,
                            321
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 13
                            },
                            "start": {
                              "column": 13,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            322,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 13
                            },
                            "start": {
                              "column": 15,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          320,
                          327
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          330,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 13
                          },
                          "start": {
                            "column": 23,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        320,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            333,
                            334
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 13
                            },
                            "start": {
                              "column": 26,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            335,
                            340
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 13
                            },
                            "start": {
                              "column": 28,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          333,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 13
                          },
                          "start": {
                            "column": 26,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          343,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 13
                          },
                          "start": {
                            "column": 36,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        333,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 13
                        },
                        "start": {
                          "column": 26,
                          "line": 13
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            347,
                            348
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 13
                            },
                            "start": {
                              "column": 40,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            349,
                            354
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 13
                            },
                            "start": {
                              "column": 42,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          347,
                          354
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 13
                          },
                          "start": {
                            "column": 40,
                            "line": 13
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        347,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 13
                        },
                        "start": {
                          "column": 40,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      315,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  59,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 3
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
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              45,
              366
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "test",
              "optional": false,
              "range": [
                371,
                375
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                375,
                881
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                388,
                                392
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 16
                                },
                                "start": {
                                  "column": 8,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                393,
                                401
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 16
                                },
                                "start": {
                                  "column": 13,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              388,
                              401
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 16
                              },
                              "start": {
                                "column": 8,
                                "line": 16
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            388,
                            403
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            404,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 16
                            },
                            "start": {
                              "column": 24,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          388,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        388,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      388,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                421,
                                425
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 17
                                },
                                "start": {
                                  "column": 8,
                                  "line": 17
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                426,
                                434
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 17
                                },
                                "start": {
                                  "column": 13,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              421,
                              434
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 17
                              },
                              "start": {
                                "column": 8,
                                "line": 17
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            421,
                            436
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            437,
                            442
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 17
                            },
                            "start": {
                              "column": 24,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          421,
                          442
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": false,
                      "range": [
                        421,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      421,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                456,
                                460
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 18
                                },
                                "start": {
                                  "column": 10,
                                  "line": 18
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                461,
                                469
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 18
                                },
                                "start": {
                                  "column": 15,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              456,
                              469
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 18
                              },
                              "start": {
                                "column": 10,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            456,
                            471
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 18
                            },
                            "start": {
                              "column": 10,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            472,
                            477
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 18
                            },
                            "start": {
                              "column": 26,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          456,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 18
                          },
                          "start": {
                            "column": 10,
                            "line": 18
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        454,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      454,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                489,
                                493
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 19
                                },
                                "start": {
                                  "column": 10,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                494,
                                502
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 19
                                },
                                "start": {
                                  "column": 15,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              489,
                              502
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 19
                              },
                              "start": {
                                "column": 10,
                                "line": 19
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            489,
                            504
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 19
                            },
                            "start": {
                              "column": 10,
                              "line": 19
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            505,
                            510
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 19
                            },
                            "start": {
                              "column": 26,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          489,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 19
                          },
                          "start": {
                            "column": 10,
                            "line": 19
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": true,
                      "range": [
                        487,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      487,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            526,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    530,
                                    534
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 20
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "range": [
                                    535,
                                    543
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  530,
                                  543
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 20
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                530,
                                545
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 20
                                },
                                "start": {
                                  "column": 18,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                546,
                                551
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 20
                                },
                                "start": {
                                  "column": 34,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              530,
                              551
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 20
                              },
                              "start": {
                                "column": 18,
                                "line": 20
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            530,
                            553
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 20
                            },
                            "start": {
                              "column": 18,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          526,
                          553
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      520,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
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
                          "range": [
                            569,
                            570
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 21
                            },
                            "start": {
                              "column": 14,
                              "line": 21
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    573,
                                    577
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 21
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "range": [
                                    578,
                                    586
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  573,
                                  586
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 21
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                573,
                                588
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 21
                                },
                                "start": {
                                  "column": 18,
                                  "line": 21
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                589,
                                594
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 21
                                },
                                "start": {
                                  "column": 34,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              573,
                              594
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 21
                              },
                              "start": {
                                "column": 18,
                                "line": 21
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": false,
                          "range": [
                            573,
                            596
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 21
                            },
                            "start": {
                              "column": 18,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          569,
                          596
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      563,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
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
                            612,
                            613
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 22
                            },
                            "start": {
                              "column": 14,
                              "line": 22
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    618,
                                    622
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 22
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "range": [
                                    623,
                                    631
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 22
                                    }
                                  }
                                },
                                "range": [
                                  618,
                                  631
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 22
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                618,
                                633
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 22
                                },
                                "start": {
                                  "column": 20,
                                  "line": 22
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                634,
                                639
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 22
                                },
                                "start": {
                                  "column": 36,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              618,
                              639
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 22
                              },
                              "start": {
                                "column": 20,
                                "line": 22
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": true,
                          "range": [
                            616,
                            639
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 22
                            },
                            "start": {
                              "column": 18,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          612,
                          639
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 22
                          },
                          "start": {
                            "column": 14,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      606,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            655,
                            656
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 23
                            },
                            "start": {
                              "column": 14,
                              "line": 23
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    661,
                                    665
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 23
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "range": [
                                    666,
                                    674
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 23
                                    }
                                  }
                                },
                                "range": [
                                  661,
                                  674
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 23
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                661,
                                676
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 23
                                },
                                "start": {
                                  "column": 20,
                                  "line": 23
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                677,
                                682
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 23
                                },
                                "start": {
                                  "column": 36,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              661,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 23
                              },
                              "start": {
                                "column": 20,
                                "line": 23
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": true,
                          "range": [
                            659,
                            682
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 23
                            },
                            "start": {
                              "column": 18,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          655,
                          682
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      649,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        777,
                        779
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 24
                        },
                        "start": {
                          "column": 93,
                          "line": 24
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                697,
                                701
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 24
                                },
                                "start": {
                                  "column": 13,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                702,
                                710
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 24
                                },
                                "start": {
                                  "column": 18,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              697,
                              710
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 24
                              },
                              "start": {
                                "column": 13,
                                "line": 24
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            697,
                            712
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 24
                            },
                            "start": {
                              "column": 13,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            713,
                            718
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 24
                            },
                            "start": {
                              "column": 29,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          697,
                          718
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          721,
                          722
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 24
                          },
                          "start": {
                            "column": 37,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        697,
                        722
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 24
                        },
                        "start": {
                          "column": 13,
                          "line": 24
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                724,
                                728
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 24
                                },
                                "start": {
                                  "column": 40,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                729,
                                737
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 24
                                },
                                "start": {
                                  "column": 45,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              724,
                              737
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 24
                              },
                              "start": {
                                "column": 40,
                                "line": 24
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            724,
                            739
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 24
                            },
                            "start": {
                              "column": 40,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            740,
                            745
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 24
                            },
                            "start": {
                              "column": 56,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          724,
                          745
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 24
                          },
                          "start": {
                            "column": 40,
                            "line": 24
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          748,
                          750
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 24
                          },
                          "start": {
                            "column": 64,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        724,
                        750
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 24
                        },
                        "start": {
                          "column": 40,
                          "line": 24
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                754,
                                758
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 24
                                },
                                "start": {
                                  "column": 70,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                759,
                                767
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 24
                                },
                                "start": {
                                  "column": 75,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              754,
                              767
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 24
                              },
                              "start": {
                                "column": 70,
                                "line": 24
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            754,
                            769
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 24
                            },
                            "start": {
                              "column": 70,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            770,
                            775
                          ],
                          "loc": {
                            "end": {
                              "column": 91,
                              "line": 24
                            },
                            "start": {
                              "column": 86,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          754,
                          775
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 24
                          },
                          "start": {
                            "column": 70,
                            "line": 24
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        752,
                        775
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 24
                        },
                        "start": {
                          "column": 68,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      692,
                      779
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        873,
                        875
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 25
                        },
                        "start": {
                          "column": 93,
                          "line": 25
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                793,
                                797
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 25
                                },
                                "start": {
                                  "column": 13,
                                  "line": 25
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                798,
                                806
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 25
                                },
                                "start": {
                                  "column": 18,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              793,
                              806
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 25
                              },
                              "start": {
                                "column": 13,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            793,
                            808
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 25
                            },
                            "start": {
                              "column": 13,
                              "line": 25
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            809,
                            814
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 25
                            },
                            "start": {
                              "column": 29,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          793,
                          814
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 25
                          },
                          "start": {
                            "column": 13,
                            "line": 25
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          817,
                          818
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 25
                          },
                          "start": {
                            "column": 37,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        793,
                        818
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                820,
                                824
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 25
                                },
                                "start": {
                                  "column": 40,
                                  "line": 25
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                825,
                                833
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 25
                                },
                                "start": {
                                  "column": 45,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              820,
                              833
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 25
                              },
                              "start": {
                                "column": 40,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            820,
                            835
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 25
                            },
                            "start": {
                              "column": 40,
                              "line": 25
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            836,
                            841
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 25
                            },
                            "start": {
                              "column": 56,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          820,
                          841
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 25
                          },
                          "start": {
                            "column": 40,
                            "line": 25
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          844,
                          846
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 25
                          },
                          "start": {
                            "column": 64,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        820,
                        846
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 25
                        },
                        "start": {
                          "column": 40,
                          "line": 25
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                848,
                                852
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 25
                                },
                                "start": {
                                  "column": 68,
                                  "line": 25
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                853,
                                861
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 25
                                },
                                "start": {
                                  "column": 73,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              848,
                              861
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 25
                              },
                              "start": {
                                "column": 68,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            848,
                            863
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 25
                            },
                            "start": {
                              "column": 68,
                              "line": 25
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            864,
                            869
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 25
                            },
                            "start": {
                              "column": 84,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          848,
                          869
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 25
                          },
                          "start": {
                            "column": 68,
                            "line": 25
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        848,
                        871
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 25
                        },
                        "start": {
                          "column": 68,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      788,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  378,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 15
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
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "range": [
              371,
              881
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 15
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
              "name": "getClass",
              "optional": false,
              "range": [
                886,
                894
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
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
                894,
                910
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        906,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 27
                        },
                        "start": {
                          "column": 24,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      899,
                      908
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 27
                      },
                      "start": {
                        "column": 17,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  897,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 27
                  },
                  "start": {
                    "column": 15,
                    "line": 27
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
                  "column": 28,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "range": [
              886,
              910
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
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
        "name": "C",
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
        912
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
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
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
