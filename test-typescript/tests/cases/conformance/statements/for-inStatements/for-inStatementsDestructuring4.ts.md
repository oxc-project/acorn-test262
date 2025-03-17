__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 8,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 10,
      "end": 32,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 32,
        "body": []
      },
      "left": {
        "type": "ObjectPattern",
        "start": 15,
        "end": 21,
        "decorators": [],
        "optional": false,
        "properties": [
          {
            "type": "Property",
            "start": 16,
            "end": 17,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Property",
            "start": 19,
            "end": 20,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 25,
        "end": 27,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
