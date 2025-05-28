__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 136,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 48,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 22,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 25,
            "end": 47,
            "properties": [
              {
                "type": "Property",
                "start": 31,
                "end": 35,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 34,
                  "end": 35,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 41,
                "end": 45,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 44,
                  "end": 45,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 105,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 98,
            "decorators": [],
            "name": "selected",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 101,
            "end": 104,
            "value": "x",
            "raw": "\"x\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 121,
      "expression": {
        "type": "AssignmentExpression",
        "start": 106,
        "end": 120,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 106,
          "end": 114,
          "decorators": [],
          "name": "selected",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 117,
          "end": 120,
          "value": "z",
          "raw": "\"z\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
