__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 22,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 313,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 118,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 117,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 117,
                  "name": "num",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 123,
            "end": 141,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 127,
                "end": 140,
                "id": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 140,
                  "name": "bool",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 133,
                      "end": 140
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 146,
            "end": 162,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 150,
                "end": 161,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 161,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 155,
                      "end": 161
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 168,
            "end": 187,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 172,
                "end": 186,
                "id": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 186,
                  "name": "a_and_b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 181,
                      "end": 186,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 181,
                          "end": 182,
                          "typeName": {
                            "type": "Identifier",
                            "start": 181,
                            "end": 182,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 185,
                          "end": 186,
                          "typeName": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 186,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 192,
            "end": 227,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 196,
                "end": 226,
                "id": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 226,
                  "name": "num_and_bool",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 210,
                      "end": 226,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 210,
                          "end": 216
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 219,
                          "end": 226
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 247,
            "expression": {
              "type": "AssignmentExpression",
              "start": 233,
              "end": 246,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 233,
                "end": 236,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 239,
                "end": 246,
                "name": "a_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 252,
            "end": 267,
            "expression": {
              "type": "AssignmentExpression",
              "start": 252,
              "end": 266,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "name": "bool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 259,
                "end": 266,
                "name": "a_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 272,
            "end": 286,
            "expression": {
              "type": "AssignmentExpression",
              "start": 272,
              "end": 285,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 272,
                "end": 275,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 278,
                "end": 285,
                "name": "a_and_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 292,
            "end": 311,
            "expression": {
              "type": "AssignmentExpression",
              "start": 292,
              "end": 310,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 292,
                "end": 295,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 298,
                "end": 310,
                "name": "num_and_bool",
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
        "start": 58,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
            "start": 62,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 95,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 91,
          "end": 95
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
