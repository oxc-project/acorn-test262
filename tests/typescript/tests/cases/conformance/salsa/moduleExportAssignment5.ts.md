__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Axios",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 32,
                "end": 39
              },
              "expression": false,
              "start": 29,
              "end": 39
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 39
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 48,
                "end": 51
              },
              "expression": false,
              "start": 45,
              "end": 51
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 51
          }
        ],
        "start": 12,
        "end": 53
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "axios",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 63
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Axios",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 75
            },
            "typeArguments": null,
            "arguments": [],
            "start": 66,
            "end": 77
          },
          "definite": false,
          "start": 58,
          "end": 77
        }
      ],
      "declare": false,
      "start": 54,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "axios",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 147
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 142,
        "end": 151
      },
      "directive": null,
      "start": 142,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 158
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 166
          },
          "optional": false,
          "computed": false,
          "start": 152,
          "end": 166
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "axios",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 174
        },
        "start": 152,
        "end": 174
      },
      "directive": null,
      "start": 152,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 182
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 190
            },
            "optional": false,
            "computed": false,
            "start": 176,
            "end": 190
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 198
          },
          "optional": false,
          "computed": false,
          "start": 176,
          "end": 198
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "axios",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 206
        },
        "start": 176,
        "end": 206
      },
      "directive": null,
      "start": 176,
      "end": 207
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 207
}
```
