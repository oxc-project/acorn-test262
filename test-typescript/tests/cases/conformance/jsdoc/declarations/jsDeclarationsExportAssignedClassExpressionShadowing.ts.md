__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 23,
              "end": 30,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 57,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 55,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 52,
              "end": 54,
              "raw": "42",
              "value": 42,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "Q",
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
      "start": 58,
      "end": 138,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 138,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 58,
          "end": 72,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 75,
          "end": 138,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 83,
            "end": 138,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 89,
                "end": 136,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 100,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 100,
                  "end": 136,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 103,
                    "end": 136,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 113,
                        "end": 130,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 113,
                          "end": 129,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 113,
                            "end": 119,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 113,
                              "end": 117
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 119,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "NewExpression",
                            "start": 122,
                            "end": 129,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 139,
          "end": 161,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 139,
            "end": 153,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 139,
              "end": 145,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 146,
              "end": 153,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 161,
            "decorators": [],
            "name": "Another",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
