__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "3",
            "value": 3,
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
      "start": 11,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 27,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 19,
                "end": 27,
                "exprName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 29,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 43,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 46,
            "end": 48,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 104,
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 102,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
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
              "start": 98,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 105,
      "end": 120,
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 120,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 143,
            "decorators": [],
            "name": "numberJ",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 135,
                "end": 143,
                "exprName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "J",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 186,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 211,
            "decorators": [],
            "name": "numberI",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 211,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 200,
                  "end": 211,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 201,
                      "end": 210,
                      "exprName": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 210,
                        "decorators": [],
                        "name": "v2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "I",
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
      "start": 214,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 238,
            "decorators": [],
            "name": "fun",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 238,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 223,
                "end": 238,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 226,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 229,
                    "end": 238,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 230,
                      "end": 238,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 231,
                          "end": 237
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 230,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
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
      "start": 240,
      "end": 256,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 240,
        "end": 255,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 240,
          "end": 247,
          "decorators": [],
          "name": "numberI",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 250,
          "end": 255,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 250,
            "end": 253,
            "decorators": [],
            "name": "fun",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
