__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 528,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 412,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 412,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 32,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 32,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 19,
                  "end": 28,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 47,
              "name": "bar"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 61,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 61,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 57,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 51,
                      "end": 57
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 114,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 73,
              "end": 77,
              "name": "baz"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 114,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 114,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 99,
                    "end": 108,
                    "argument": {
                      "type": "Literal",
                      "start": 106,
                      "end": 107,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 87,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 119,
              "end": 125,
              "name": "_quux"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 195,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 143,
              "end": 148,
              "name": "quux"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 195,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 195,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 170,
                    "end": 189,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 177,
                      "end": 188,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 177,
                        "end": 181
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 182,
                        "end": 188,
                        "name": "_quux"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 159,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 200,
            "end": 258,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 204,
              "end": 209,
              "name": "quux"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 258,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 224,
                "end": 258,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 252,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 251,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 245,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 239,
                          "end": 245,
                          "name": "_quux"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 251,
                        "decorators": [],
                        "name": "val",
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 222,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 216,
                      "end": 222
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 263,
            "end": 410,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 274,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 410,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 278,
                "end": 410,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 288,
                    "end": 302,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 288,
                      "end": 301,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 298,
                          "end": 300,
                          "raw": "30",
                          "value": 30,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 288,
                        "end": 297,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 288,
                          "end": 292
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 293,
                          "end": 297,
                          "name": "foo"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 325,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 311,
                      "end": 324,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 321,
                          "end": 323,
                          "raw": "30",
                          "value": 30,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 311,
                        "end": 320,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 311,
                          "end": 315
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 316,
                          "end": 320,
                          "name": "bar"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 348,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 334,
                      "end": 347,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 344,
                          "end": 346,
                          "raw": "30",
                          "value": 30,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 334,
                        "end": 343,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 334,
                          "end": 338
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 339,
                          "end": 343,
                          "name": "baz"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 357,
                    "end": 385,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 357,
                      "end": 384,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 357,
                        "end": 367,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 357,
                          "end": 361
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 362,
                          "end": 367,
                          "name": "quux"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 370,
                        "end": 384,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 370,
                          "end": 380,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 370,
                            "end": 374
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 375,
                            "end": 380,
                            "name": "quux"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 383,
                          "end": 384,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 394,
                    "end": 407,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 394,
                      "end": 406,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 394,
                        "end": 404,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 394,
                          "end": 398
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 399,
                          "end": 404,
                          "name": "quux"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 414,
      "end": 528,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 432,
        "end": 528,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 438,
            "end": 456,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 438,
              "end": 442,
              "name": "foo"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 442,
              "end": 456,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 454,
                "end": 456,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 443,
                  "end": 452,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 444,
                    "end": 452,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 446,
                      "end": 452
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 461,
            "end": 526,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 472,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 526,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 476,
                "end": 526,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 486,
                    "end": 494,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 486,
                      "end": 493,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 486,
                        "end": 491
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 503,
                    "end": 520,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 503,
                      "end": 519,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 513,
                          "end": 518,
                          "raw": "\"str\"",
                          "value": "str",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 503,
                        "end": 512,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 503,
                          "end": 507
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 508,
                          "end": 512,
                          "name": "foo"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 421,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 430,
        "end": 431,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
