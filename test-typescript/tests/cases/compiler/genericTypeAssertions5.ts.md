genericTypeAssertions5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 445,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 34,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 34,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 80,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 80,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 64,
            "end": 78,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 56,
          "end": 57,
          "expression": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 126,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 126,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 110,
            "end": 124,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 102,
          "end": 103,
          "expression": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 136,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 445,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 445,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 198,
            "end": 208,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 202,
                "end": 207,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 213,
            "end": 219,
            "expression": {
              "type": "AssignmentExpression",
              "start": 213,
              "end": 218,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 213,
                "end": 214,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 262,
            "expression": {
              "type": "AssignmentExpression",
              "start": 256,
              "end": 261,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 299,
            "end": 305,
            "expression": {
              "type": "AssignmentExpression",
              "start": 299,
              "end": 304,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 342,
            "end": 351,
            "expression": {
              "type": "AssignmentExpression",
              "start": 342,
              "end": 350,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 346,
                "end": 350,
                "expression": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 347,
                  "end": 348,
                  "typeName": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 356,
            "end": 365,
            "expression": {
              "type": "AssignmentExpression",
              "start": 356,
              "end": 364,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 360,
                "end": 364,
                "expression": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 361,
                  "end": 362,
                  "typeName": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 402,
            "end": 411,
            "expression": {
              "type": "AssignmentExpression",
              "start": 402,
              "end": 410,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 406,
                "end": 410,
                "expression": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 410,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 408,
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
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
        "start": 168,
        "end": 172,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 186,
          "end": 190,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 187,
            "end": 190,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 189,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 172,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 184,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 184,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
