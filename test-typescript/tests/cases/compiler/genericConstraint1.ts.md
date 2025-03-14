__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 85,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "bar2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 67,
                    "end": 79,
                    "argument": {
                      "type": "Literal",
                      "start": 74,
                      "end": 78,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 42,
                  "end": 46,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 45,
                      "end": 46,
                      "typeName": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 46,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 52,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 51,
                      "end": 52,
                      "typeName": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 52,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 28,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 29,
                    "end": 40,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 39,
                      "end": 40,
                      "typeName": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 40,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "start": 89,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 97,
            "end": 112,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 102,
              "end": 110,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 103,
                  "end": 109
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
      "start": 114,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 135,
        "arguments": [
          {
            "type": "Literal",
            "start": 129,
            "end": 130,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 132,
            "end": 134,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 114,
          "end": 120,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
            "decorators": [],
            "name": "bar2",
            "optional": false
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 120,
          "end": 128,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 121,
              "end": 127
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
