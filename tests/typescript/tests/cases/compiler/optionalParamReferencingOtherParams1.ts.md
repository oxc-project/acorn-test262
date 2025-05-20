__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 67,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 67,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 56,
            "end": 65,
            "argument": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "strange",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 26,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 20,
              "end": 26
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 37,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "BinaryExpression",
            "start": 32,
            "end": 37,
            "operator": "*",
            "left": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "1",
              "value": 1
            }
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 39,
          "end": 48,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "BinaryExpression",
            "start": 43,
            "end": 48,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
