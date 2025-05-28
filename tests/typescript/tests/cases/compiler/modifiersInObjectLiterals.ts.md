__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 105,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 24,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 26,
                  "end": 31,
                  "value": "hey",
                  "raw": "'hey'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 34,
                "end": 52,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 52,
                  "value": "nay",
                  "raw": "'nay'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 55,
                "end": 77,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 70,
                  "end": 77,
                  "value": "oh my",
                  "raw": "'oh my'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 80,
                "end": 101,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 94,
                  "decorators": [],
                  "name": "noWay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 101,
                  "value": "yes",
                  "raw": "'yes'"
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
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 112,
                "end": 115,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 123,
                "end": 126,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 150,
            "decorators": [],
            "name": "noWay",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
