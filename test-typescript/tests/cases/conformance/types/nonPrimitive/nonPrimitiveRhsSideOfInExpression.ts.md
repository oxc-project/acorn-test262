__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 16,
            "end": 18,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 57,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 55,
            "argument": {
              "type": "ObjectExpression",
              "start": 52,
              "end": 54,
              "properties": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 41,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 35,
          "end": 41
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 80,
            "left": {
              "type": "Literal",
              "start": 70,
              "end": 75,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 90,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 93,
            "end": 105,
            "left": {
              "type": "Literal",
              "start": 93,
              "end": 98,
              "value": "bar",
              "raw": "\"bar\""
            },
            "operator": "in",
            "right": {
              "type": "CallExpression",
              "start": 102,
              "end": 105,
              "callee": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
