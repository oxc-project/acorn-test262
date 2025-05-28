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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 95,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 91,
          "end": 95
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 313,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 118,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 117,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 117,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 123,
            "end": 141,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 127,
                "end": 140,
                "id": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 140,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 133,
                      "end": 140
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 146,
            "end": 162,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 150,
                "end": 161,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 161,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 155,
                      "end": 161
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 168,
            "end": 187,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 172,
                "end": 186,
                "id": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 186,
                  "decorators": [],
                  "name": "a_and_b",
                  "optional": false,
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
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 192,
            "end": 227,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 196,
                "end": 226,
                "id": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 226,
                  "decorators": [],
                  "name": "num_and_bool",
                  "optional": false,
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
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 239,
                "end": 246,
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 259,
                "end": 266,
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 278,
                "end": 285,
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 298,
                "end": 310,
                "decorators": [],
                "name": "num_and_bool",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
