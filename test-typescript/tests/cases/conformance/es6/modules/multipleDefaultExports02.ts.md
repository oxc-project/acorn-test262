__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 34,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 34,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 34,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "foo",
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
      "type": "ExportDefaultDeclaration",
      "start": 36,
      "end": 70,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 51,
        "end": 70,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 66,
          "end": 70,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 63,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
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
  "end": 36,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 25,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 27,
        "end": 35,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 27,
          "end": 33,
          "decorators": [],
          "name": "Entity",
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
