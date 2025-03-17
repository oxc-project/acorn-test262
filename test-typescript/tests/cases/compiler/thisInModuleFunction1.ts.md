__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 55,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 21,
              "end": 55,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 33,
                "name": "bar",
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
                "start": 36,
                "end": 55,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 40,
                    "end": 52,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 47,
                      "end": 51
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 68,
            "end": 77,
            "callee": {
              "type": "MemberExpression",
              "start": 68,
              "end": 75,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 72,
                "end": 75,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
