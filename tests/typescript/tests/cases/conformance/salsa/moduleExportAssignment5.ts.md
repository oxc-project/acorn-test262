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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 39,
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
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 39,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 39,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 51,
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
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 51,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 51,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 78,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 77,
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
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 75,
              "decorators": [],
              "name": "Axios",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 151,
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 149,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 147,
            "decorators": [],
            "name": "axios",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "m",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 175,
      "expression": {
        "type": "AssignmentExpression",
        "start": 152,
        "end": 174,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 152,
          "end": 166,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 159,
            "end": 166,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 207,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 206,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 198,
          "object": {
            "type": "MemberExpression",
            "start": 176,
            "end": 190,
            "object": {
              "type": "Identifier",
              "start": 176,
              "end": 182,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 183,
              "end": 190,
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
            "start": 191,
            "end": 198,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
