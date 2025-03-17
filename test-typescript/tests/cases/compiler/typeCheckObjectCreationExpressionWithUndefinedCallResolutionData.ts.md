__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 80,
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
          "end": 80,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 48,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 35,
                    "name": "classes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 53,
              "end": 78,
              "argument": {
                "type": "NewExpression",
                "start": 60,
                "end": 77,
                "callee": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 71,
                  "name": "classes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 72,
                    "end": 76,
                    "value": null,
                    "raw": "null"
                  }
                ],
                "typeArguments": null
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
  "end": 40,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "value": "./file1",
          "raw": "'./file1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 39,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 38,
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 36,
          "object": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "name": "foo",
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
  "sourceType": "module",
  "hashbang": null
}
```
