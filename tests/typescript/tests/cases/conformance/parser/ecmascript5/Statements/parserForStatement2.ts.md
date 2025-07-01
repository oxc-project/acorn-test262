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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        }
      ],
      "declare": false,
      "start": 0,
      "end": 6
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 15,
            "end": 17
          },
          "definite": false,
          "start": 11,
          "end": 17
        }
      ],
      "declare": false,
      "start": 7,
      "end": 18
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 23,
          "end": 24
        }
      ],
      "declare": false,
      "start": 19,
      "end": 25
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
      },
      "right": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "optional": false,
              "computed": true,
              "start": 36,
              "end": 40
            },
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 44
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "optional": false,
                "computed": true,
                "start": 43,
                "end": 47
              },
              "operator": "||",
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 51,
                "end": 53
              },
              "start": 43,
              "end": 53
            },
            "start": 36,
            "end": 53
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          }
        ],
        "start": 36,
        "end": 56
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 58,
        "end": 62
      },
      "start": 26,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 62
}
```
