__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 26,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Observable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "start": 31,
      "end": 116,
      "body": {
        "type": "TSInterfaceBody",
        "start": 85,
        "end": 116,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 92,
            "end": 113,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 97,
                "end": 111,
                "argument": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 106,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 106,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 108,
                    "end": 111,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 108,
                      "end": 109,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 68,
          "end": 83,
          "expression": {
            "type": "Identifier",
            "start": 68,
            "end": 78,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 78,
            "end": 83,
            "params": [
              {
                "type": "TSArrayType",
                "start": 79,
                "end": 82,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 56,
        "decorators": [],
        "name": "ObservableArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 59,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 58,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
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
      "type": "FunctionDeclaration",
      "start": 121,
      "end": 186,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 186,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 173,
            "end": 185,
            "argument": {
              "type": "Literal",
              "start": 180,
              "end": 184,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 145,
        "decorators": [],
        "name": "observableArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 150,
        "end": 170,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 152,
          "end": 170,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 167,
            "end": 170,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 152,
            "end": 167,
            "decorators": [],
            "name": "ObservableArray",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 145,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 147,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
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
      "type": "VariableDeclaration",
      "start": 191,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 200,
            "end": 225,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 200,
              "end": 215,
              "decorators": [],
              "name": "observableArray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 215,
              "end": 223,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 216,
                  "end": 222
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
      "start": 228,
      "end": 249,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 248,
        "arguments": [
          {
            "type": "Literal",
            "start": 235,
            "end": 247,
            "raw": "'Some Value'",
            "value": "Some Value"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 228,
          "end": 234,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 234,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
