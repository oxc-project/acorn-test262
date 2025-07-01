__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 14
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 25,
                "end": 28
              },
              "start": 23,
              "end": 28
            },
            "start": 22,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 28
        }
      ],
      "declare": false,
      "start": 18,
      "end": 29
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 41,
        "end": 43
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 45,
        "end": 48
      },
      "start": 31,
      "end": 48
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 55
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 60
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 62,
        "end": 65
      },
      "start": 49,
      "end": 65
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "init": null,
            "definite": false,
            "start": 75,
            "end": 76
          }
        ],
        "declare": false,
        "start": 71,
        "end": 76
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 81
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 83,
        "end": 86
      },
      "start": 66,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
