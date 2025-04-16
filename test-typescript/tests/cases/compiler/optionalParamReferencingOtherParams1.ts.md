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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "strange",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 26,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 20,
              "end": 26
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 37,
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "BinaryExpression",
            "start": 32,
            "end": 37,
            "left": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 1,
              "raw": "1"
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 39,
          "end": 48,
          "left": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "BinaryExpression",
            "start": 43,
            "end": 48,
            "left": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
