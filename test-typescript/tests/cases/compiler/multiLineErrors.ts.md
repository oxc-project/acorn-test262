__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "32",
            "value": 32,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 13,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 102,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 84,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 83,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 82,
                  "end": 83,
                  "raw": "4",
                  "value": 4,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 100,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 93,
                "end": 99,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 97,
                  "end": 99,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 30,
        "decorators": [],
        "name": "noReturn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 32,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 34,
          "end": 67,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 40,
              "end": 50,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 55,
              "end": 65,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 143,
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 143,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 123,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 126,
                "end": 140,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 128,
                    "end": 138,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 116,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 144,
      "end": 183,
      "body": {
        "type": "TSInterfaceBody",
        "start": 157,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 163,
            "end": 181,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 166,
                "end": 180,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 168,
                    "end": 178,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 177,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 171,
                        "end": 177
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 195,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 195,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 195,
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 197,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 207,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 207,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 205,
                "end": 207,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 207,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 209,
      "end": 217,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 209,
        "end": 216,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 209,
          "end": 211,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 214,
          "end": 216,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
