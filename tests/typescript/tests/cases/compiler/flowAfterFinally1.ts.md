__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "openFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        },
        "start": 27,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "closeFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 64,
          "end": 68
        },
        "start": 62,
        "end": 68
      },
      "body": null,
      "expression": false,
      "start": 34,
      "end": 68
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someOperation",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 103,
          "end": 105
        },
        "start": 101,
        "end": 105
      },
      "body": null,
      "expression": false,
      "start": 69,
      "end": 105
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 119,
                "end": 121
              },
              "start": 117,
              "end": 121
            },
            "start": 111,
            "end": 121
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 121
        }
      ],
      "declare": false,
      "start": 107,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "openFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 130
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 122,
        "end": 132
      },
      "directive": null,
      "start": 122,
      "end": 132
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 147
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 163
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 150,
                "end": 165
              },
              "start": 141,
              "end": 165
            },
            "directive": null,
            "start": 141,
            "end": 165
          }
        ],
        "start": 137,
        "end": 167
      },
      "handler": null,
      "finalizer": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "closeFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 189
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 180,
              "end": 191
            },
            "directive": null,
            "start": 180,
            "end": 191
          }
        ],
        "start": 176,
        "end": 193
      },
      "start": 133,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "result",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 201
      },
      "directive": null,
      "start": 195,
      "end": 201
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
