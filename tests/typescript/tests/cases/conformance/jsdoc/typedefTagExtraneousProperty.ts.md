__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 119,
  "end": 217,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 141,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 127,
            "end": 140,
            "properties": [
              {
                "type": "Property",
                "start": 129,
                "end": 138,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 132,
                  "decorators": [],
                  "name": "bye",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 138,
                  "value": "no",
                  "raw": "\"no\""
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
      "type": "ExpressionStatement",
      "start": 142,
      "end": 143,
      "expression": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 201,
      "expression": {
        "type": "AssignmentExpression",
        "start": 144,
        "end": 201,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 144,
          "end": 154,
          "object": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 154,
            "decorators": [],
            "name": "ignoreMe",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 157,
          "end": 201,
          "value": "ok but just because of the index signature",
          "raw": "\"ok but just because of the index signature\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 202,
          "end": 209,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 204,
            "end": 208,
            "value": "hi",
            "raw": "'hi'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 212,
          "end": 217,
          "value": "yes",
          "raw": "\"yes\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
