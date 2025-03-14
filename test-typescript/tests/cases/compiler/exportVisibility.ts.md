__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 20,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 20,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 49,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 48,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 39,
              "end": 48,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 102,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 58,
        "end": 102,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 82,
          "end": 102,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 88,
              "end": 100,
              "argument": {
                "type": "Literal",
                "start": 95,
                "end": 99,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 71,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 72,
            "end": 80,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 80,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
