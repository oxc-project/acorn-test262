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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 46,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 23,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 29,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 29,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 44,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 44,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
      "type": "VariableDeclaration",
      "start": 48,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 63,
            "name": "a",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 59,
                    "end": 63
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 66,
            "end": 70,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
            "expression": {
              "type": "AssignmentExpression",
              "start": 81,
              "end": 92,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 85,
                "end": 92,
                "callee": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "handler": null,
      "finalizer": {
        "type": "BlockStatement",
        "start": 104,
        "end": 138,
        "body": [
          {
            "type": "IfStatement",
            "start": 108,
            "end": 136,
            "test": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 115,
              "end": 136,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 121,
                  "end": 132,
                  "expression": {
                    "type": "CallExpression",
                    "start": 121,
                    "end": 131,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 121,
                      "end": 129,
                      "object": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 129,
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
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
