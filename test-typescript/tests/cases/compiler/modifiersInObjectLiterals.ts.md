__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 104,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 31,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 24,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 26,
                  "end": 31,
                  "value": "hey",
                  "raw": "'hey'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 34,
                "end": 52,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 52,
                  "value": "nay",
                  "raw": "'nay'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 55,
                "end": 77,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 70,
                  "end": 77,
                  "value": "oh my",
                  "raw": "'oh my'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 80,
                "end": 101,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 94,
                  "name": "noWay",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 101,
                  "value": "yes",
                  "raw": "'yes'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 150,
      "expression": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 150,
        "left": {
          "type": "BinaryExpression",
          "start": 107,
          "end": 137,
          "left": {
            "type": "BinaryExpression",
            "start": 107,
            "end": 126,
            "left": {
              "type": "MemberExpression",
              "start": 107,
              "end": 115,
              "object": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 112,
                "end": 115,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 118,
              "end": 126,
              "object": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 123,
                "end": 126,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "start": 129,
            "end": 137,
            "object": {
              "type": "Identifier",
              "start": 129,
              "end": 133,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "start": 140,
          "end": 150,
          "object": {
            "type": "Identifier",
            "start": 140,
            "end": 144,
            "name": "data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 150,
            "name": "noWay",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
