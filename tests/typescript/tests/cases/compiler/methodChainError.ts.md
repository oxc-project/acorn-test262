__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 239,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 103,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 29,
              "decorators": [],
              "name": "notMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 101,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 95,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 90,
                      "end": 94
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
                  "start": 49,
                  "end": 62,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 72,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 72,
                    "decorators": [],
                    "name": "Builder",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Builder",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 166,
        "arguments": [
          {
            "type": "Literal",
            "start": 162,
            "end": 165,
            "raw": "\"a\"",
            "value": "a"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 105,
          "end": 161,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 105,
            "end": 149,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 105,
              "end": 147,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 105,
                "end": 135,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 131,
                    "end": 134,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 105,
                  "end": 130,
                  "computed": false,
                  "object": {
                    "type": "NewExpression",
                    "start": 105,
                    "end": 118,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 116,
                      "decorators": [],
                      "name": "Builder",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 130,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 155,
            "end": 161,
            "decorators": [],
            "name": "method",
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
      "start": 174,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 238,
        "arguments": [
          {
            "type": "Literal",
            "start": 234,
            "end": 237,
            "raw": "\"a\"",
            "value": "a"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 174,
          "end": 233,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 174,
            "end": 221,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 174,
              "end": 219,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 174,
                "end": 204,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 200,
                    "end": 203,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 199,
                  "computed": false,
                  "object": {
                    "type": "NewExpression",
                    "start": 174,
                    "end": 187,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 185,
                      "decorators": [],
                      "name": "Builder",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 199,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "decorators": [],
                "name": "notMethod",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 227,
            "end": 233,
            "decorators": [],
            "name": "method",
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
