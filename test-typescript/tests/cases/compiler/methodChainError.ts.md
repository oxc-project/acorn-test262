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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "Builder",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 29,
              "name": "notMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 101,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 101,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 62,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 72,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 72,
                    "name": "Builder",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 166,
        "callee": {
          "type": "MemberExpression",
          "start": 105,
          "end": 161,
          "object": {
            "type": "CallExpression",
            "start": 105,
            "end": 149,
            "callee": {
              "type": "MemberExpression",
              "start": 105,
              "end": 147,
              "object": {
                "type": "CallExpression",
                "start": 105,
                "end": 135,
                "callee": {
                  "type": "MemberExpression",
                  "start": 105,
                  "end": 130,
                  "object": {
                    "type": "NewExpression",
                    "start": 105,
                    "end": 118,
                    "callee": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 116,
                      "name": "Builder",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 130,
                    "name": "method",
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
                    "start": 131,
                    "end": 134,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 155,
            "end": 161,
            "name": "method",
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
            "start": 162,
            "end": 165,
            "value": "a",
            "raw": "\"a\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 239,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 238,
        "callee": {
          "type": "MemberExpression",
          "start": 174,
          "end": 233,
          "object": {
            "type": "CallExpression",
            "start": 174,
            "end": 221,
            "callee": {
              "type": "MemberExpression",
              "start": 174,
              "end": 219,
              "object": {
                "type": "CallExpression",
                "start": 174,
                "end": 204,
                "callee": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 199,
                  "object": {
                    "type": "NewExpression",
                    "start": 174,
                    "end": 187,
                    "callee": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 185,
                      "name": "Builder",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 199,
                    "name": "method",
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
                    "start": 200,
                    "end": 203,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "name": "notMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 227,
            "end": 233,
            "name": "method",
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
            "start": 234,
            "end": 237,
            "value": "a",
            "raw": "\"a\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
