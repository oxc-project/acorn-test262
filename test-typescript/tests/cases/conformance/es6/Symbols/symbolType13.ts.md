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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 28,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 31,
      "end": 48,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      },
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
      }
    },
    {
      "type": "ForInStatement",
      "start": 49,
      "end": 65,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 65,
        "body": []
      },
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
      }
    },
    {
      "type": "ForInStatement",
      "start": 66,
      "end": 86,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 86,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 71,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 76,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
