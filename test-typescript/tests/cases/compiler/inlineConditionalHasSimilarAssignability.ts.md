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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "name": "MyExtract",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 23,
        "end": 46,
        "checkType": {
          "type": "TSTypeReference",
          "start": 23,
          "end": 24,
          "typeName": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 37,
          "end": 38,
          "typeName": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 41,
          "end": 46
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 68,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 68,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 67,
              "end": 68,
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 100,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 100,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 100,
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 90,
                        "name": "Extract",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 99,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 103,
                  "end": 111,
                  "expression": {
                    "type": "Literal",
                    "start": 103,
                    "end": 104,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 108,
                    "end": 111
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 121,
            "expression": {
              "type": "AssignmentExpression",
              "start": 115,
              "end": 120,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 173,
                  "name": "c",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 156,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 167,
                        "end": 172
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 176,
                  "end": 184,
                  "expression": {
                    "type": "Literal",
                    "start": 176,
                    "end": 177,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 181,
                    "end": 184
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 188,
            "end": 194,
            "expression": {
              "type": "AssignmentExpression",
              "start": 188,
              "end": 193,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 226,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 207,
                      "end": 226,
                      "typeName": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 216,
                        "name": "MyExtract",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 224,
                              "end": 225,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 229,
                  "end": 237,
                  "expression": {
                    "type": "Literal",
                    "start": 229,
                    "end": 230,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 234,
                    "end": 237
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 241,
            "end": 247,
            "expression": {
              "type": "AssignmentExpression",
              "start": 241,
              "end": 246,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 257,
            "end": 307,
            "id": {
              "type": "Identifier",
              "start": 262,
              "end": 272,
              "name": "CustomType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 301,
                "end": 306
              }
            },
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 329,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 319,
                      "end": 329,
                      "typeName": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 329,
                        "name": "CustomType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 332,
                  "end": 340,
                  "expression": {
                    "type": "Literal",
                    "start": 332,
                    "end": 333,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 337,
                    "end": 340
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 344,
            "end": 350,
            "expression": {
              "type": "AssignmentExpression",
              "start": 344,
              "end": 349,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
