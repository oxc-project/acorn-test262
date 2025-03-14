__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    206
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          49,
          66
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                56,
                63
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    58,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  58,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              55,
              64
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "range": [
          44,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        34,
        66
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          116,
          173
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                122,
                128
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                128,
                171
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "children": [
                        {
                          "type": "JSXText",
                          "range": [
                            153,
                            158
                          ],
                          "raw": "Hello",
                          "value": "Hello",
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
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            160,
                            163
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 8
                            },
                            "start": {
                              "column": 27,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          158,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 8
                          },
                          "start": {
                            "column": 25,
                            "line": 8
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            149,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          148,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        148,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      141,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  131,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
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
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              122,
              171
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
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
            "line": 10
          },
          "start": {
            "column": 49,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "range": [
          73,
          81
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            90,
            95
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 6
            },
            "start": {
              "column": 23,
              "line": 6
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            96,
            105
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 29,
              "line": 6
            }
          }
        },
        "range": [
          90,
          105
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 6
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          105,
          115
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "range": [
                106,
                110
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 39,
                  "line": 6
                }
              }
            },
            "range": [
              106,
              110
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 6
              },
              "start": {
                "column": 39,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              112,
              114
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 6
              },
              "start": {
                "column": 45,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 6
          },
          "start": {
            "column": 38,
            "line": 6
          }
        }
      },
      "range": [
        67,
        173
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "p",
            "optional": false,
            "range": [
              188,
              189
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                192,
                205
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      202,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  193,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              192,
              205
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            188,
            205
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        184,
        206
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 22,
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
