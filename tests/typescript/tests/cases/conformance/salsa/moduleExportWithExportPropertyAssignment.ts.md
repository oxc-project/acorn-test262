__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 36,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 36,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 22,
                    "end": 34,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 34,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 31,
                        "end": 34
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 75,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 75,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 69,
              "end": 75
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 81,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 78,
          "end": 81
        }
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 135,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 73,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 73,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 55,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 55,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 58,
          "end": 73,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 70,
            "end": 73,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 134,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 115,
          "object": {
            "type": "MemberExpression",
            "start": 99,
            "end": 113,
            "object": {
              "type": "Identifier",
              "start": 99,
              "end": 105,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 118,
          "end": 134,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 131,
            "end": 134,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 116,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 69,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 52,
            "end": 69,
            "callee": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 60,
                "end": 68,
                "value": "./mod1",
                "raw": "'./mod1'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 76,
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 74,
          "decorators": [],
          "name": "mod1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 85,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 85,
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 83,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
