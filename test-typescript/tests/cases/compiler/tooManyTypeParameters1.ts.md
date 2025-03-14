tooManyTypeParameters1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 19,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 19,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 40,
      "expression": {
        "type": "CallExpression",
        "start": 20,
        "end": 39,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 21,
          "end": 37,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 22,
              "end": 28
            },
            {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 50,
            "end": 61,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 59,
              "end": 61,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 53,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 81,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 64,
          "end": 79,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            },
            {
              "type": "TSNumberKeyword",
              "start": 72,
              "end": 78
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 97,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 106,
            "end": 124,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 111,
              "end": 122,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 112,
                  "end": 116,
                  "typeName": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 116,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 117,
                  "end": 121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 121,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 144,
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 144,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 141,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 140,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 168,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 168,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 153,
                  "end": 168,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 154,
                      "end": 160
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 161,
                      "end": 167
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
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
    }
  ],
  "sourceType": "script"
}
```
