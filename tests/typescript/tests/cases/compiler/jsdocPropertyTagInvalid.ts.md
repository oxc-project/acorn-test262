__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 79,
  "end": 104,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 79,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 86,
        "end": 103,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 100,
          "end": 103,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 39,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 26,
        "raw": "\"./a.js\"",
        "value": "./a.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "f",
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
      "start": 27,
      "end": 39,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 27,
        "end": 39,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 29,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 31,
                "end": 36,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 34,
                  "end": 36,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
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
