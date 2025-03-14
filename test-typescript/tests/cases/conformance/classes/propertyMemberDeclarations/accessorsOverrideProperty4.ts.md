__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    190
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          21,
          43
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
              "name": "sound",
              "optional": false,
              "range": [
                27,
                32
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                32,
                40
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              27,
              41
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
          }
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
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "range": [
          14,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 1,
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
          70,
          189
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
              "name": "_sound",
              "optional": false,
              "range": [
                76,
                82
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "'roar'",
              "value": "roar",
              "range": [
                85,
                91
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              76,
              91
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
              "name": "sound",
              "optional": false,
              "range": [
                100,
                105
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
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
                105,
                138
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          125,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_sound",
                        "optional": false,
                        "range": [
                          130,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 6
                          },
                          "start": {
                            "column": 38,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        125,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 6
                        },
                        "start": {
                          "column": 33,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      118,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
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
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                },
                "range": [
                  107,
                  115
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    109,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              96,
              138
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
              "name": "sound",
              "optional": false,
              "range": [
                147,
                152
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                152,
                187
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
                            168,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 7
                            },
                            "start": {
                              "column": 29,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_sound",
                          "optional": false,
                          "range": [
                            173,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 7
                            },
                            "start": {
                              "column": 34,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          168,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 7
                          },
                          "start": {
                            "column": 29,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          182,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 7
                          },
                          "start": {
                            "column": 43,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        168,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 7
                        },
                        "start": {
                          "column": 29,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      168,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  166,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 7
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    },
                    "range": [
                      156,
                      164
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        158,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    153,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "range": [
              143,
              187
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 26,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lion",
        "optional": false,
        "range": [
          50,
          54
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "range": [
          63,
          69
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 19,
            "line": 4
          }
        }
      },
      "range": [
        44,
        189
      ],
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
      "column": 0,
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
