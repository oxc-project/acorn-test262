__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 352,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "MyExtract",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 23,
        "end": 46,
        "checkType": {
          "type": "TSTypeReference",
          "start": 23,
          "end": 24,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 41,
          "end": 46
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 37,
          "end": 38,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 352,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 352,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 112,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 80,
                "end": 111,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 100,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 100,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 100,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 90,
                        "end": 100,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 91,
                            "end": 96,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 91,
                              "end": 94
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 98,
                            "end": 99,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 99,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 90,
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 103,
                  "end": 111,
                  "expression": {
                    "type": "Literal",
                    "start": 103,
                    "end": 104,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 108,
                    "end": 111
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 121,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 115,
              "end": 120,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 185,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 184,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 173,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 138,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 141,
                      "end": 172,
                      "checkType": {
                        "type": "TSArrayType",
                        "start": 141,
                        "end": 146,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 141,
                          "end": 144
                        }
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "start": 155,
                        "end": 156,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 156,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 167,
                        "end": 172
                      },
                      "trueType": {
                        "type": "TSArrayType",
                        "start": 159,
                        "end": 164,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 159,
                          "end": 162
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 176,
                  "end": 184,
                  "expression": {
                    "type": "Literal",
                    "start": 176,
                    "end": 177,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 181,
                    "end": 184
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 188,
            "end": 194,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 188,
              "end": 193,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 198,
            "end": 238,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 237,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 226,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 207,
                      "end": 226,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 216,
                        "end": 226,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 217,
                            "end": 222,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 217,
                              "end": 220
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 224,
                            "end": 225,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 224,
                              "end": 225,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 216,
                        "decorators": [],
                        "name": "MyExtract",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 229,
                  "end": 237,
                  "expression": {
                    "type": "Literal",
                    "start": 229,
                    "end": 230,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 234,
                    "end": 237
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 241,
            "end": 247,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 241,
              "end": 246,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 257,
            "end": 307,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 262,
              "end": 272,
              "decorators": [],
              "name": "CustomType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 275,
              "end": 306,
              "checkType": {
                "type": "TSArrayType",
                "start": 275,
                "end": 280,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 275,
                  "end": 278
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 289,
                "end": 290,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 301,
                "end": 306
              },
              "trueType": {
                "type": "TSArrayType",
                "start": 293,
                "end": 298,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 293,
                  "end": 296
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 310,
            "end": 341,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 316,
                "end": 340,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 329,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 319,
                      "end": 329,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 329,
                        "decorators": [],
                        "name": "CustomType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 332,
                  "end": 340,
                  "expression": {
                    "type": "Literal",
                    "start": 332,
                    "end": 333,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 337,
                    "end": 340
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 344,
            "end": 350,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 344,
              "end": 349,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 68,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 68,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 67,
              "end": 68,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
