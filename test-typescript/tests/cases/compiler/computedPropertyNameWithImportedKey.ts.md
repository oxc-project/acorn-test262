__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 17,
              "end": 25,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
  "end": 95,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"./a\"",
        "value": "./a"
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
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 32,
        "end": 94,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 73,
          "end": 94,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 79,
              "end": 92,
              "argument": {
                "type": "Identifier",
                "start": 86,
                "end": 91,
                "decorators": [],
                "name": "value",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 43,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "params": [
          {
            "type": "ObjectPattern",
            "start": 44,
            "end": 63,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 46,
                "end": 56,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 56,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 63,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 64,
          "end": 72,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 66,
            "end": 72
          }
        }
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
