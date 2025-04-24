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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 47,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 34,
                  "end": 35,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 41,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 44,
                  "end": 45,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 104,
          "definite": false,
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
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 121,
      "directive": null,
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
          "raw": "\"z\"",
          "value": "z"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
