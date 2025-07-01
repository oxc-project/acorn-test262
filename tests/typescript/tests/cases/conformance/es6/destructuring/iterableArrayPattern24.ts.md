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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 18,
                  "end": 25
                },
                "start": 18,
                "end": 27
              },
              "start": 16,
              "end": 27
            },
            "start": 15,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 33,
              "end": 37
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 38
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 43,
                "end": 44
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 46,
                "end": 48
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 43,
              "end": 48
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 50,
                "end": 51
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 53,
                "end": 57
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 50,
              "end": 57
            }
          ],
          "start": 41,
          "end": 59
        },
        "start": 29,
        "end": 59
      },
      "directive": null,
      "start": 29,
      "end": 60
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
