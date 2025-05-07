__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 32,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 17,
            "end": 30,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 17,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 17,
                "end": 25,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 17,
                  "end": 21
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 38,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 21,
            "end": 36,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 21,
              "end": 35,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 21,
                "end": 30,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 21,
                  "end": 25
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 33,
                "end": 35,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
