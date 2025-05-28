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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 412,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 32,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 32,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 32,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 61,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 47,
              "name": "bar"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 61,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 61,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 114,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 73,
              "end": 77,
              "name": "baz"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 114,
              "id": null,
              "generator": true,
              "async": true,
              "declare": false,
              "typeParameters": null,
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
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 134,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 119,
              "end": 125,
              "name": "_quux"
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 195,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 143,
              "end": 148,
              "name": "quux"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 195,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 177,
                        "end": 181
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 182,
                        "end": 188,
                        "name": "_quux"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 200,
            "end": 258,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 204,
              "end": 209,
              "name": "quux"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 258,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 224,
                "end": 258,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 252,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 251,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 245,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 239,
                          "end": 245,
                          "name": "_quux"
                        },
                        "optional": false,
                        "computed": false
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
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 263,
            "end": 410,
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
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 410,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 278,
                "end": 410,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 288,
                    "end": 302,
                    "expression": {
                      "type": "CallExpression",
                      "start": 288,
                      "end": 301,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 288,
                        "end": 297,
                        "object": {
                          "type": "ThisExpression",
                          "start": 288,
                          "end": 292
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 293,
                          "end": 297,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 298,
                          "end": 300,
                          "value": 30,
                          "raw": "30"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 325,
                    "expression": {
                      "type": "CallExpression",
                      "start": 311,
                      "end": 324,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 311,
                        "end": 320,
                        "object": {
                          "type": "ThisExpression",
                          "start": 311,
                          "end": 315
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 316,
                          "end": 320,
                          "name": "bar"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 321,
                          "end": 323,
                          "value": 30,
                          "raw": "30"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 348,
                    "expression": {
                      "type": "CallExpression",
                      "start": 334,
                      "end": 347,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 334,
                        "end": 343,
                        "object": {
                          "type": "ThisExpression",
                          "start": 334,
                          "end": 338
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 339,
                          "end": 343,
                          "name": "baz"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 344,
                          "end": 346,
                          "value": 30,
                          "raw": "30"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 357,
                    "end": 385,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 357,
                      "end": 384,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 357,
                        "end": 367,
                        "object": {
                          "type": "ThisExpression",
                          "start": 357,
                          "end": 361
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 362,
                          "end": 367,
                          "name": "quux"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 370,
                        "end": 384,
                        "left": {
                          "type": "MemberExpression",
                          "start": 370,
                          "end": 380,
                          "object": {
                            "type": "ThisExpression",
                            "start": 370,
                            "end": 374
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 375,
                            "end": 380,
                            "name": "quux"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 383,
                          "end": 384,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 394,
                    "end": 407,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 394,
                      "end": 406,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 394,
                        "end": 404,
                        "object": {
                          "type": "ThisExpression",
                          "start": 394,
                          "end": 398
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 399,
                          "end": 404,
                          "name": "quux"
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 414,
      "end": 528,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 432,
        "end": 528,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 438,
            "end": 456,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 438,
              "end": 442,
              "name": "foo"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 442,
              "end": 456,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 454,
                "end": 456,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 461,
            "end": 526,
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
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 526,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 476,
                "end": 526,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 486,
                    "end": 494,
                    "expression": {
                      "type": "CallExpression",
                      "start": 486,
                      "end": 493,
                      "callee": {
                        "type": "Super",
                        "start": 486,
                        "end": 491
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 503,
                    "end": 520,
                    "expression": {
                      "type": "CallExpression",
                      "start": 503,
                      "end": 519,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 503,
                        "end": 512,
                        "object": {
                          "type": "ThisExpression",
                          "start": 503,
                          "end": 507
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 508,
                          "end": 512,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 513,
                          "end": 518,
                          "value": "str",
                          "raw": "\"str\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
