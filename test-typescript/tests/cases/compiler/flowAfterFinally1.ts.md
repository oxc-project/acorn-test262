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
        "name": "openFile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 33,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 60,
        "name": "closeFile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 62,
        "end": 68,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 64,
          "end": 68
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 69,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 99,
        "name": "someOperation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 121,
            "name": "result",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "openFile",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 150,
                "end": 165,
                "callee": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 163,
                  "name": "someOperation",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
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
                "name": "closeFile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
        "name": "result",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
