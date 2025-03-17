__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 39,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 24,
              "end": 37,
              "argument": {
                "type": "Literal",
                "start": 31,
                "end": 36,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 96,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 22,
            "end": 49,
            "source": {
              "type": "Literal",
              "start": 43,
              "end": 48,
              "value": "./0",
              "raw": "\"./0\""
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 70,
            "end": 85,
            "source": {
              "type": "Literal",
              "start": 79,
              "end": 84,
              "value": "./0",
              "raw": "\"./0\""
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
