__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 22,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 17,
                  "decorators": [],
                  "name": "min",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 20,
                  "raw": "3",
                  "value": 3
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
      "type": "ExpressionStatement",
      "start": 24,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 37,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 24,
          "end": 35,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 50,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 46,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 53,
          "end": 60,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "min",
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
