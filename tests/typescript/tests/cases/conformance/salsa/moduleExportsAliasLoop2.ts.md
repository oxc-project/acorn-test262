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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 17,
                  "decorators": [],
                  "name": "min",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 20,
                  "value": 3,
                  "raw": "3"
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
      "start": 24,
      "end": 38,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 37,
        "callee": {
          "type": "MemberExpression",
          "start": 24,
          "end": 35,
          "object": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 50,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 46,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 53,
          "end": 60,
          "object": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "min",
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
