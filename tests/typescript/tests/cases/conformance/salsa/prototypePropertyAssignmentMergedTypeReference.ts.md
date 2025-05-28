__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 156,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 94,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 93,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 64,
            "end": 93,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 75,
              "end": 93,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 81,
                  "end": 91,
                  "argument": {
                    "type": "Literal",
                    "start": 88,
                    "end": 90,
                    "value": 12,
                    "raw": "12"
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 116,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 115,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 109,
          "object": {
            "type": "MemberExpression",
            "start": 96,
            "end": 107,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 107,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 112,
          "end": 115,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
