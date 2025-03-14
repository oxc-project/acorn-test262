__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    369
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          24
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                16,
                22
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  19,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
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
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
        24
      ],
      "loc": {
        "end": {
          "column": 24,
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
          53,
          66
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                55,
                58
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 30,
                  "line": 2
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
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
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
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 33,
                  "line": 2
                }
              }
            },
            "range": [
              55,
              64
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 30,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 2
          },
          "start": {
            "column": 28,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "range": [
          31,
          39
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          48,
          52
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "range": [
        25,
        66
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          76,
          77
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            },
            "range": [
              85,
              93
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'span'",
                "value": "span",
                "range": [
                  87,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "range": [
                87,
                93
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            }
          },
          "range": [
            78,
            93
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 3
            },
            "start": {
              "column": 11,
              "line": 3
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              98,
              102
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          },
          "decorators": [],
          "optional": false,
          "range": [
            95,
            102
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 3
          },
          "start": {
            "column": 36,
            "line": 3
          }
        },
        "range": [
          103,
          113
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived1",
            "optional": false,
            "range": [
              105,
              113
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 3
              },
              "start": {
                "column": 38,
                "line": 3
              }
            }
          },
          "range": [
            105,
            113
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 3
            },
            "start": {
              "column": 38,
              "line": 3
            }
          }
        }
      },
      "range": [
        67,
        114
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          135,
          136
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            },
            "range": [
              144,
              152
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                146,
                152
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            }
          },
          "range": [
            137,
            152
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 4
            },
            "start": {
              "column": 11,
              "line": 4
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              157,
              161
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 31,
                "line": 4
              }
            }
          },
          "decorators": [],
          "optional": false,
          "range": [
            154,
            161
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 4
            },
            "start": {
              "column": 28,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 4
          },
          "start": {
            "column": 36,
            "line": 4
          }
        },
        "range": [
          162,
          168
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              164,
              168
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 4
              },
              "start": {
                "column": 38,
                "line": 4
              }
            }
          },
          "range": [
            164,
            168
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 4
            },
            "start": {
              "column": 38,
              "line": 4
            }
          }
        }
      },
      "range": [
        126,
        169
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
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
              "raw": "null",
              "value": null,
              "range": [
                214,
                218
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              207,
              219
            ],
            "loc": {
              "end": {
                "column": 16,
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
          201,
          221
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 31,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          179,
          180
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            },
            "range": [
              188,
              193
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                190,
                193
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            }
          },
          "range": [
            181,
            193
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 11,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
          }
        },
        "range": [
          194,
          200
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              196,
              200
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          },
          "range": [
            196,
            200
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 5
            }
          }
        }
      },
      "range": [
        170,
        221
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          231,
          232
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 18,
                "line": 8
              }
            },
            "range": [
              240,
              248
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'span'",
                "value": "span",
                "range": [
                  242,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "range": [
                242,
                248
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            }
          },
          "range": [
            233,
            248
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 8
            },
            "start": {
              "column": 11,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "range": [
            250,
            253
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 8
            },
            "start": {
              "column": 28,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 8
          },
          "start": {
            "column": 32,
            "line": 8
          }
        },
        "range": [
          254,
          264
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived1",
            "optional": false,
            "range": [
              256,
              264
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 8
              },
              "start": {
                "column": 34,
                "line": 8
              }
            }
          },
          "range": [
            256,
            264
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 8
            },
            "start": {
              "column": 34,
              "line": 8
            }
          }
        }
      },
      "range": [
        222,
        265
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          287,
          288
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 18,
                "line": 9
              }
            },
            "range": [
              296,
              304
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                298,
                304
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            }
          },
          "range": [
            289,
            304
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "range": [
            306,
            309
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 28,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 9
          },
          "start": {
            "column": 32,
            "line": 9
          }
        },
        "range": [
          310,
          316
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              312,
              316
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 9
              },
              "start": {
                "column": 34,
                "line": 9
              }
            }
          },
          "range": [
            312,
            316
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 34,
              "line": 9
            }
          }
        }
      },
      "range": [
        278,
        317
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
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
              "raw": "null",
              "value": null,
              "range": [
                362,
                366
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              355,
              367
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          349,
          369
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 31,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          327,
          328
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 18,
                "line": 10
              }
            },
            "range": [
              336,
              341
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                338,
                341
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            }
          },
          "range": [
            329,
            341
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 10
            },
            "start": {
              "column": 11,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 24,
            "line": 10
          }
        },
        "range": [
          342,
          348
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              344,
              348
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 26,
                "line": 10
              }
            }
          },
          "range": [
            344,
            348
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 10
            },
            "start": {
              "column": 26,
              "line": 10
            }
          }
        }
      },
      "range": [
        318,
        369
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
