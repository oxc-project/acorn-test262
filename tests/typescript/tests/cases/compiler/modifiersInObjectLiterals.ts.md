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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 104,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 24,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 26,
                  "end": 31,
                  "raw": "'hey'",
                  "value": "hey"
                }
              },
              {
                "type": "Property",
                "start": 34,
                "end": 52,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 52,
                  "raw": "'nay'",
                  "value": "nay"
                }
              },
              {
                "type": "Property",
                "start": 55,
                "end": 77,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 70,
                  "end": 77,
                  "raw": "'oh my'",
                  "value": "oh my"
                }
              },
              {
                "type": "Property",
                "start": 80,
                "end": 101,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 94,
                  "decorators": [],
                  "name": "noWay",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 101,
                  "raw": "'yes'",
                  "value": "yes"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 150,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 150,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 107,
          "end": 137,
          "operator": "+",
          "left": {
            "type": "BinaryExpression",
            "start": 107,
            "end": 126,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 107,
              "end": 115,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 112,
                "end": 115,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 118,
              "end": 126,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 123,
                "end": 126,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 129,
            "end": 137,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 129,
              "end": 133,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 140,
          "end": 150,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 140,
            "end": 144,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 150,
            "decorators": [],
            "name": "noWay",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
