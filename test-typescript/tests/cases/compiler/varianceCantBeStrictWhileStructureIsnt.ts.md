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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "cb",
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
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "cb",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 190,
            "name": "a",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 214,
            "name": "b",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 244,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 244,
            "name": "a2",
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
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 269,
            "name": "b2",
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
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 292,
          "end": 294,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 301,
          "end": 303,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 310,
          "end": 312,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 318,
          "end": 320,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 336,
          "end": 337,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
