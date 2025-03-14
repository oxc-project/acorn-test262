__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    10,
    4094
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
            "name": "noOp",
            "optional": false,
            "range": [
              16,
              20
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                29,
                31
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              23,
              31
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          },
          "range": [
            16,
            31
          ],
          "loc": {
            "end": {
              "column": 21,
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
        10,
        32
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "testReflectApply",
            "optional": false,
            "range": [
              39,
              55
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "noOp",
                "optional": false,
                "range": [
                  72,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 39,
                    "line": 3
                  }
                }
              },
              {
                "type": "ThisExpression",
                "range": [
                  78,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 3
                  },
                  "start": {
                    "column": 45,
                    "line": 3
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  84,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 3
                  },
                  "start": {
                    "column": 51,
                    "line": 3
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  58,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "range": [
                  66,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
                    "line": 3
                  }
                }
              },
              "range": [
                58,
                71
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              58,
              87
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          },
          "range": [
            39,
            87
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        33,
        88
      ],
      "loc": {
        "end": {
          "column": 55,
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
            "name": "testReflectConstruct",
            "optional": false,
            "range": [
              95,
              115
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "noOp",
                "optional": false,
                "range": [
                  136,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 4
                  },
                  "start": {
                    "column": 47,
                    "line": 4
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  142,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 4
                  },
                  "start": {
                    "column": 53,
                    "line": 4
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  118,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 29,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "construct",
                "optional": false,
                "range": [
                  126,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 4
                  },
                  "start": {
                    "column": 37,
                    "line": 4
                  }
                }
              },
              "range": [
                118,
                135
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              118,
              145
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          },
          "range": [
            95,
            145
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        89,
        146
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "testReflectDefineProperty",
            "optional": false,
            "range": [
              153,
              178
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  204,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 5
                  },
                  "start": {
                    "column": 57,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  208,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 5
                  },
                  "start": {
                    "column": 61,
                    "line": 5
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  212,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 5
                  },
                  "start": {
                    "column": 65,
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  181,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "defineProperty",
                "optional": false,
                "range": [
                  189,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              },
              "range": [
                181,
                203
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              181,
              215
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          },
          "range": [
            153,
            215
          ],
          "loc": {
            "end": {
              "column": 68,
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
        147,
        216
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "testReflectDeleteProperty",
            "optional": false,
            "range": [
              223,
              248
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  274,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 6
                  },
                  "start": {
                    "column": 57,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  278,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 6
                  },
                  "start": {
                    "column": 61,
                    "line": 6
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  251,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 6
                  },
                  "start": {
                    "column": 34,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deleteProperty",
                "optional": false,
                "range": [
                  259,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              "range": [
                251,
                273
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 6
                },
                "start": {
                  "column": 34,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              251,
              281
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 6
              },
              "start": {
                "column": 34,
                "line": 6
              }
            }
          },
          "range": [
            223,
            281
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        217,
        282
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "testReflectGet",
            "optional": false,
            "range": [
              289,
              303
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  318,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 35,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  322,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  306,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "range": [
                  314,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              },
              "range": [
                306,
                317
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              306,
              325
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 23,
                "line": 7
              }
            }
          },
          "range": [
            289,
            325
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        283,
        326
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 0,
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
            "name": "testReflectGetOwnPropertyDescriptor",
            "optional": false,
            "range": [
              333,
              368
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  404,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 8
                  },
                  "start": {
                    "column": 77,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  408,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 8
                  },
                  "start": {
                    "column": 81,
                    "line": 8
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  371,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertyDescriptor",
                "optional": false,
                "range": [
                  379,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 8
                  },
                  "start": {
                    "column": 52,
                    "line": 8
                  }
                }
              },
              "range": [
                371,
                403
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 8
                },
                "start": {
                  "column": 44,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              371,
              411
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 8
              },
              "start": {
                "column": 44,
                "line": 8
              }
            }
          },
          "range": [
            333,
            411
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        327,
        412
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "name": "testReflectGetPrototypeOf",
            "optional": false,
            "range": [
              419,
              444
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  470,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 9
                  },
                  "start": {
                    "column": 57,
                    "line": 9
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  447,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 34,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPrototypeOf",
                "optional": false,
                "range": [
                  455,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 9
                  },
                  "start": {
                    "column": 42,
                    "line": 9
                  }
                }
              },
              "range": [
                447,
                469
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 9
                },
                "start": {
                  "column": 34,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              447,
              473
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 9
              },
              "start": {
                "column": 34,
                "line": 9
              }
            }
          },
          "range": [
            419,
            473
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        413,
        474
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "name": "testReflectIsExtensible",
            "optional": false,
            "range": [
              481,
              504
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  528,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 10
                  },
                  "start": {
                    "column": 53,
                    "line": 10
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  507,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 32,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isExtensible",
                "optional": false,
                "range": [
                  515,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 10
                  },
                  "start": {
                    "column": 40,
                    "line": 10
                  }
                }
              },
              "range": [
                507,
                527
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 10
                },
                "start": {
                  "column": 32,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              507,
              531
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 10
              },
              "start": {
                "column": 32,
                "line": 10
              }
            }
          },
          "range": [
            481,
            531
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        475,
        532
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 10
        },
        "start": {
          "column": 0,
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
            "name": "testReflectOwnKeys",
            "optional": false,
            "range": [
              539,
              557
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  576,
                  578
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 43,
                    "line": 11
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  560,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "ownKeys",
                "optional": false,
                "range": [
                  568,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              },
              "range": [
                560,
                575
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              560,
              579
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 11
              },
              "start": {
                "column": 27,
                "line": 11
              }
            }
          },
          "range": [
            539,
            579
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        533,
        580
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "testReflectPreventExtensions",
            "optional": false,
            "range": [
              587,
              615
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  644,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 12
                  },
                  "start": {
                    "column": 63,
                    "line": 12
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  618,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 12
                  },
                  "start": {
                    "column": 37,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "preventExtensions",
                "optional": false,
                "range": [
                  626,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 12
                  },
                  "start": {
                    "column": 45,
                    "line": 12
                  }
                }
              },
              "range": [
                618,
                643
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 12
                },
                "start": {
                  "column": 37,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              618,
              647
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 12
              },
              "start": {
                "column": 37,
                "line": 12
              }
            }
          },
          "range": [
            587,
            647
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        581,
        648
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "testReflectSet",
            "optional": false,
            "range": [
              655,
              669
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  684,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 13
                  },
                  "start": {
                    "column": 35,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  688,
                  690
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 13
                  },
                  "start": {
                    "column": 39,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  692,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 13
                  },
                  "start": {
                    "column": 43,
                    "line": 13
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  672,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 23,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "range": [
                  680,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 13
                  },
                  "start": {
                    "column": 31,
                    "line": 13
                  }
                }
              },
              "range": [
                672,
                683
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              672,
              694
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 13
              },
              "start": {
                "column": 23,
                "line": 13
              }
            }
          },
          "range": [
            655,
            694
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        649,
        695
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "testReflectSetPrototypeOf",
            "optional": false,
            "range": [
              702,
              727
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  753,
                  755
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 14
                  },
                  "start": {
                    "column": 57,
                    "line": 14
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  757,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 14
                  },
                  "start": {
                    "column": 61,
                    "line": 14
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
                "name": "Reflect",
                "optional": false,
                "range": [
                  730,
                  737
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 14
                  },
                  "start": {
                    "column": 34,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setPrototypeOf",
                "optional": false,
                "range": [
                  738,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              "range": [
                730,
                752
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              730,
              760
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 14
              },
              "start": {
                "column": 34,
                "line": 14
              }
            }
          },
          "range": [
            702,
            760
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        696,
        761
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "testArrayFind",
            "optional": false,
            "range": [
              769,
              782
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          827,
                          831
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 16
                          },
                          "start": {
                            "column": 11,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        820,
                        832
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 16
                        },
                        "start": {
                          "column": 4,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    814,
                    834
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 17
                    },
                    "start": {
                      "column": 51,
                      "line": 15
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "range": [
                      796,
                      799
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 33,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "idx",
                    "optional": false,
                    "range": [
                      801,
                      804
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 15
                      },
                      "start": {
                        "column": 38,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      806,
                      809
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 15
                      },
                      "start": {
                        "column": 43,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  795,
                  834
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 17
                  },
                  "start": {
                    "column": 32,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      786,
                      788
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  785,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 22,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "range": [
                  790,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
                  }
                }
              },
              "range": [
                785,
                794
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              785,
              835
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 15
              }
            }
          },
          "range": [
            769,
            835
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        763,
        836
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "testArrayFindIndex",
            "optional": false,
            "range": [
              843,
              861
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          911,
                          915
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 19
                          },
                          "start": {
                            "column": 11,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        904,
                        916
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    898,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 20
                    },
                    "start": {
                      "column": 61,
                      "line": 18
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "range": [
                      880,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 18
                      },
                      "start": {
                        "column": 43,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "idx",
                    "optional": false,
                    "range": [
                      885,
                      888
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 18
                      },
                      "start": {
                        "column": 48,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      890,
                      893
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 18
                      },
                      "start": {
                        "column": 53,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  879,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 20
                  },
                  "start": {
                    "column": 42,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      865,
                      867
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 28,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  864,
                  868
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 18
                  },
                  "start": {
                    "column": 27,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findIndex",
                "optional": false,
                "range": [
                  869,
                  878
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 18
                  },
                  "start": {
                    "column": 32,
                    "line": 18
                  }
                }
              },
              "range": [
                864,
                878
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 18
                },
                "start": {
                  "column": 27,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              864,
              919
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 20
              },
              "start": {
                "column": 27,
                "line": 18
              }
            }
          },
          "range": [
            843,
            919
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        837,
        920
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "testArrayFill",
            "optional": false,
            "range": [
              927,
              940
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"fill\"",
                "value": "fill",
                "range": [
                  953,
                  959
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 32,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      944,
                      946
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 21
                      },
                      "start": {
                        "column": 23,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  943,
                  947
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fill",
                "optional": false,
                "range": [
                  948,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 21
                  },
                  "start": {
                    "column": 27,
                    "line": 21
                  }
                }
              },
              "range": [
                943,
                952
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 22,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              943,
              960
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 21
              },
              "start": {
                "column": 22,
                "line": 21
              }
            }
          },
          "range": [
            927,
            960
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        921,
        961
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "testArrayCopyWithin",
            "optional": false,
            "range": [
              968,
              987
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1006,
                  1007
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 22
                  },
                  "start": {
                    "column": 44,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1009,
                  1010
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 22
                  },
                  "start": {
                    "column": 47,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      991,
                      993
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 22
                      },
                      "start": {
                        "column": 29,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  990,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 28,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "copyWithin",
                "optional": false,
                "range": [
                  995,
                  1005
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 22
                  },
                  "start": {
                    "column": 33,
                    "line": 22
                  }
                }
              },
              "range": [
                990,
                1005
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 22
                },
                "start": {
                  "column": 28,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              990,
              1011
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 22
              },
              "start": {
                "column": 28,
                "line": 22
              }
            }
          },
          "range": [
            968,
            1011
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        962,
        1012
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 22
        },
        "start": {
          "column": 0,
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
            "name": "testArrayEntries",
            "optional": false,
            "range": [
              1019,
              1035
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      1039,
                      1041
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 26,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  1038,
                  1042
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 23
                  },
                  "start": {
                    "column": 25,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "range": [
                  1043,
                  1050
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 23
                  },
                  "start": {
                    "column": 30,
                    "line": 23
                  }
                }
              },
              "range": [
                1038,
                1050
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 23
                },
                "start": {
                  "column": 25,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              1038,
              1052
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 25,
                "line": 23
              }
            }
          },
          "range": [
            1019,
            1052
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1013,
        1053
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "testArrayKeys",
            "optional": false,
            "range": [
              1060,
              1073
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      1077,
                      1079
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 23,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  1076,
                  1080
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 22,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "range": [
                  1081,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 24
                  },
                  "start": {
                    "column": 27,
                    "line": 24
                  }
                }
              },
              "range": [
                1076,
                1085
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 24
                },
                "start": {
                  "column": 22,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              1076,
              1087
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "range": [
            1060,
            1087
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1054,
        1088
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "testArrayValues",
            "optional": false,
            "range": [
              1095,
              1110
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      1114,
                      1116
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 25
                      },
                      "start": {
                        "column": 25,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  1113,
                  1117
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 25
                  },
                  "start": {
                    "column": 24,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "range": [
                  1118,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 25
                  },
                  "start": {
                    "column": 29,
                    "line": 25
                  }
                }
              },
              "range": [
                1113,
                1124
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              1113,
              1126
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          },
          "range": [
            1095,
            1126
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1089,
        1127
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "testArrayConstructorFrom",
            "optional": false,
            "range": [
              1134,
              1158
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  1172,
                  1174
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 26
                  },
                  "start": {
                    "column": 44,
                    "line": 26
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
                "name": "Array",
                "optional": false,
                "range": [
                  1161,
                  1166
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 33,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "range": [
                  1167,
                  1171
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 26
                  },
                  "start": {
                    "column": 39,
                    "line": 26
                  }
                }
              },
              "range": [
                1161,
                1171
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 26
                },
                "start": {
                  "column": 33,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              1161,
              1175
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 26
              },
              "start": {
                "column": 33,
                "line": 26
              }
            }
          },
          "range": [
            1134,
            1175
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1128,
        1176
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "testArrayConstructorOf",
            "optional": false,
            "range": [
              1183,
              1205
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  1217,
                  1219
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 27
                  },
                  "start": {
                    "column": 40,
                    "line": 27
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
                "name": "Array",
                "optional": false,
                "range": [
                  1208,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 27
                  },
                  "start": {
                    "column": 31,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "range": [
                  1214,
                  1216
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 27
                  },
                  "start": {
                    "column": 37,
                    "line": 27
                  }
                }
              },
              "range": [
                1208,
                1216
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 27
                },
                "start": {
                  "column": 31,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              1208,
              1220
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 27
              },
              "start": {
                "column": 31,
                "line": 27
              }
            }
          },
          "range": [
            1183,
            1220
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1177,
        1221
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "testObjectConstructorAssign",
            "optional": false,
            "range": [
              1228,
              1255
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1272,
                  1274
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 28
                  },
                  "start": {
                    "column": 50,
                    "line": 28
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1276,
                  1278
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 28
                  },
                  "start": {
                    "column": 54,
                    "line": 28
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
                "name": "Object",
                "optional": false,
                "range": [
                  1258,
                  1264
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 28
                  },
                  "start": {
                    "column": 36,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "range": [
                  1265,
                  1271
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 28
                  },
                  "start": {
                    "column": 43,
                    "line": 28
                  }
                }
              },
              "range": [
                1258,
                1271
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              1258,
              1279
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 28
              },
              "start": {
                "column": 36,
                "line": 28
              }
            }
          },
          "range": [
            1228,
            1279
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1222,
        1280
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "testObjectConstructorGetOwnPropertySymbols",
            "optional": false,
            "range": [
              1287,
              1329
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1361,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 29
                  },
                  "start": {
                    "column": 80,
                    "line": 29
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
                "name": "Object",
                "optional": false,
                "range": [
                  1332,
                  1338
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 29
                  },
                  "start": {
                    "column": 51,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertySymbols",
                "optional": false,
                "range": [
                  1339,
                  1360
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 29
                  },
                  "start": {
                    "column": 58,
                    "line": 29
                  }
                }
              },
              "range": [
                1332,
                1360
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 29
                },
                "start": {
                  "column": 51,
                  "line": 29
                }
              }
            },
            "optional": false,
            "range": [
              1332,
              1364
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 29
              },
              "start": {
                "column": 51,
                "line": 29
              }
            }
          },
          "range": [
            1287,
            1364
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1281,
        1365
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "testObjectConstructorKeys",
            "optional": false,
            "range": [
              1372,
              1397
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1412,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 30
                  },
                  "start": {
                    "column": 46,
                    "line": 30
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
                "name": "Object",
                "optional": false,
                "range": [
                  1400,
                  1406
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 30
                  },
                  "start": {
                    "column": 34,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "range": [
                  1407,
                  1411
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 30
                  },
                  "start": {
                    "column": 41,
                    "line": 30
                  }
                }
              },
              "range": [
                1400,
                1411
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 30
                },
                "start": {
                  "column": 34,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              1400,
              1415
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 30
              },
              "start": {
                "column": 34,
                "line": 30
              }
            }
          },
          "range": [
            1372,
            1415
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1366,
        1416
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "testObjectConstructorIs",
            "optional": false,
            "range": [
              1423,
              1446
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1459,
                  1461
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 31
                  },
                  "start": {
                    "column": 42,
                    "line": 31
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1463,
                  1465
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 31
                  },
                  "start": {
                    "column": 46,
                    "line": 31
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
                "name": "Object",
                "optional": false,
                "range": [
                  1449,
                  1455
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 31
                  },
                  "start": {
                    "column": 32,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "range": [
                  1456,
                  1458
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 31
                  },
                  "start": {
                    "column": 39,
                    "line": 31
                  }
                }
              },
              "range": [
                1449,
                1458
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 31
                },
                "start": {
                  "column": 32,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              1449,
              1466
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 31
              },
              "start": {
                "column": 32,
                "line": 31
              }
            }
          },
          "range": [
            1423,
            1466
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1417,
        1467
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "testObjectConstructorSetPrototypeOf",
            "optional": false,
            "range": [
              1474,
              1509
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1534,
                  1536
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 32
                  },
                  "start": {
                    "column": 66,
                    "line": 32
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1538,
                  1540
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 32
                  },
                  "start": {
                    "column": 70,
                    "line": 32
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
                "name": "Object",
                "optional": false,
                "range": [
                  1512,
                  1518
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 32
                  },
                  "start": {
                    "column": 44,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setPrototypeOf",
                "optional": false,
                "range": [
                  1519,
                  1533
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 32
                  },
                  "start": {
                    "column": 51,
                    "line": 32
                  }
                }
              },
              "range": [
                1512,
                1533
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 32
                },
                "start": {
                  "column": 44,
                  "line": 32
                }
              }
            },
            "optional": false,
            "range": [
              1512,
              1541
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 32
              },
              "start": {
                "column": 44,
                "line": 32
              }
            }
          },
          "range": [
            1474,
            1541
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1468,
        1542
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "testNumberConstructorIsFinite",
            "optional": false,
            "range": [
              1549,
              1578
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1597,
                  1598
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 33
                  },
                  "start": {
                    "column": 54,
                    "line": 33
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
                "name": "Number",
                "optional": false,
                "range": [
                  1581,
                  1587
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 33
                  },
                  "start": {
                    "column": 38,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFinite",
                "optional": false,
                "range": [
                  1588,
                  1596
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 33
                  },
                  "start": {
                    "column": 45,
                    "line": 33
                  }
                }
              },
              "range": [
                1581,
                1596
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 33
                },
                "start": {
                  "column": 38,
                  "line": 33
                }
              }
            },
            "optional": false,
            "range": [
              1581,
              1599
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 33
              },
              "start": {
                "column": 38,
                "line": 33
              }
            }
          },
          "range": [
            1549,
            1599
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1543,
        1600
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "testNumberConstructorIsInteger",
            "optional": false,
            "range": [
              1607,
              1637
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1657,
                  1658
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 34
                  },
                  "start": {
                    "column": 56,
                    "line": 34
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
                "name": "Number",
                "optional": false,
                "range": [
                  1640,
                  1646
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 34
                  },
                  "start": {
                    "column": 39,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isInteger",
                "optional": false,
                "range": [
                  1647,
                  1656
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 34
                  },
                  "start": {
                    "column": 46,
                    "line": 34
                  }
                }
              },
              "range": [
                1640,
                1656
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 34
                },
                "start": {
                  "column": 39,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              1640,
              1659
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 34
              },
              "start": {
                "column": 39,
                "line": 34
              }
            }
          },
          "range": [
            1607,
            1659
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1601,
        1660
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "testNumberConstructorIsNan",
            "optional": false,
            "range": [
              1667,
              1693
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1709,
                  1710
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 35
                  },
                  "start": {
                    "column": 48,
                    "line": 35
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
                "name": "Number",
                "optional": false,
                "range": [
                  1696,
                  1702
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 35
                  },
                  "start": {
                    "column": 35,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isNaN",
                "optional": false,
                "range": [
                  1703,
                  1708
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 35
                  },
                  "start": {
                    "column": 42,
                    "line": 35
                  }
                }
              },
              "range": [
                1696,
                1708
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 35
                },
                "start": {
                  "column": 35,
                  "line": 35
                }
              }
            },
            "optional": false,
            "range": [
              1696,
              1711
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 35
              },
              "start": {
                "column": 35,
                "line": 35
              }
            }
          },
          "range": [
            1667,
            1711
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1661,
        1712
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "testNumberConstructorIsSafeInteger",
            "optional": false,
            "range": [
              1719,
              1753
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 36
              },
              "start": {
                "column": 6,
                "line": 36
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1777,
                  1778
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 36
                  },
                  "start": {
                    "column": 64,
                    "line": 36
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
                "name": "Number",
                "optional": false,
                "range": [
                  1756,
                  1762
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 36
                  },
                  "start": {
                    "column": 43,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSafeInteger",
                "optional": false,
                "range": [
                  1763,
                  1776
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 36
                  },
                  "start": {
                    "column": 50,
                    "line": 36
                  }
                }
              },
              "range": [
                1756,
                1776
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 36
                },
                "start": {
                  "column": 43,
                  "line": 36
                }
              }
            },
            "optional": false,
            "range": [
              1756,
              1779
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 36
              },
              "start": {
                "column": 43,
                "line": 36
              }
            }
          },
          "range": [
            1719,
            1779
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1713,
        1780
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "testNumberConstructorParseFloat",
            "optional": false,
            "range": [
              1787,
              1818
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  1839,
                  1842
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 37
                  },
                  "start": {
                    "column": 58,
                    "line": 37
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
                "name": "Number",
                "optional": false,
                "range": [
                  1821,
                  1827
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 37
                  },
                  "start": {
                    "column": 40,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "parseFloat",
                "optional": false,
                "range": [
                  1828,
                  1838
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 37
                  },
                  "start": {
                    "column": 47,
                    "line": 37
                  }
                }
              },
              "range": [
                1821,
                1838
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 37
                },
                "start": {
                  "column": 40,
                  "line": 37
                }
              }
            },
            "optional": false,
            "range": [
              1821,
              1843
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 37
              },
              "start": {
                "column": 40,
                "line": 37
              }
            }
          },
          "range": [
            1787,
            1843
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1781,
        1844
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "testNumberConstructorParseInt",
            "optional": false,
            "range": [
              1851,
              1880
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  1899,
                  1902
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 38
                  },
                  "start": {
                    "column": 54,
                    "line": 38
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
                "name": "Number",
                "optional": false,
                "range": [
                  1883,
                  1889
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 38
                  },
                  "start": {
                    "column": 38,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "parseInt",
                "optional": false,
                "range": [
                  1890,
                  1898
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 38
                  },
                  "start": {
                    "column": 45,
                    "line": 38
                  }
                }
              },
              "range": [
                1883,
                1898
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 38
                },
                "start": {
                  "column": 38,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              1883,
              1903
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 38
              },
              "start": {
                "column": 38,
                "line": 38
              }
            }
          },
          "range": [
            1851,
            1903
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1845,
        1904
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "testMathClz32",
            "optional": false,
            "range": [
              1911,
              1924
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1938,
                  1939
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 39
                  },
                  "start": {
                    "column": 33,
                    "line": 39
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
                "name": "Math",
                "optional": false,
                "range": [
                  1927,
                  1931
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 39
                  },
                  "start": {
                    "column": 22,
                    "line": 39
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clz32",
                "optional": false,
                "range": [
                  1932,
                  1937
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 39
                  },
                  "start": {
                    "column": 27,
                    "line": 39
                  }
                }
              },
              "range": [
                1927,
                1937
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 39
                },
                "start": {
                  "column": 22,
                  "line": 39
                }
              }
            },
            "optional": false,
            "range": [
              1927,
              1940
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 39
              },
              "start": {
                "column": 22,
                "line": 39
              }
            }
          },
          "range": [
            1911,
            1940
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1905,
        1941
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "testMathImul",
            "optional": false,
            "range": [
              1948,
              1960
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1973,
                  1974
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 40
                  },
                  "start": {
                    "column": 31,
                    "line": 40
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1975,
                  1976
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 40
                  },
                  "start": {
                    "column": 33,
                    "line": 40
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
                "name": "Math",
                "optional": false,
                "range": [
                  1963,
                  1967
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 40
                  },
                  "start": {
                    "column": 21,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "imul",
                "optional": false,
                "range": [
                  1968,
                  1972
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 40
                  },
                  "start": {
                    "column": 26,
                    "line": 40
                  }
                }
              },
              "range": [
                1963,
                1972
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 40
                },
                "start": {
                  "column": 21,
                  "line": 40
                }
              }
            },
            "optional": false,
            "range": [
              1963,
              1977
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 40
              },
              "start": {
                "column": 21,
                "line": 40
              }
            }
          },
          "range": [
            1948,
            1977
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1942,
        1978
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "testMathSign",
            "optional": false,
            "range": [
              1985,
              1997
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2010,
                  2011
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 41
                  },
                  "start": {
                    "column": 31,
                    "line": 41
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
                "name": "Math",
                "optional": false,
                "range": [
                  2000,
                  2004
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 41
                  },
                  "start": {
                    "column": 21,
                    "line": 41
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sign",
                "optional": false,
                "range": [
                  2005,
                  2009
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 41
                  },
                  "start": {
                    "column": 26,
                    "line": 41
                  }
                }
              },
              "range": [
                2000,
                2009
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 41
                },
                "start": {
                  "column": 21,
                  "line": 41
                }
              }
            },
            "optional": false,
            "range": [
              2000,
              2012
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 41
              },
              "start": {
                "column": 21,
                "line": 41
              }
            }
          },
          "range": [
            1985,
            2012
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1979,
        2013
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "testMathLog10",
            "optional": false,
            "range": [
              2020,
              2033
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2047,
                  2048
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 42
                  },
                  "start": {
                    "column": 33,
                    "line": 42
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
                "name": "Math",
                "optional": false,
                "range": [
                  2036,
                  2040
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 42
                  },
                  "start": {
                    "column": 22,
                    "line": 42
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log10",
                "optional": false,
                "range": [
                  2041,
                  2046
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 42
                  },
                  "start": {
                    "column": 27,
                    "line": 42
                  }
                }
              },
              "range": [
                2036,
                2046
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 42
                },
                "start": {
                  "column": 22,
                  "line": 42
                }
              }
            },
            "optional": false,
            "range": [
              2036,
              2049
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 42
              },
              "start": {
                "column": 22,
                "line": 42
              }
            }
          },
          "range": [
            2020,
            2049
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2014,
        2050
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "testMathLog2",
            "optional": false,
            "range": [
              2057,
              2069
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 43
              },
              "start": {
                "column": 6,
                "line": 43
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2082,
                  2083
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 43
                  },
                  "start": {
                    "column": 31,
                    "line": 43
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
                "name": "Math",
                "optional": false,
                "range": [
                  2072,
                  2076
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 43
                  },
                  "start": {
                    "column": 21,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log2",
                "optional": false,
                "range": [
                  2077,
                  2081
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 43
                  },
                  "start": {
                    "column": 26,
                    "line": 43
                  }
                }
              },
              "range": [
                2072,
                2081
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 43
                },
                "start": {
                  "column": 21,
                  "line": 43
                }
              }
            },
            "optional": false,
            "range": [
              2072,
              2084
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 43
              },
              "start": {
                "column": 21,
                "line": 43
              }
            }
          },
          "range": [
            2057,
            2084
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2051,
        2085
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "testMathLog1p",
            "optional": false,
            "range": [
              2092,
              2105
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2119,
                  2120
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 44
                  },
                  "start": {
                    "column": 33,
                    "line": 44
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
                "name": "Math",
                "optional": false,
                "range": [
                  2108,
                  2112
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log1p",
                "optional": false,
                "range": [
                  2113,
                  2118
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 27,
                    "line": 44
                  }
                }
              },
              "range": [
                2108,
                2118
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 22,
                  "line": 44
                }
              }
            },
            "optional": false,
            "range": [
              2108,
              2121
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 44
              },
              "start": {
                "column": 22,
                "line": 44
              }
            }
          },
          "range": [
            2092,
            2121
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2086,
        2122
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "testMathExpm1",
            "optional": false,
            "range": [
              2129,
              2142
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2156,
                  2157
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 45
                  },
                  "start": {
                    "column": 33,
                    "line": 45
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
                "name": "Math",
                "optional": false,
                "range": [
                  2145,
                  2149
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 45
                  },
                  "start": {
                    "column": 22,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "expm1",
                "optional": false,
                "range": [
                  2150,
                  2155
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 45
                  },
                  "start": {
                    "column": 27,
                    "line": 45
                  }
                }
              },
              "range": [
                2145,
                2155
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 45
                },
                "start": {
                  "column": 22,
                  "line": 45
                }
              }
            },
            "optional": false,
            "range": [
              2145,
              2158
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 45
              },
              "start": {
                "column": 22,
                "line": 45
              }
            }
          },
          "range": [
            2129,
            2158
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2123,
        2159
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "testMathCosh",
            "optional": false,
            "range": [
              2166,
              2178
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2191,
                  2192
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 46
                  },
                  "start": {
                    "column": 31,
                    "line": 46
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
                "name": "Math",
                "optional": false,
                "range": [
                  2181,
                  2185
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 46
                  },
                  "start": {
                    "column": 21,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "cosh",
                "optional": false,
                "range": [
                  2186,
                  2190
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 46
                  },
                  "start": {
                    "column": 26,
                    "line": 46
                  }
                }
              },
              "range": [
                2181,
                2190
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 46
                },
                "start": {
                  "column": 21,
                  "line": 46
                }
              }
            },
            "optional": false,
            "range": [
              2181,
              2193
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 46
              },
              "start": {
                "column": 21,
                "line": 46
              }
            }
          },
          "range": [
            2166,
            2193
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2160,
        2194
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "testMathSinh",
            "optional": false,
            "range": [
              2201,
              2213
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2226,
                  2227
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 47
                  },
                  "start": {
                    "column": 31,
                    "line": 47
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
                "name": "Math",
                "optional": false,
                "range": [
                  2216,
                  2220
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 47
                  },
                  "start": {
                    "column": 21,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sinh",
                "optional": false,
                "range": [
                  2221,
                  2225
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 47
                  },
                  "start": {
                    "column": 26,
                    "line": 47
                  }
                }
              },
              "range": [
                2216,
                2225
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 47
                },
                "start": {
                  "column": 21,
                  "line": 47
                }
              }
            },
            "optional": false,
            "range": [
              2216,
              2228
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 47
              },
              "start": {
                "column": 21,
                "line": 47
              }
            }
          },
          "range": [
            2201,
            2228
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2195,
        2229
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "testMathTanh",
            "optional": false,
            "range": [
              2236,
              2248
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 48
              },
              "start": {
                "column": 6,
                "line": 48
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2261,
                  2262
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 48
                  },
                  "start": {
                    "column": 31,
                    "line": 48
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
                "name": "Math",
                "optional": false,
                "range": [
                  2251,
                  2255
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 48
                  },
                  "start": {
                    "column": 21,
                    "line": 48
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tanh",
                "optional": false,
                "range": [
                  2256,
                  2260
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 48
                  },
                  "start": {
                    "column": 26,
                    "line": 48
                  }
                }
              },
              "range": [
                2251,
                2260
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 48
                },
                "start": {
                  "column": 21,
                  "line": 48
                }
              }
            },
            "optional": false,
            "range": [
              2251,
              2263
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 48
              },
              "start": {
                "column": 21,
                "line": 48
              }
            }
          },
          "range": [
            2236,
            2263
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2230,
        2264
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "testMathAcosh",
            "optional": false,
            "range": [
              2271,
              2284
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2298,
                  2299
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 49
                  },
                  "start": {
                    "column": 33,
                    "line": 49
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
                "name": "Math",
                "optional": false,
                "range": [
                  2287,
                  2291
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 49
                  },
                  "start": {
                    "column": 22,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "acosh",
                "optional": false,
                "range": [
                  2292,
                  2297
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 49
                  },
                  "start": {
                    "column": 27,
                    "line": 49
                  }
                }
              },
              "range": [
                2287,
                2297
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 49
                },
                "start": {
                  "column": 22,
                  "line": 49
                }
              }
            },
            "optional": false,
            "range": [
              2287,
              2300
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 49
              },
              "start": {
                "column": 22,
                "line": 49
              }
            }
          },
          "range": [
            2271,
            2300
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2265,
        2301
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "testMathAsinh",
            "optional": false,
            "range": [
              2308,
              2321
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 50
              },
              "start": {
                "column": 6,
                "line": 50
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2335,
                  2336
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 50
                  },
                  "start": {
                    "column": 33,
                    "line": 50
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
                "name": "Math",
                "optional": false,
                "range": [
                  2324,
                  2328
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 50
                  },
                  "start": {
                    "column": 22,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "asinh",
                "optional": false,
                "range": [
                  2329,
                  2334
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 50
                  },
                  "start": {
                    "column": 27,
                    "line": 50
                  }
                }
              },
              "range": [
                2324,
                2334
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 50
                },
                "start": {
                  "column": 22,
                  "line": 50
                }
              }
            },
            "optional": false,
            "range": [
              2324,
              2337
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 50
              },
              "start": {
                "column": 22,
                "line": 50
              }
            }
          },
          "range": [
            2308,
            2337
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2302,
        2338
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
            "name": "testMathAtanh",
            "optional": false,
            "range": [
              2345,
              2358
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 51
              },
              "start": {
                "column": 6,
                "line": 51
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2372,
                  2373
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 51
                  },
                  "start": {
                    "column": 33,
                    "line": 51
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
                "name": "Math",
                "optional": false,
                "range": [
                  2361,
                  2365
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 51
                  },
                  "start": {
                    "column": 22,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "atanh",
                "optional": false,
                "range": [
                  2366,
                  2371
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 51
                  },
                  "start": {
                    "column": 27,
                    "line": 51
                  }
                }
              },
              "range": [
                2361,
                2371
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 51
                },
                "start": {
                  "column": 22,
                  "line": 51
                }
              }
            },
            "optional": false,
            "range": [
              2361,
              2374
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 51
              },
              "start": {
                "column": 22,
                "line": 51
              }
            }
          },
          "range": [
            2345,
            2374
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 51
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2339,
        2375
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "testMathHypot",
            "optional": false,
            "range": [
              2382,
              2395
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 52
              },
              "start": {
                "column": 6,
                "line": 52
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2409,
                  2410
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 52
                  },
                  "start": {
                    "column": 33,
                    "line": 52
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2411,
                  2412
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 52
                  },
                  "start": {
                    "column": 35,
                    "line": 52
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
                "name": "Math",
                "optional": false,
                "range": [
                  2398,
                  2402
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 52
                  },
                  "start": {
                    "column": 22,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hypot",
                "optional": false,
                "range": [
                  2403,
                  2408
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 52
                  },
                  "start": {
                    "column": 27,
                    "line": 52
                  }
                }
              },
              "range": [
                2398,
                2408
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 52
                },
                "start": {
                  "column": 22,
                  "line": 52
                }
              }
            },
            "optional": false,
            "range": [
              2398,
              2413
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 52
              },
              "start": {
                "column": 22,
                "line": 52
              }
            }
          },
          "range": [
            2382,
            2413
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 52
            },
            "start": {
              "column": 6,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2376,
        2414
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "testMathTrunc",
            "optional": false,
            "range": [
              2421,
              2434
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 53
              },
              "start": {
                "column": 6,
                "line": 53
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2448,
                  2449
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 53
                  },
                  "start": {
                    "column": 33,
                    "line": 53
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
                "name": "Math",
                "optional": false,
                "range": [
                  2437,
                  2441
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 53
                  },
                  "start": {
                    "column": 22,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trunc",
                "optional": false,
                "range": [
                  2442,
                  2447
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 53
                  },
                  "start": {
                    "column": 27,
                    "line": 53
                  }
                }
              },
              "range": [
                2437,
                2447
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 53
                },
                "start": {
                  "column": 22,
                  "line": 53
                }
              }
            },
            "optional": false,
            "range": [
              2437,
              2450
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 53
              },
              "start": {
                "column": 22,
                "line": 53
              }
            }
          },
          "range": [
            2421,
            2450
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2415,
        2451
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "name": "testMathFround",
            "optional": false,
            "range": [
              2458,
              2472
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2487,
                  2488
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 54
                  },
                  "start": {
                    "column": 35,
                    "line": 54
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
                "name": "Math",
                "optional": false,
                "range": [
                  2475,
                  2479
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 54
                  },
                  "start": {
                    "column": 23,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fround",
                "optional": false,
                "range": [
                  2480,
                  2486
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 54
                  },
                  "start": {
                    "column": 28,
                    "line": 54
                  }
                }
              },
              "range": [
                2475,
                2486
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 54
                },
                "start": {
                  "column": 23,
                  "line": 54
                }
              }
            },
            "optional": false,
            "range": [
              2475,
              2489
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 54
              },
              "start": {
                "column": 23,
                "line": 54
              }
            }
          },
          "range": [
            2458,
            2489
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2452,
        2490
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "testMathCbrt",
            "optional": false,
            "range": [
              2497,
              2509
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 6,
                "line": 55
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  2522,
                  2523
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 55
                  },
                  "start": {
                    "column": 31,
                    "line": 55
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
                "name": "Math",
                "optional": false,
                "range": [
                  2512,
                  2516
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 55
                  },
                  "start": {
                    "column": 21,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "cbrt",
                "optional": false,
                "range": [
                  2517,
                  2521
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 55
                  },
                  "start": {
                    "column": 26,
                    "line": 55
                  }
                }
              },
              "range": [
                2512,
                2521
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 55
                },
                "start": {
                  "column": 21,
                  "line": 55
                }
              }
            },
            "optional": false,
            "range": [
              2512,
              2524
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 55
              },
              "start": {
                "column": 21,
                "line": 55
              }
            }
          },
          "range": [
            2497,
            2524
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 55
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2491,
        2525
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "testMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 56
                },
                "start": {
                  "column": 13,
                  "line": 56
                }
              },
              "range": [
                2539,
                2554
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2544,
                    2554
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2545,
                        2548
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 56
                        },
                        "start": {
                          "column": 19,
                          "line": 56
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2550,
                        2553
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 56
                        },
                        "start": {
                          "column": 24,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 56
                    },
                    "start": {
                      "column": 18,
                      "line": 56
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "range": [
                    2541,
                    2544
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 15,
                      "line": 56
                    }
                  }
                },
                "range": [
                  2541,
                  2554
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 56
                  },
                  "start": {
                    "column": 15,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              2532,
              2554
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 56
              },
              "start": {
                "column": 6,
                "line": 56
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2557,
                2561
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 56
                },
                "start": {
                  "column": 31,
                  "line": 56
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2565,
                2568
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 56
                },
                "start": {
                  "column": 39,
                  "line": 56
                }
              }
            },
            "range": [
              2557,
              2568
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 56
              },
              "start": {
                "column": 31,
                "line": 56
              }
            }
          },
          "range": [
            2532,
            2568
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 56
            },
            "start": {
              "column": 6,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2526,
        2569
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 57
                },
                "start": {
                  "column": 13,
                  "line": 57
                }
              },
              "range": [
                2583,
                2593
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2588,
                    2593
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2589,
                        2592
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 57
                        },
                        "start": {
                          "column": 19,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 57
                    },
                    "start": {
                      "column": 18,
                      "line": 57
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    2585,
                    2588
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 57
                    },
                    "start": {
                      "column": 15,
                      "line": 57
                    }
                  }
                },
                "range": [
                  2585,
                  2593
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 57
                  },
                  "start": {
                    "column": 15,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              2576,
              2593
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2596,
                2600
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 57
                },
                "start": {
                  "column": 26,
                  "line": 57
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2604,
                2607
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 57
                },
                "start": {
                  "column": 34,
                  "line": 57
                }
              }
            },
            "range": [
              2596,
              2607
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 57
              },
              "start": {
                "column": 26,
                "line": 57
              }
            }
          },
          "range": [
            2576,
            2607
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2570,
        2608
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "testPromiseAll",
            "optional": false,
            "range": [
              2615,
              2629
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 58
              },
              "start": {
                "column": 6,
                "line": 58
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  2644,
                  2646
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 58
                  },
                  "start": {
                    "column": 35,
                    "line": 58
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
                "name": "Promise",
                "optional": false,
                "range": [
                  2632,
                  2639
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 58
                  },
                  "start": {
                    "column": 23,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "range": [
                  2640,
                  2643
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 58
                  },
                  "start": {
                    "column": 31,
                    "line": 58
                  }
                }
              },
              "range": [
                2632,
                2643
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 58
                },
                "start": {
                  "column": 23,
                  "line": 58
                }
              }
            },
            "optional": false,
            "range": [
              2632,
              2647
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 58
              },
              "start": {
                "column": 23,
                "line": 58
              }
            }
          },
          "range": [
            2615,
            2647
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 58
            },
            "start": {
              "column": 6,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2609,
        2648
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "testPromiseRace",
            "optional": false,
            "range": [
              2655,
              2670
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 59
              },
              "start": {
                "column": 6,
                "line": 59
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  2686,
                  2688
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 59
                  },
                  "start": {
                    "column": 37,
                    "line": 59
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
                "name": "Promise",
                "optional": false,
                "range": [
                  2673,
                  2680
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 59
                  },
                  "start": {
                    "column": 24,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "range": [
                  2681,
                  2685
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 59
                  },
                  "start": {
                    "column": 32,
                    "line": 59
                  }
                }
              },
              "range": [
                2673,
                2685
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 59
                },
                "start": {
                  "column": 24,
                  "line": 59
                }
              }
            },
            "optional": false,
            "range": [
              2673,
              2689
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 59
              },
              "start": {
                "column": 24,
                "line": 59
              }
            }
          },
          "range": [
            2655,
            2689
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2649,
        2690
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
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
            "name": "testPromiseResolve",
            "optional": false,
            "range": [
              2697,
              2715
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 60
              },
              "start": {
                "column": 6,
                "line": 60
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  2718,
                  2725
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 60
                  },
                  "start": {
                    "column": 27,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "range": [
                  2726,
                  2733
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 60
                  },
                  "start": {
                    "column": 35,
                    "line": 60
                  }
                }
              },
              "range": [
                2718,
                2733
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 60
                },
                "start": {
                  "column": 27,
                  "line": 60
                }
              }
            },
            "optional": false,
            "range": [
              2718,
              2735
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 60
              },
              "start": {
                "column": 27,
                "line": 60
              }
            }
          },
          "range": [
            2697,
            2735
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 60
            },
            "start": {
              "column": 6,
              "line": 60
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2691,
        2736
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "testPromiseReject",
            "optional": false,
            "range": [
              2743,
              2760
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 61
              },
              "start": {
                "column": 6,
                "line": 61
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  2763,
                  2770
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 61
                  },
                  "start": {
                    "column": 26,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reject",
                "optional": false,
                "range": [
                  2771,
                  2777
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 61
                  },
                  "start": {
                    "column": 34,
                    "line": 61
                  }
                }
              },
              "range": [
                2763,
                2777
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 61
                },
                "start": {
                  "column": 26,
                  "line": 61
                }
              }
            },
            "optional": false,
            "range": [
              2763,
              2779
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 61
              },
              "start": {
                "column": 26,
                "line": 61
              }
            }
          },
          "range": [
            2743,
            2779
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 61
            },
            "start": {
              "column": 6,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2737,
        2780
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "testSymbolFor",
            "optional": false,
            "range": [
              2787,
              2800
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 62
              },
              "start": {
                "column": 6,
                "line": 62
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  2814,
                  2817
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 62
                  },
                  "start": {
                    "column": 33,
                    "line": 62
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
                "name": "Symbol",
                "optional": false,
                "range": [
                  2803,
                  2809
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 62
                  },
                  "start": {
                    "column": 22,
                    "line": 62
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "for",
                "optional": false,
                "range": [
                  2810,
                  2813
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 62
                  },
                  "start": {
                    "column": 29,
                    "line": 62
                  }
                }
              },
              "range": [
                2803,
                2813
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 62
                },
                "start": {
                  "column": 22,
                  "line": 62
                }
              }
            },
            "optional": false,
            "range": [
              2803,
              2818
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 62
              },
              "start": {
                "column": 22,
                "line": 62
              }
            }
          },
          "range": [
            2787,
            2818
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 62
            },
            "start": {
              "column": 6,
              "line": 62
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2781,
        2819
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "testSymbolKeyFor",
            "optional": false,
            "range": [
              2826,
              2842
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 63
              },
              "start": {
                "column": 6,
                "line": 63
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testSymbolFor",
                "optional": false,
                "range": [
                  2859,
                  2872
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 63
                  },
                  "start": {
                    "column": 39,
                    "line": 63
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
                "name": "Symbol",
                "optional": false,
                "range": [
                  2845,
                  2851
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 63
                  },
                  "start": {
                    "column": 25,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keyFor",
                "optional": false,
                "range": [
                  2852,
                  2858
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 63
                  },
                  "start": {
                    "column": 32,
                    "line": 63
                  }
                }
              },
              "range": [
                2845,
                2858
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 63
                },
                "start": {
                  "column": 25,
                  "line": 63
                }
              }
            },
            "optional": false,
            "range": [
              2845,
              2873
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 63
              },
              "start": {
                "column": 25,
                "line": 63
              }
            }
          },
          "range": [
            2826,
            2873
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 63
            },
            "start": {
              "column": 6,
              "line": 63
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2820,
        2874
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            "name": "testWeakMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 64
                },
                "start": {
                  "column": 17,
                  "line": 64
                }
              },
              "range": [
                2892,
                2911
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2901,
                    2911
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2902,
                        2905
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 64
                        },
                        "start": {
                          "column": 27,
                          "line": 64
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2907,
                        2910
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 64
                        },
                        "start": {
                          "column": 32,
                          "line": 64
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 64
                    },
                    "start": {
                      "column": 26,
                      "line": 64
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "range": [
                    2894,
                    2901
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 64
                    },
                    "start": {
                      "column": 19,
                      "line": 64
                    }
                  }
                },
                "range": [
                  2894,
                  2911
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 64
                  },
                  "start": {
                    "column": 19,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              2881,
              2911
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 64
              },
              "start": {
                "column": 6,
                "line": 64
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2914,
                2918
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 64
                },
                "start": {
                  "column": 39,
                  "line": 64
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2922,
                2925
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 64
                },
                "start": {
                  "column": 47,
                  "line": 64
                }
              }
            },
            "range": [
              2914,
              2925
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 64
              },
              "start": {
                "column": 39,
                "line": 64
              }
            }
          },
          "range": [
            2881,
            2925
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 64
            },
            "start": {
              "column": 6,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2875,
        2926
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
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
            "name": "testWeakSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 65
                },
                "start": {
                  "column": 17,
                  "line": 65
                }
              },
              "range": [
                2944,
                2963
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2953,
                    2963
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2954,
                        2957
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 65
                        },
                        "start": {
                          "column": 27,
                          "line": 65
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        2959,
                        2962
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 65
                        },
                        "start": {
                          "column": 32,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 65
                    },
                    "start": {
                      "column": 26,
                      "line": 65
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "range": [
                    2946,
                    2953
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 65
                    },
                    "start": {
                      "column": 19,
                      "line": 65
                    }
                  }
                },
                "range": [
                  2946,
                  2963
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 65
                  },
                  "start": {
                    "column": 19,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              2933,
              2963
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 65
              },
              "start": {
                "column": 6,
                "line": 65
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2966,
                2970
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 65
                },
                "start": {
                  "column": 39,
                  "line": 65
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2974,
                2977
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 65
                },
                "start": {
                  "column": 47,
                  "line": 65
                }
              }
            },
            "range": [
              2966,
              2977
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 65
              },
              "start": {
                "column": 39,
                "line": 65
              }
            }
          },
          "range": [
            2933,
            2977
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 65
            },
            "start": {
              "column": 6,
              "line": 65
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2927,
        2978
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
            "name": "testIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 66
                },
                "start": {
                  "column": 18,
                  "line": 66
                }
              },
              "range": [
                2997,
                3022
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3007,
                    3022
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        3008,
                        3011
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 66
                        },
                        "start": {
                          "column": 29,
                          "line": 66
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        3013,
                        3016
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 66
                        },
                        "start": {
                          "column": 34,
                          "line": 66
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        3018,
                        3021
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 66
                        },
                        "start": {
                          "column": 39,
                          "line": 66
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 66
                    },
                    "start": {
                      "column": 28,
                      "line": 66
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "range": [
                    2999,
                    3007
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 66
                    },
                    "start": {
                      "column": 20,
                      "line": 66
                    }
                  }
                },
                "range": [
                  2999,
                  3022
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 66
                  },
                  "start": {
                    "column": 20,
                    "line": 66
                  }
                }
              }
            },
            "range": [
              2985,
              3022
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 66
              },
              "start": {
                "column": 6,
                "line": 66
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                3025,
                3029
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 66
                },
                "start": {
                  "column": 46,
                  "line": 66
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                3033,
                3036
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 66
                },
                "start": {
                  "column": 54,
                  "line": 66
                }
              }
            },
            "range": [
              3025,
              3036
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 66
              },
              "start": {
                "column": 46,
                "line": 66
              }
            }
          },
          "range": [
            2985,
            3036
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 66
            },
            "start": {
              "column": 6,
              "line": 66
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2979,
        3037
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
            "name": "testAsyncIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 67
                },
                "start": {
                  "column": 23,
                  "line": 67
                }
              },
              "range": [
                3061,
                3091
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3076,
                    3091
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        3077,
                        3080
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 67
                        },
                        "start": {
                          "column": 39,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        3082,
                        3085
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 67
                        },
                        "start": {
                          "column": 44,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        3087,
                        3090
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 67
                        },
                        "start": {
                          "column": 49,
                          "line": 67
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 67
                    },
                    "start": {
                      "column": 38,
                      "line": 67
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterator",
                  "optional": false,
                  "range": [
                    3063,
                    3076
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 67
                    },
                    "start": {
                      "column": 25,
                      "line": 67
                    }
                  }
                },
                "range": [
                  3063,
                  3091
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 67
                  },
                  "start": {
                    "column": 25,
                    "line": 67
                  }
                }
              }
            },
            "range": [
              3044,
              3091
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 67
              },
              "start": {
                "column": 6,
                "line": 67
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                3094,
                3098
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 67
                },
                "start": {
                  "column": 56,
                  "line": 67
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                3102,
                3105
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 67
                },
                "start": {
                  "column": 64,
                  "line": 67
                }
              }
            },
            "range": [
              3094,
              3105
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 67
              },
              "start": {
                "column": 56,
                "line": 67
              }
            }
          },
          "range": [
            3044,
            3105
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 67
            },
            "start": {
              "column": 6,
              "line": 67
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3038,
        3106
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            "name": "testStringCodePointAt",
            "optional": false,
            "range": [
              3113,
              3134
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 68
              },
              "start": {
                "column": 6,
                "line": 68
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  3152,
                  3153
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 68
                  },
                  "start": {
                    "column": 45,
                    "line": 68
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3137,
                  3139
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 68
                  },
                  "start": {
                    "column": 30,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "codePointAt",
                "optional": false,
                "range": [
                  3140,
                  3151
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 68
                  },
                  "start": {
                    "column": 33,
                    "line": 68
                  }
                }
              },
              "range": [
                3137,
                3151
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 68
                },
                "start": {
                  "column": 30,
                  "line": 68
                }
              }
            },
            "optional": false,
            "range": [
              3137,
              3154
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 68
              },
              "start": {
                "column": 30,
                "line": 68
              }
            }
          },
          "range": [
            3113,
            3154
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 68
            },
            "start": {
              "column": 6,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3107,
        3155
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "testStringIncludes",
            "optional": false,
            "range": [
              3162,
              3180
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 69
              },
              "start": {
                "column": 6,
                "line": 69
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3195,
                  3197
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 69
                  },
                  "start": {
                    "column": 39,
                    "line": 69
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3183,
                  3185
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 69
                  },
                  "start": {
                    "column": 27,
                    "line": 69
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "includes",
                "optional": false,
                "range": [
                  3186,
                  3194
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 69
                  },
                  "start": {
                    "column": 30,
                    "line": 69
                  }
                }
              },
              "range": [
                3183,
                3194
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 69
                },
                "start": {
                  "column": 27,
                  "line": 69
                }
              }
            },
            "optional": false,
            "range": [
              3183,
              3198
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 69
              },
              "start": {
                "column": 27,
                "line": 69
              }
            }
          },
          "range": [
            3162,
            3198
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 69
            },
            "start": {
              "column": 6,
              "line": 69
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3156,
        3199
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
            "name": "testStringEndsWith",
            "optional": false,
            "range": [
              3206,
              3224
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 70
              },
              "start": {
                "column": 6,
                "line": 70
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3239,
                  3241
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 70
                  },
                  "start": {
                    "column": 39,
                    "line": 70
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3227,
                  3229
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 70
                  },
                  "start": {
                    "column": 27,
                    "line": 70
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "endsWith",
                "optional": false,
                "range": [
                  3230,
                  3238
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 70
                  },
                  "start": {
                    "column": 30,
                    "line": 70
                  }
                }
              },
              "range": [
                3227,
                3238
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 70
                },
                "start": {
                  "column": 27,
                  "line": 70
                }
              }
            },
            "optional": false,
            "range": [
              3227,
              3242
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 70
              },
              "start": {
                "column": 27,
                "line": 70
              }
            }
          },
          "range": [
            3206,
            3242
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 70
            },
            "start": {
              "column": 6,
              "line": 70
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3200,
        3243
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
            "name": "testStringNormalize",
            "optional": false,
            "range": [
              3250,
              3269
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 71
              },
              "start": {
                "column": 6,
                "line": 71
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3272,
                  3274
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 71
                  },
                  "start": {
                    "column": 28,
                    "line": 71
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "normalize",
                "optional": false,
                "range": [
                  3275,
                  3284
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 71
                  },
                  "start": {
                    "column": 31,
                    "line": 71
                  }
                }
              },
              "range": [
                3272,
                3284
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 71
                },
                "start": {
                  "column": 28,
                  "line": 71
                }
              }
            },
            "optional": false,
            "range": [
              3272,
              3286
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 71
              },
              "start": {
                "column": 28,
                "line": 71
              }
            }
          },
          "range": [
            3250,
            3286
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 71
            },
            "start": {
              "column": 6,
              "line": 71
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3244,
        3287
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
            "name": "testStringRepeat",
            "optional": false,
            "range": [
              3294,
              3310
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 72
              },
              "start": {
                "column": 6,
                "line": 72
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  3323,
                  3324
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 72
                  },
                  "start": {
                    "column": 35,
                    "line": 72
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3313,
                  3315
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 72
                  },
                  "start": {
                    "column": 25,
                    "line": 72
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "repeat",
                "optional": false,
                "range": [
                  3316,
                  3322
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 72
                  },
                  "start": {
                    "column": 28,
                    "line": 72
                  }
                }
              },
              "range": [
                3313,
                3322
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 72
                },
                "start": {
                  "column": 25,
                  "line": 72
                }
              }
            },
            "optional": false,
            "range": [
              3313,
              3325
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 72
              },
              "start": {
                "column": 25,
                "line": 72
              }
            }
          },
          "range": [
            3294,
            3325
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 72
            },
            "start": {
              "column": 6,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3288,
        3326
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
            "name": "testStringStartsWith",
            "optional": false,
            "range": [
              3333,
              3353
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 73
              },
              "start": {
                "column": 6,
                "line": 73
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3370,
                  3372
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 73
                  },
                  "start": {
                    "column": 43,
                    "line": 73
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3356,
                  3358
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 73
                  },
                  "start": {
                    "column": 29,
                    "line": 73
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "startsWith",
                "optional": false,
                "range": [
                  3359,
                  3369
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 73
                  },
                  "start": {
                    "column": 32,
                    "line": 73
                  }
                }
              },
              "range": [
                3356,
                3369
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 73
                },
                "start": {
                  "column": 29,
                  "line": 73
                }
              }
            },
            "optional": false,
            "range": [
              3356,
              3373
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 73
              },
              "start": {
                "column": 29,
                "line": 73
              }
            }
          },
          "range": [
            3333,
            3373
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 73
            },
            "start": {
              "column": 6,
              "line": 73
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3327,
        3374
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
            "name": "testStringAnchor",
            "optional": false,
            "range": [
              3381,
              3397
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 74
              },
              "start": {
                "column": 6,
                "line": 74
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3410,
                  3412
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 74
                  },
                  "start": {
                    "column": 35,
                    "line": 74
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3400,
                  3402
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 74
                  },
                  "start": {
                    "column": 25,
                    "line": 74
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anchor",
                "optional": false,
                "range": [
                  3403,
                  3409
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 74
                  },
                  "start": {
                    "column": 28,
                    "line": 74
                  }
                }
              },
              "range": [
                3400,
                3409
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 74
                },
                "start": {
                  "column": 25,
                  "line": 74
                }
              }
            },
            "optional": false,
            "range": [
              3400,
              3413
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 74
              },
              "start": {
                "column": 25,
                "line": 74
              }
            }
          },
          "range": [
            3381,
            3413
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 74
            },
            "start": {
              "column": 6,
              "line": 74
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3375,
        3414
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
            "name": "testStringBig",
            "optional": false,
            "range": [
              3421,
              3434
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 75
              },
              "start": {
                "column": 6,
                "line": 75
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3437,
                  3439
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 75
                  },
                  "start": {
                    "column": 22,
                    "line": 75
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "big",
                "optional": false,
                "range": [
                  3440,
                  3443
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 75
                  },
                  "start": {
                    "column": 25,
                    "line": 75
                  }
                }
              },
              "range": [
                3437,
                3443
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 75
                },
                "start": {
                  "column": 22,
                  "line": 75
                }
              }
            },
            "optional": false,
            "range": [
              3437,
              3445
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 75
              },
              "start": {
                "column": 22,
                "line": 75
              }
            }
          },
          "range": [
            3421,
            3445
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 75
            },
            "start": {
              "column": 6,
              "line": 75
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3415,
        3446
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
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
            "name": "testStringBlink",
            "optional": false,
            "range": [
              3453,
              3468
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 76
              },
              "start": {
                "column": 6,
                "line": 76
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3471,
                  3473
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 76
                  },
                  "start": {
                    "column": 24,
                    "line": 76
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "blink",
                "optional": false,
                "range": [
                  3474,
                  3479
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 76
                  },
                  "start": {
                    "column": 27,
                    "line": 76
                  }
                }
              },
              "range": [
                3471,
                3479
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 76
                },
                "start": {
                  "column": 24,
                  "line": 76
                }
              }
            },
            "optional": false,
            "range": [
              3471,
              3481
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 76
              },
              "start": {
                "column": 24,
                "line": 76
              }
            }
          },
          "range": [
            3453,
            3481
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 76
            },
            "start": {
              "column": 6,
              "line": 76
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3447,
        3482
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
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
            "name": "testStringBold",
            "optional": false,
            "range": [
              3489,
              3503
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 77
              },
              "start": {
                "column": 6,
                "line": 77
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3506,
                  3508
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 77
                  },
                  "start": {
                    "column": 23,
                    "line": 77
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bold",
                "optional": false,
                "range": [
                  3509,
                  3513
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 77
                  },
                  "start": {
                    "column": 26,
                    "line": 77
                  }
                }
              },
              "range": [
                3506,
                3513
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 77
                },
                "start": {
                  "column": 23,
                  "line": 77
                }
              }
            },
            "optional": false,
            "range": [
              3506,
              3515
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 77
              },
              "start": {
                "column": 23,
                "line": 77
              }
            }
          },
          "range": [
            3489,
            3515
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 77
            },
            "start": {
              "column": 6,
              "line": 77
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3483,
        3516
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
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
            "name": "testStringFixed",
            "optional": false,
            "range": [
              3523,
              3538
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 78
              },
              "start": {
                "column": 6,
                "line": 78
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3541,
                  3543
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 78
                  },
                  "start": {
                    "column": 24,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fixed",
                "optional": false,
                "range": [
                  3544,
                  3549
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 78
                  },
                  "start": {
                    "column": 27,
                    "line": 78
                  }
                }
              },
              "range": [
                3541,
                3549
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 78
                },
                "start": {
                  "column": 24,
                  "line": 78
                }
              }
            },
            "optional": false,
            "range": [
              3541,
              3551
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 78
              },
              "start": {
                "column": 24,
                "line": 78
              }
            }
          },
          "range": [
            3523,
            3551
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 78
            },
            "start": {
              "column": 6,
              "line": 78
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3517,
        3552
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
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
            "name": "testStringFontColor",
            "optional": false,
            "range": [
              3559,
              3578
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 79
              },
              "start": {
                "column": 6,
                "line": 79
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"blue\"",
                "value": "blue",
                "range": [
                  3594,
                  3600
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 79
                  },
                  "start": {
                    "column": 41,
                    "line": 79
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3581,
                  3583
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 79
                  },
                  "start": {
                    "column": 28,
                    "line": 79
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fontcolor",
                "optional": false,
                "range": [
                  3584,
                  3593
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 79
                  },
                  "start": {
                    "column": 31,
                    "line": 79
                  }
                }
              },
              "range": [
                3581,
                3593
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 79
                },
                "start": {
                  "column": 28,
                  "line": 79
                }
              }
            },
            "optional": false,
            "range": [
              3581,
              3601
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 79
              },
              "start": {
                "column": 28,
                "line": 79
              }
            }
          },
          "range": [
            3559,
            3601
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 79
            },
            "start": {
              "column": 6,
              "line": 79
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3553,
        3602
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
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
            "name": "testStringFontSize",
            "optional": false,
            "range": [
              3609,
              3627
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 80
              },
              "start": {
                "column": 6,
                "line": 80
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  3642,
                  3643
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 80
                  },
                  "start": {
                    "column": 39,
                    "line": 80
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3630,
                  3632
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 80
                  },
                  "start": {
                    "column": 27,
                    "line": 80
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fontsize",
                "optional": false,
                "range": [
                  3633,
                  3641
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 80
                  },
                  "start": {
                    "column": 30,
                    "line": 80
                  }
                }
              },
              "range": [
                3630,
                3641
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 80
                },
                "start": {
                  "column": 27,
                  "line": 80
                }
              }
            },
            "optional": false,
            "range": [
              3630,
              3644
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 80
              },
              "start": {
                "column": 27,
                "line": 80
              }
            }
          },
          "range": [
            3609,
            3644
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 80
            },
            "start": {
              "column": 6,
              "line": 80
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3603,
        3645
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
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
            "name": "testStringItalics",
            "optional": false,
            "range": [
              3652,
              3669
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 81
              },
              "start": {
                "column": 6,
                "line": 81
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3672,
                  3674
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 81
                  },
                  "start": {
                    "column": 26,
                    "line": 81
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "italics",
                "optional": false,
                "range": [
                  3675,
                  3682
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 81
                  },
                  "start": {
                    "column": 29,
                    "line": 81
                  }
                }
              },
              "range": [
                3672,
                3682
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 81
                },
                "start": {
                  "column": 26,
                  "line": 81
                }
              }
            },
            "optional": false,
            "range": [
              3672,
              3684
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 81
              },
              "start": {
                "column": 26,
                "line": 81
              }
            }
          },
          "range": [
            3652,
            3684
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 81
            },
            "start": {
              "column": 6,
              "line": 81
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3646,
        3685
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
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
            "name": "testStringLink",
            "optional": false,
            "range": [
              3692,
              3706
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 82
              },
              "start": {
                "column": 6,
                "line": 82
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3717,
                  3719
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 82
                  },
                  "start": {
                    "column": 31,
                    "line": 82
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3709,
                  3711
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 82
                  },
                  "start": {
                    "column": 23,
                    "line": 82
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "link",
                "optional": false,
                "range": [
                  3712,
                  3716
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 82
                  },
                  "start": {
                    "column": 26,
                    "line": 82
                  }
                }
              },
              "range": [
                3709,
                3716
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 82
                },
                "start": {
                  "column": 23,
                  "line": 82
                }
              }
            },
            "optional": false,
            "range": [
              3709,
              3720
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 82
              },
              "start": {
                "column": 23,
                "line": 82
              }
            }
          },
          "range": [
            3692,
            3720
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 82
            },
            "start": {
              "column": 6,
              "line": 82
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3686,
        3721
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
            "name": "testStringSmall",
            "optional": false,
            "range": [
              3728,
              3743
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 83
              },
              "start": {
                "column": 6,
                "line": 83
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3746,
                  3748
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 83
                  },
                  "start": {
                    "column": 24,
                    "line": 83
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "small",
                "optional": false,
                "range": [
                  3749,
                  3754
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 83
                  },
                  "start": {
                    "column": 27,
                    "line": 83
                  }
                }
              },
              "range": [
                3746,
                3754
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 83
                },
                "start": {
                  "column": 24,
                  "line": 83
                }
              }
            },
            "optional": false,
            "range": [
              3746,
              3756
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 83
              },
              "start": {
                "column": 24,
                "line": 83
              }
            }
          },
          "range": [
            3728,
            3756
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 83
            },
            "start": {
              "column": 6,
              "line": 83
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3722,
        3757
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
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
            "name": "testStringStrike",
            "optional": false,
            "range": [
              3764,
              3780
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 84
              },
              "start": {
                "column": 6,
                "line": 84
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3783,
                  3785
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 84
                  },
                  "start": {
                    "column": 25,
                    "line": 84
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "strike",
                "optional": false,
                "range": [
                  3786,
                  3792
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 84
                  },
                  "start": {
                    "column": 28,
                    "line": 84
                  }
                }
              },
              "range": [
                3783,
                3792
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 84
                },
                "start": {
                  "column": 25,
                  "line": 84
                }
              }
            },
            "optional": false,
            "range": [
              3783,
              3794
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 84
              },
              "start": {
                "column": 25,
                "line": 84
              }
            }
          },
          "range": [
            3764,
            3794
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 84
            },
            "start": {
              "column": 6,
              "line": 84
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3758,
        3795
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
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
            "name": "testStringSub",
            "optional": false,
            "range": [
              3802,
              3815
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 85
              },
              "start": {
                "column": 6,
                "line": 85
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3818,
                  3820
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 85
                  },
                  "start": {
                    "column": 22,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sub",
                "optional": false,
                "range": [
                  3821,
                  3824
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 85
                  },
                  "start": {
                    "column": 25,
                    "line": 85
                  }
                }
              },
              "range": [
                3818,
                3824
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 85
                },
                "start": {
                  "column": 22,
                  "line": 85
                }
              }
            },
            "optional": false,
            "range": [
              3818,
              3826
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 85
              },
              "start": {
                "column": 22,
                "line": 85
              }
            }
          },
          "range": [
            3802,
            3826
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 85
            },
            "start": {
              "column": 6,
              "line": 85
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3796,
        3827
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
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
            "name": "testStringSup",
            "optional": false,
            "range": [
              3834,
              3847
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 86
              },
              "start": {
                "column": 6,
                "line": 86
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  3850,
                  3852
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 86
                  },
                  "start": {
                    "column": 22,
                    "line": 86
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sup",
                "optional": false,
                "range": [
                  3853,
                  3856
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 86
                  },
                  "start": {
                    "column": 25,
                    "line": 86
                  }
                }
              },
              "range": [
                3850,
                3856
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 86
                },
                "start": {
                  "column": 22,
                  "line": 86
                }
              }
            },
            "optional": false,
            "range": [
              3850,
              3858
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 86
              },
              "start": {
                "column": 22,
                "line": 86
              }
            }
          },
          "range": [
            3834,
            3858
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 86
            },
            "start": {
              "column": 6,
              "line": 86
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3828,
        3859
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
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
            "name": "testStringConstructorFromCodePoint",
            "optional": false,
            "range": [
              3866,
              3900
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 87
              },
              "start": {
                "column": 6,
                "line": 87
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "range": [
                  3903,
                  3909
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 87
                  },
                  "start": {
                    "column": 43,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromCodePoint",
                "optional": false,
                "range": [
                  3910,
                  3923
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 87
                  },
                  "start": {
                    "column": 50,
                    "line": 87
                  }
                }
              },
              "range": [
                3903,
                3923
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 87
                },
                "start": {
                  "column": 43,
                  "line": 87
                }
              }
            },
            "optional": false,
            "range": [
              3903,
              3925
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 87
              },
              "start": {
                "column": 43,
                "line": 87
              }
            }
          },
          "range": [
            3866,
            3925
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 87
            },
            "start": {
              "column": 6,
              "line": 87
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3860,
        3926
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
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
            "name": "testStringConstructorRaw",
            "optional": false,
            "range": [
              3933,
              3957
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 88
              },
              "start": {
                "column": 6,
                "line": 88
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "quasi": {
              "type": "TemplateLiteral",
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    3970,
                    3972
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 88
                    },
                    "start": {
                      "column": 43,
                      "line": 88
                    }
                  }
                }
              ],
              "range": [
                3970,
                3972
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 88
                },
                "start": {
                  "column": 43,
                  "line": 88
                }
              }
            },
            "tag": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "range": [
                  3960,
                  3966
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 88
                  },
                  "start": {
                    "column": 33,
                    "line": 88
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "raw",
                "optional": false,
                "range": [
                  3967,
                  3970
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 88
                  },
                  "start": {
                    "column": 40,
                    "line": 88
                  }
                }
              },
              "range": [
                3960,
                3970
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 88
                },
                "start": {
                  "column": 33,
                  "line": 88
                }
              }
            },
            "range": [
              3960,
              3972
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 88
              },
              "start": {
                "column": 33,
                "line": 88
              }
            }
          },
          "range": [
            3933,
            3972
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 88
            },
            "start": {
              "column": 6,
              "line": 88
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3927,
        3973
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
            "name": "testRegExpFlags",
            "optional": false,
            "range": [
              3980,
              3995
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 89
              },
              "start": {
                "column": 6,
                "line": 89
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "/abc/g",
              "regex": {
                "flags": "g",
                "pattern": "abc"
              },
              "value": null,
              "range": [
                3998,
                4004
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 89
                },
                "start": {
                  "column": 24,
                  "line": 89
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "flags",
              "optional": false,
              "range": [
                4005,
                4010
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 89
                },
                "start": {
                  "column": 31,
                  "line": 89
                }
              }
            },
            "range": [
              3998,
              4010
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 89
              },
              "start": {
                "column": 24,
                "line": 89
              }
            }
          },
          "range": [
            3980,
            4010
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 89
            },
            "start": {
              "column": 6,
              "line": 89
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3974,
        4011
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
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
            "name": "testRegExpSticky",
            "optional": false,
            "range": [
              4018,
              4034
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 90
              },
              "start": {
                "column": 6,
                "line": 90
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "/abc/g",
              "regex": {
                "flags": "g",
                "pattern": "abc"
              },
              "value": null,
              "range": [
                4037,
                4043
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 90
                },
                "start": {
                  "column": 25,
                  "line": 90
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "sticky",
              "optional": false,
              "range": [
                4044,
                4050
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 90
                },
                "start": {
                  "column": 32,
                  "line": 90
                }
              }
            },
            "range": [
              4037,
              4050
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 90
              },
              "start": {
                "column": 25,
                "line": 90
              }
            }
          },
          "range": [
            4018,
            4050
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 90
            },
            "start": {
              "column": 6,
              "line": 90
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4012,
        4051
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
            "name": "testRegExpUnicode",
            "optional": false,
            "range": [
              4058,
              4075
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 91
              },
              "start": {
                "column": 6,
                "line": 91
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "/abc/g",
              "regex": {
                "flags": "g",
                "pattern": "abc"
              },
              "value": null,
              "range": [
                4078,
                4084
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 91
                },
                "start": {
                  "column": 26,
                  "line": 91
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "unicode",
              "optional": false,
              "range": [
                4085,
                4092
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 91
                },
                "start": {
                  "column": 33,
                  "line": 91
                }
              }
            },
            "range": [
              4078,
              4092
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 91
              },
              "start": {
                "column": 26,
                "line": 91
              }
            }
          },
          "range": [
            4058,
            4092
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 91
            },
            "start": {
              "column": 6,
              "line": 91
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4052,
        4093
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 92
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
