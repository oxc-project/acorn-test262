__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 85,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 85,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 83,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 83,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 76,
                    "argument": {
                      "type": "Literal",
                      "start": 71,
                      "end": 75,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
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
                  "start": 41,
                  "end": 45,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 44,
                      "end": 45,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 50,
                      "end": 51,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 55,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 27,
                "end": 40,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 28,
                    "end": 39,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 38,
                      "end": 39,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "start": 88,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 96,
            "end": 111,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 101,
              "end": 109,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 102,
                  "end": 108
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
      "start": 113,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 126,
        "arguments": [
          {
            "type": "Literal",
            "start": 120,
            "end": 121,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 113,
          "end": 119,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 144,
        "end": 165,
        "arguments": [
          {
            "type": "Literal",
            "start": 159,
            "end": 160,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 162,
            "end": 164,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 144,
          "end": 150,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 150,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 150,
          "end": 158,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 151,
              "end": 157
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
