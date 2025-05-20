__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 94,
  "end": 136,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 109,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 94,
            "end": 101,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 102,
            "end": 109,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 112,
          "end": 135,
          "properties": [
            {
              "type": "Property",
              "start": 114,
              "end": 133,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 117,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 117,
                "end": 133,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 120,
                  "end": 133,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 122,
                      "end": 131,
                      "argument": {
                        "type": "Literal",
                        "start": 129,
                        "end": 130,
                        "raw": "0",
                        "value": 0
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
          ]
        }
      }
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
  "end": 33,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 33,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 23,
        "end": 32,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 23,
          "end": 30,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
