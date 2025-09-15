__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 14,
        "end": 17
      },
      "expression": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 20
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 29,
            "end": 30
          },
          "id": null,
          "generator": false,
          "start": 23,
          "end": 30
        },
        "start": 18,
        "end": 30
      },
      "directive": null,
      "start": 18,
      "end": 31
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 46
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 65
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
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 90
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 93,
                    "end": 104
                  },
                  "expression": false,
                  "start": 78,
                  "end": 104
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 116
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 119,
                      "end": 123
                    },
                    "start": 113,
                    "end": 123
                  },
                  "directive": null,
                  "start": 113,
                  "end": 124
                }
              ],
              "start": 68,
              "end": 130
            },
            "expression": false,
            "start": 53,
            "end": 130
          }
        ],
        "start": 47,
        "end": 132
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 33,
      "end": 132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 132
}
```
