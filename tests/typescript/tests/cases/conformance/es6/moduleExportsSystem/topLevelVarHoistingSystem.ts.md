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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 21,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 61,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
