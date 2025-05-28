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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
              }
            }
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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 41,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 35,
          "end": 41
        }
      },
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 81,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 90,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
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
