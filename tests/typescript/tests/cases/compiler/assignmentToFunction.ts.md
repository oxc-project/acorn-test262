__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 17,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 31,
      "expression": {
        "type": "AssignmentExpression",
        "start": 18,
        "end": 30,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 18,
          "end": 20,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 23,
          "end": 30,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 29,
            "end": 30,
            "value": 3,
            "raw": "3"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 44,
        "end": 129,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 50,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 127,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 75,
                  "end": 101,
                  "id": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 87,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 90,
                    "end": 101,
                    "body": []
                  },
                  "expression": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 110,
                  "end": 121,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 110,
                    "end": 120,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 113,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 116,
                      "end": 120,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
