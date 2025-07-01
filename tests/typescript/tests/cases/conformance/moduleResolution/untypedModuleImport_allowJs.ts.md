__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 94,
            "end": 101
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 109
          },
          "optional": false,
          "computed": false,
          "start": 94,
          "end": 109
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 117
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 129,
                        "end": 130
                      },
                      "start": 122,
                      "end": 131
                    }
                  ],
                  "start": 120,
                  "end": 133
                },
                "expression": false,
                "start": 117,
                "end": 133
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 114,
              "end": 133
            }
          ],
          "start": 112,
          "end": 135
        },
        "start": 94,
        "end": 135
      },
      "directive": null,
      "start": 94,
      "end": 135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 94,
  "end": 136
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 16,
        "end": 21
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 22
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 30
          },
          "optional": false,
          "computed": false,
          "start": 23,
          "end": 30
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 23,
        "end": 32
      },
      "directive": null,
      "start": 23,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 33
}
```
