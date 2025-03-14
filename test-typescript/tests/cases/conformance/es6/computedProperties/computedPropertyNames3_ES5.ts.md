__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    188
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
            "name": "id",
            "optional": false,
            "range": [
              4,
              6
            ],
            "loc": {
              "end": {
                "column": 6,
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
            6
          ],
          "loc": {
            "end": {
              "column": 6,
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
      "kind": "var",
      "range": [
        0,
        7
      ],
      "loc": {
        "end": {
          "column": 7,
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
          16,
          188
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              },
              "range": [
                23,
                28
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 5,
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
                29,
                35
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  32,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
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
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              22,
              35
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  54,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                48,
                57
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                58,
                64
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  61,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
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
              "params": [],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "range": [
              40,
              64
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  81,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "operator": "delete",
              "prefix": true,
              "range": [
                74,
                83
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
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
                90
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  87,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
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
              69,
              90
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "computed": true,
            "decorators": [],
            "key": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    101,
                    102
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
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                100,
                106
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
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
                107,
                114
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  111,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    108,
                    109
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
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "range": [
              95,
              114
            ],
            "loc": {
              "end": {
                "column": 23,
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
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  139,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "range": [
                    132,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              },
              "range": [
                131,
                141
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                142,
                148
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  145,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 30,
                    "line": 7
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
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              }
            },
            "range": [
              119,
              148
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "range": [
                    165,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    168,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  }
                },
                "range": [
                  165,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                165,
                178
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                179,
                186
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  183,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 8
                  },
                  "start": {
                    "column": 34,
                    "line": 8
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    180,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 8
                    },
                    "start": {
                      "column": 31,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 8
                },
                "start": {
                  "column": 30,
                  "line": 8
                }
              }
            },
            "range": [
              153,
              186
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
          14,
          15
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
        8,
        188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
