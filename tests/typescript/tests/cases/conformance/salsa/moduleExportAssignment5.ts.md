__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 53,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 39,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 39,
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
            "start": 44,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 51,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 51,
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
        "end": 11,
        "decorators": [],
        "name": "Axios",
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
      "start": 54,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 63,
            "decorators": [],
            "name": "axios",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 66,
            "end": 77,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 75,
              "decorators": [],
              "name": "Axios",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 151,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 149,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 147,
            "decorators": [],
            "name": "axios",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "m",
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
      "start": 152,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 152,
        "end": 174,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 152,
          "end": 166,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 159,
            "end": 166,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 169,
          "end": 174,
          "decorators": [],
          "name": "axios",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 207,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 206,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 198,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 176,
            "end": 190,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 176,
              "end": 182,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 183,
              "end": 190,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 191,
            "end": 198,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 206,
          "decorators": [],
          "name": "axios",
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
