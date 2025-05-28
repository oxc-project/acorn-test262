__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7,
                "end": 13,
                "typeName": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 13,
                  "decorators": [],
                  "name": "Object",
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
      "start": 15,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 28,
                  "decorators": [],
                  "name": "RegExp",
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
      "type": "ExpressionStatement",
      "start": 30,
      "end": 36,
      "expression": {
        "type": "AssignmentExpression",
        "start": 30,
        "end": 35,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 80,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 51,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 51,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 54,
            "end": 79,
            "callee": {
              "type": "MemberExpression",
              "start": 54,
              "end": 67,
              "object": {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 67,
              "end": 75,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 68,
                  "end": 74,
                  "typeName": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 74,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 76,
                "end": 78,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 122,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 94,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 94,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 97,
            "end": 121,
            "callee": {
              "type": "MemberExpression",
              "start": 97,
              "end": 110,
              "object": {
                "type": "Identifier",
                "start": 97,
                "end": 103,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 110,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 110,
              "end": 118,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 111,
                  "end": 117,
                  "typeName": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 117,
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 152,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 136,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 136,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 139,
            "end": 151,
            "callee": {
              "type": "Identifier",
              "start": 143,
              "end": 149,
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
