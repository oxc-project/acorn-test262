__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 31,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 28,
          "end": 31,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 43,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 40,
          "end": 41,
          "exported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 60,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "raw": "\"./m1\"",
        "value": "./m1",
        "regex": null,
        "bigint": null
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 47,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 46,
        "raw": "\"./m1\"",
        "value": "./m1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 32,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 52,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 54,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "foo",
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
