__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 42,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 29,
          "end": 42,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 31,
              "end": 40,
              "argument": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "c",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 68,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 67,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 57,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 60,
          "end": 67,
          "properties": [
            {
              "type": "Property",
              "start": 62,
              "end": 65,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null
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
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 32,
        "raw": "'./bug24934'",
        "value": "./bug24934",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 47,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 34,
        "end": 46,
        "arguments": [
          {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 41,
            "end": 42,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 34,
          "end": 37,
          "decorators": [],
          "name": "abc",
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
