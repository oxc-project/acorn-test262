__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 19,
            "end": 29,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 19,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 19,
                "end": 25,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 19,
                  "end": 23
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
  "end": 46,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 46,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 46,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 15,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 11,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 1,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2,
              "end": 11,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 18,
          "end": 46,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 29,
            "end": 46,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 31,
                "end": 44,
                "argument": {
                  "type": "MemberExpression",
                  "start": 38,
                  "end": 44,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 38,
                    "end": 42
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
