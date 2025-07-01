__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "count",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 12,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 22
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 25,
            "end": 27
          },
          "definite": false,
          "start": 19,
          "end": 27
        }
      ],
      "declare": false,
      "start": 15,
      "end": 28
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "incr",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 42
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 65
              },
              "start": 58,
              "end": 65
            },
            "start": 51,
            "end": 66
          }
        ],
        "start": 45,
        "end": 68
      },
      "expression": false,
      "start": 29,
      "end": 68
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oobj",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 80
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 92
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 92
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 89,
                "end": 92
              }
            ],
            "start": 83,
            "end": 94
          },
          "definite": false,
          "start": 76,
          "end": 94
        }
      ],
      "declare": false,
      "start": 70,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 99
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incr",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 104
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 100,
            "end": 106
          },
          "optional": false,
          "computed": true,
          "start": 96,
          "end": 107
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "incr",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 116
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 112,
          "end": 118
        },
        "start": 96,
        "end": 118
      },
      "directive": null,
      "start": 96,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "oobj",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
            },
            "property": {
              "type": "Literal",
              "value": "obj",
              "raw": "\"obj\"",
              "start": 125,
              "end": 130
            },
            "optional": false,
            "computed": true,
            "start": 120,
            "end": 131
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "incr",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 132,
            "end": 138
          },
          "optional": false,
          "computed": true,
          "start": 120,
          "end": 139
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "incr",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 148
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 144,
          "end": 150
        },
        "start": 120,
        "end": 150
      },
      "directive": null,
      "start": 120,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
}
```
