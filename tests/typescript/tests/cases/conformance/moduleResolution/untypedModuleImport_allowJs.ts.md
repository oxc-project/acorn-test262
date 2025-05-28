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
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 109,
          "object": {
            "type": "Identifier",
            "start": 94,
            "end": 101,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 102,
            "end": 109,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 117,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 117,
                "end": 133,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "value": "foo",
        "raw": "\"foo\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 33,
      "expression": {
        "type": "CallExpression",
        "start": 23,
        "end": 32,
        "callee": {
          "type": "MemberExpression",
          "start": 23,
          "end": 30,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "decorators": [],
            "name": "bar",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
