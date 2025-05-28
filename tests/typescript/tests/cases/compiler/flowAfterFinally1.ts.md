__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "openFile",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 33,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 60,
        "decorators": [],
        "name": "closeFile",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 62,
        "end": 68,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 64,
          "end": 68
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 69,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 99,
        "decorators": [],
        "name": "someOperation",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 105,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 103,
          "end": 105,
          "members": []
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 121,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 121,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 119,
                "end": 121,
                "members": []
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 132,
      "expression": {
        "type": "CallExpression",
        "start": 122,
        "end": 132,
        "callee": {
          "type": "Identifier",
          "start": 122,
          "end": 130,
          "decorators": [],
          "name": "openFile",
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
      "type": "TryStatement",
      "start": 133,
      "end": 193,
      "block": {
        "type": "BlockStatement",
        "start": 137,
        "end": 167,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 165,
            "expression": {
              "type": "AssignmentExpression",
              "start": 141,
              "end": 165,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 150,
                "end": 165,
                "callee": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 163,
                  "decorators": [],
                  "name": "someOperation",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "handler": null,
      "finalizer": {
        "type": "BlockStatement",
        "start": 176,
        "end": 193,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 191,
            "expression": {
              "type": "CallExpression",
              "start": 180,
              "end": 191,
              "callee": {
                "type": "Identifier",
                "start": 180,
                "end": 189,
                "decorators": [],
                "name": "closeFile",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 201,
      "expression": {
        "type": "Identifier",
        "start": 195,
        "end": 201,
        "decorators": [],
        "name": "result",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
