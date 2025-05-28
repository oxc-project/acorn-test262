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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 18,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
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
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
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
