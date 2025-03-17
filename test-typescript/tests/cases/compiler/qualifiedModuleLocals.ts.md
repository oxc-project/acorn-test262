__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "b",
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
              "start": 27,
              "end": 29,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
                "name": "a",
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "name": "b",
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
                    "directive": null
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "a",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
