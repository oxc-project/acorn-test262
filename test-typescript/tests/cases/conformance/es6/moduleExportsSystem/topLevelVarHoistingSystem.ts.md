__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 29,
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 9,
        "value": false,
        "raw": "false"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 11,
        "end": 29,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 17,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 21,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 25,
                  "end": 26,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "name": "f",
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
        "start": 44,
        "end": 67,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 65,
            "expression": {
              "type": "CallExpression",
              "start": 50,
              "end": 64,
              "callee": {
                "type": "MemberExpression",
                "start": 50,
                "end": 61,
                "object": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 57,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 61,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 82,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 78,
          "end": 79,
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
