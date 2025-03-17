__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
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
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 15,
            "end": 17,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "c",
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
    {
      "type": "ForInStatement",
      "start": 26,
      "end": 62,
      "left": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "SequenceExpression",
        "start": 36,
        "end": 56,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 36,
            "end": 53,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 36,
              "end": 40,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "LogicalExpression",
              "start": 43,
              "end": 53,
              "left": {
                "type": "MemberExpression",
                "start": 43,
                "end": 47,
                "object": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "ArrayExpression",
                "start": 51,
                "end": 53,
                "elements": []
              }
            }
          },
          {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 62,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
