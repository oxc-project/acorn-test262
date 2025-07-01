__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 22
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 34,
                  "end": 35
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 31,
                "end": 35
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 44,
                  "end": 45
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 41,
                "end": 45
              }
            ],
            "start": 25,
            "end": 47
          },
          "definite": false,
          "start": 19,
          "end": 47
        }
      ],
      "declare": false,
      "start": 13,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "selected",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 98
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 101,
            "end": 104
          },
          "definite": false,
          "start": 90,
          "end": 104
        }
      ],
      "declare": false,
      "start": 86,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "selected",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 114
        },
        "right": {
          "type": "Literal",
          "value": "z",
          "raw": "\"z\"",
          "start": 117,
          "end": 120
        },
        "start": 106,
        "end": 120
      },
      "directive": null,
      "start": 106,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 136
}
```
