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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 140,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 132,
                  "decorators": [],
                  "name": "bye",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 138,
                  "raw": "\"no\"",
                  "value": "no"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 143,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 201,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 144,
        "end": 201,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 144,
          "end": 154,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 154,
            "decorators": [],
            "name": "ignoreMe",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 157,
          "end": 201,
          "raw": "\"ok but just because of the index signature\"",
          "value": "ok but just because of the index signature"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 217,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 202,
          "end": 209,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 204,
            "end": 208,
            "raw": "'hi'",
            "value": "hi"
          }
        },
        "right": {
          "type": "Literal",
          "start": 212,
          "end": 217,
          "raw": "\"yes\"",
          "value": "yes"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
