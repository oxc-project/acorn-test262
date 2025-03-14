__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    166
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
            "name": "getX",
            "optional": false,
            "range": [
              4,
              8
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            8
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 1
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
          18,
          165
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
              "name": "x",
              "range": [
                22,
                24
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "range": [
              22,
              28
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 2,
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
              "range": [
                31,
                42
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                42,
                76
              ],
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
                            60,
                            64
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 5
                            },
                            "start": {
                              "column": 4,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "range": [
                            65,
                            67
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 5
                            },
                            "start": {
                              "column": 9,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          60,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 5
                          },
                          "start": {
                            "column": 4,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          70,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        60,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      60,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  54,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 4
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    },
                    "range": [
                      44,
                      52
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        46,
                        52
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
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
                    43,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "range": [
              31,
              76
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "range": [
                      133,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          152,
                          155
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
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "x",
                        "range": [
                          156,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 10
                          },
                          "start": {
                            "column": 27,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        152,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 23,
                          "line": 10
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 10
                            },
                            "start": {
                              "column": 15,
                              "line": 10
                            }
                          },
                          "range": [
                            144,
                            147
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                146,
                                147
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 10
                                },
                                "start": {
                                  "column": 17,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              146,
                              147
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 10
                              },
                              "start": {
                                "column": 17,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          141,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      140,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    133,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "range": [
                  133,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              80,
              163
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
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
            "line": 12
          },
          "start": {
            "column": 8,
            "line": 2
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
          16,
          17
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        10,
        165
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
