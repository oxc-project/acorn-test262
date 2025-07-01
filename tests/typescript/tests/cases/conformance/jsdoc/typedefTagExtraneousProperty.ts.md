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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
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
                  "name": "bye",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 132
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "\"no\"",
                  "start": 134,
                  "end": 138
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 129,
                "end": 138
              }
            ],
            "start": 127,
            "end": 140
          },
          "definite": false,
          "start": 123,
          "end": 140
        }
      ],
      "declare": false,
      "start": 119,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 143
      },
      "directive": null,
      "start": 142,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ignoreMe",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 154
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 154
        },
        "right": {
          "type": "Literal",
          "value": "ok but just because of the index signature",
          "raw": "\"ok but just because of the index signature\"",
          "start": 157,
          "end": 201
        },
        "start": 144,
        "end": 201
      },
      "directive": null,
      "start": 144,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "property": {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 204,
            "end": 208
          },
          "optional": false,
          "computed": true,
          "start": 202,
          "end": 209
        },
        "right": {
          "type": "Literal",
          "value": "yes",
          "raw": "\"yes\"",
          "start": 212,
          "end": 217
        },
        "start": 202,
        "end": 217
      },
      "directive": null,
      "start": 202,
      "end": 217
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 119,
  "end": 217
}
```
