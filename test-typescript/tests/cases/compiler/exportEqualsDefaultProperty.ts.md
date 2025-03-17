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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 46,
                "end": 59,
                "method": false,
                "shorthand": false,
                "computed": false,
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 47,
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 42,
            "name": "toExponential",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
