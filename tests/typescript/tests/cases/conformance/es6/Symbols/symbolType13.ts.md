__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 16,
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 28,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 28,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 25,
                "end": 28
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
      "type": "ForInStatement",
      "start": 31,
      "end": 48,
      "left": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ObjectExpression",
        "start": 41,
        "end": 43,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 49,
      "end": 65,
      "left": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 65,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 66,
      "end": 86,
      "left": {
        "type": "VariableDeclaration",
        "start": 71,
        "end": 76,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 86,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
