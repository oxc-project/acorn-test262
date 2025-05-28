__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 62,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 61,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 40,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 14,
                  "end": 24,
                  "value": "greeting",
                  "raw": "\"greeting\""
                },
                "value": {
                  "type": "Literal",
                  "start": 26,
                  "end": 40,
                  "value": "hello, world",
                  "raw": "\"hello, world\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 46,
                "end": 59,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 46,
                  "end": 55,
                  "value": "default",
                  "raw": "\"default\""
                },
                "value": {
                  "type": "Literal",
                  "start": 57,
                  "end": 59,
                  "value": 42,
                  "raw": "42"
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
      "type": "TSExportAssignment",
      "start": 64,
      "end": 74,
      "expression": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
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
  "end": 46,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
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
        "end": 23,
        "value": "./exp",
        "raw": "\"./exp\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 45,
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 42,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 42,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
