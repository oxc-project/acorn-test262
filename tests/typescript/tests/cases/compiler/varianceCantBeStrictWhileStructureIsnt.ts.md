__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 338,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 79,
        "end": 111,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 109,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 91,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 108,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 93,
                "end": 108,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 94,
                    "end": 99,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 99,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 101,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 104,
                    "end": 108
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 113,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 126,
        "end": 129,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 128,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 130,
        "end": 162,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 160,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 142,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 159,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 144,
                "end": 159,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 145,
                    "end": 150,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 150,
                        "typeName": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 159,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 155,
                    "end": 159
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 191,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 190,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 182,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 182,
                  "end": 190,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 183,
                      "end": 189
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 215,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 214,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 214,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 210,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 210,
                  "end": 214,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 211,
                      "end": 213,
                      "literal": {
                        "type": "Literal",
                        "start": 211,
                        "end": 213,
                        "value": "",
                        "raw": "\"\""
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 245,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 244,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 244,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 233,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 236,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 236,
                  "end": 244,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 237,
                      "end": 243
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 270,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 269,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 265,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 265,
                  "end": 269,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 266,
                      "end": 268,
                      "literal": {
                        "type": "Literal",
                        "start": 266,
                        "end": 268,
                        "value": "",
                        "raw": "\"\""
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 278,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 277,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 272,
          "end": 273,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 285,
      "expression": {
        "type": "AssignmentExpression",
        "start": 279,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 279,
          "end": 280,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 295,
      "expression": {
        "type": "AssignmentExpression",
        "start": 287,
        "end": 294,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 287,
          "end": 289,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 292,
          "end": 294,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 304,
      "expression": {
        "type": "AssignmentExpression",
        "start": 296,
        "end": 303,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 296,
          "end": 298,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 301,
          "end": 303,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 313,
      "expression": {
        "type": "AssignmentExpression",
        "start": 306,
        "end": 312,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 306,
          "end": 307,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 310,
          "end": 312,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 314,
      "end": 321,
      "expression": {
        "type": "AssignmentExpression",
        "start": 314,
        "end": 320,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 318,
          "end": 320,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 330,
      "expression": {
        "type": "AssignmentExpression",
        "start": 323,
        "end": 329,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 325,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 338,
      "expression": {
        "type": "AssignmentExpression",
        "start": 331,
        "end": 337,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 331,
          "end": 333,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 336,
          "end": 337,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
