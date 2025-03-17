__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 46,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 46,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 23,
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
              "start": 23,
              "end": 29,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 29,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
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
              "start": 38,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
                "body": []
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
      "type": "VariableDeclaration",
      "start": 48,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 63,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 55,
                "end": 63,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 55,
                    "end": 56,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 59,
                    "end": 63
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 66,
            "end": 70,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TryStatement",
      "start": 73,
      "end": 138,
      "block": {
        "type": "BlockStatement",
        "start": 77,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 81,
            "end": 93,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 81,
              "end": 92,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "NewExpression",
                "start": 85,
                "end": 92,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
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
      "finalizer": {
        "type": "BlockStatement",
        "start": 104,
        "end": 138,
        "body": [
          {
            "type": "IfStatement",
            "start": 108,
            "end": 136,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 115,
              "end": 136,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 121,
                  "end": 132,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 121,
                    "end": 131,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 121,
                      "end": 129,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 129,
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
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "handler": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
