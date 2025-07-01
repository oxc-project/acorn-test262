__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
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
                  "name": "min",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 19,
                  "end": 20
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 20
              }
            ],
            "start": 12,
            "end": 22
          },
          "definite": false,
          "start": 6,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 35
          },
          "optional": false,
          "computed": false,
          "start": 24,
          "end": 35
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 24,
        "end": 37
      },
      "directive": null,
      "start": 24,
      "end": 38
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 50
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 50
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 56
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 53,
          "end": 60
        },
        "start": 39,
        "end": 60
      },
      "directive": null,
      "start": 39,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
