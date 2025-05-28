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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
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
            "value": 3,
            "raw": "3"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 28,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 27,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 48,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 104,
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
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
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
        "start": 95,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 102,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 105,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 120,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 144,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 143,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 211,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
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
      "start": 214,
      "end": 239,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 238,
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
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 226,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 229,
                    "end": 238,
                    "typeName": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 230,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    }
                  }
                }
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
      "start": 240,
      "end": 256,
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
          "callee": {
            "type": "Identifier",
            "start": 250,
            "end": 253,
            "decorators": [],
            "name": "fun",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
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
