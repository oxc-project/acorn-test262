__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 111,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 14,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "b",
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
              "start": 27,
              "end": 29,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 64,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 40,
              "end": 64,
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "a",
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
                "start": 52,
                "end": 64,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 55,
                    "end": 61,
                    "expression": {
                      "type": "CallExpression",
                      "start": 55,
                      "end": 60,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 55,
                        "end": 58,
                        "object": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 119,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 118,
        "callee": {
          "type": "MemberExpression",
          "start": 113,
          "end": 116,
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
