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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 85,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "name": "bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 83,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 45,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 44,
                      "end": 45,
                      "typeName": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 50,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 27,
                "end": 40,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 28,
                    "end": 39,
                    "name": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 38,
                      "end": 39,
                      "typeName": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 55,
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "start": 88,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 96,
            "end": 111,
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 126,
        "callee": {
          "type": "MemberExpression",
          "start": 113,
          "end": 119,
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "name": "bar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 120,
            "end": 121,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 166,
      "expression": {
        "type": "CallExpression",
        "start": 144,
        "end": 165,
        "callee": {
          "type": "MemberExpression",
          "start": 144,
          "end": 150,
          "object": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 150,
            "name": "bar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 159,
            "end": 160,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 162,
            "end": 164,
            "value": "",
            "raw": "\"\""
          }
        ],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
