__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 10,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 12,
      "end": 69,
      "left": {
        "type": "VariableDeclaration",
        "start": 17,
        "end": 22,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 69,
        "body": [
          {
            "type": "IfStatement",
            "start": 35,
            "end": 67,
            "test": {
              "type": "CallExpression",
              "start": 39,
              "end": 58,
              "callee": {
                "type": "MemberExpression",
                "start": 39,
                "end": 55,
                "object": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 55,
                  "name": "hasOwnProperty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 60,
              "end": 67,
              "body": []
            },
            "alternate": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
