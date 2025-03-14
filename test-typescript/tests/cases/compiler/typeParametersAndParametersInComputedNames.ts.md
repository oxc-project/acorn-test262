__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    97
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                44,
                46
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              37,
              47
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          31,
          49
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 31,
            "line": 1
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
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            },
            "range": [
              17,
              20
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  19,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              },
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            }
          },
          "range": [
            16,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          30
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            24,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          15
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        49
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
          59,
          97
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    73,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
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
                  66,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  69,
                  72
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        70,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      70,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                66,
                75
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 5,
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
                76,
                95
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  86,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 6
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    },
                    "range": [
                      81,
                      84
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          83,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        83,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    80,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 19,
                      "line": 6
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                },
                "range": [
                  76,
                  79
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        77,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      77,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              65,
              95
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 8,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          57,
          58
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
      "implements": [],
      "superClass": null,
      "range": [
        51,
        97
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 5
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
