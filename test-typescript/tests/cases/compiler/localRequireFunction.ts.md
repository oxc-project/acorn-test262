__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 37,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 37,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 26,
            "end": 35,
            "argument": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 63,
            "arguments": [
              {
                "type": "Literal",
                "start": 58,
                "end": 62,
                "raw": "\"fs\"",
                "value": "fs",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 50,
              "end": 57,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 75,
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 78,
            "end": 103,
            "arguments": [
              {
                "type": "Literal",
                "start": 94,
                "end": 102,
                "raw": "\"/a/b/c\"",
                "value": "/a/b/c",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 93,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 80,
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 81,
                "end": 93,
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
