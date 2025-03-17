__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
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
        "start": 16,
        "end": 19,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 40,
      "expression": {
        "type": "CallExpression",
        "start": 20,
        "end": 39,
        "callee": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 50,
            "end": 61,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 59,
              "end": 61,
              "body": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 53,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 81,
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 97,
        "body": []
      },
      "decorators": [],
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 106,
            "end": 124,
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 117,
                  "end": 121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 121,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 141,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 140,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
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
        "start": 142,
        "end": 144,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 168,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 168,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
