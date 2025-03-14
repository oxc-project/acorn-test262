__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    129
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              },
              "range": [
                9,
                27
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        13,
                        16
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 1
                        },
                        "start": {
                          "column": 13,
                          "line": 1
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
                          "column": 25,
                          "line": 1
                        },
                        "start": {
                          "column": 17,
                          "line": 1
                        }
                      },
                      "range": [
                        17,
                        25
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          19,
                          25
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
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
                      13,
                      25
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 1
                      },
                      "start": {
                        "column": 13,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  11,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 11,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              30,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          },
          "range": [
            6,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
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
        33
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 1
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
            "name": "key",
            "optional": false,
            "range": [
              40,
              43
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "'key'",
              "value": "key",
              "range": [
                46,
                51
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  55,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "range": [
                55,
                60
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              46,
              60
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            40,
            60
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        34,
        61
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  83,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  87,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "range": [
                83,
                91
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              83,
              92
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  107,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  111,
                  114
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
                107,
                114
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              107,
              115
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          77,
          128
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "test": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            67,
            70
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            71,
            74
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 4
            },
            "start": {
              "column": 8,
              "line": 4
            }
          }
        },
        "range": [
          67,
          75
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "range": [
        63,
        128
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
