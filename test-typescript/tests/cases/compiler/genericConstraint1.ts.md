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
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "name": "bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 42,
                  "end": 46,
                  "name": "x",
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
                  "start": 48,
                  "end": 52,
                  "name": "y",
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 28,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 29,
                    "end": 40,
                    "name": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 39,
                      "end": 40,
                      "typeName": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 40,
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
      "start": 89,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 97,
            "end": 112,
            "callee": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 135,
        "callee": {
          "type": "MemberExpression",
          "start": 114,
          "end": 120,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
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
            "start": 129,
            "end": 130,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 132,
            "end": 134,
            "value": "",
            "raw": "\"\""
          }
        ],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
