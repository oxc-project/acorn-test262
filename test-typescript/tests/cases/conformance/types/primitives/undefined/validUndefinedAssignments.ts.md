validUndefinedAssignments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 7,
                "end": 23,
                "exprName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 23,
                  "decorators": [],
                  "name": "undefined",
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
      "start": 26,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 39,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
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
      "type": "VariableDeclaration",
      "start": 45,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 59,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 59,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 52,
                "end": 59
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
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
      "type": "VariableDeclaration",
      "start": 65,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 78,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
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
      "type": "VariableDeclaration",
      "start": 84,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 95,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 95,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 91,
                "end": 95
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
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
      "type": "VariableDeclaration",
      "start": 102,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 125,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 109,
                "end": 125,
                "exprName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 125,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
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
      "start": 131,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 131,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 177,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 164,
            "end": 175,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 175,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 169,
                "end": 175
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 186,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
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
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 196,
      "end": 223,
      "body": {
        "type": "TSInterfaceBody",
        "start": 208,
        "end": 223,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 210,
            "end": 221,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 213,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 221,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 215,
                "end": 221
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 232,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "I",
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
      "type": "ExpressionStatement",
      "start": 234,
      "end": 240,
      "expression": {
        "type": "AssignmentExpression",
        "start": 234,
        "end": 239,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 262,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 249,
                "end": 262,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 251,
                    "end": 260,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 252,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 254,
                      "end": 260,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 256,
                        "end": 260
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
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
      "type": "FunctionDeclaration",
      "start": 269,
      "end": 303,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 303,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 301,
            "expression": {
              "type": "AssignmentExpression",
              "start": 295,
              "end": 300,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "x",
                "optional": false
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
        "start": 278,
        "end": 279,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 283,
          "end": 287,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 284,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
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
        "start": 279,
        "end": 282,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 280,
            "end": 281,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
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
