__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "add",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 40
                },
                "start": 35,
                "end": 40
              },
              "start": 28,
              "end": 41
            }
          ],
          "start": 26,
          "end": 43
        },
        "expression": false,
        "start": 7,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "math",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 18
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "exportImportMultipleFiles_math",
            "raw": "\"exportImportMultipleFiles_math\"",
            "start": 29,
            "end": 61
          },
          "start": 21,
          "end": 62
        },
        "importKind": "value",
        "start": 7,
        "end": 63
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "math",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 68
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 72
          },
          "optional": false,
          "computed": false,
          "start": 64,
          "end": 72
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 73,
            "end": 74
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 76,
            "end": 77
          }
        ],
        "optional": false,
        "start": 64,
        "end": 78
      },
      "directive": null,
      "start": 64,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "lib",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./exportImportMultipleFiles_library",
          "raw": "'./exportImportMultipleFiles_library'",
          "start": 21,
          "end": 58
        },
        "start": 13,
        "end": 59
      },
      "importKind": "value",
      "start": 0,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "lib",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "math",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 69
            },
            "optional": false,
            "computed": false,
            "start": 61,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 73
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 73
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 74,
            "end": 75
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 77,
            "end": 78
          }
        ],
        "optional": false,
        "start": 61,
        "end": 79
      },
      "directive": null,
      "start": 61,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
