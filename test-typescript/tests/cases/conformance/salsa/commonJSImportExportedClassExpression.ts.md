__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 31,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 30,
                "raw": "\"./mod1\"",
                "value": "./mod1"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 85,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 73,
            "end": 83,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 73,
              "end": 83,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 81,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 81,
                  "decorators": [],
                  "name": "values",
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
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
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 45,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 44,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 9,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 12,
          "end": 44,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 20,
            "end": 44,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 26,
                "end": 42,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 32,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 32,
                  "end": 42,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 35,
                    "end": 42,
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
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
