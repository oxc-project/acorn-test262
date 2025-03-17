__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 43,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "add",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 26,
          "end": 43,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 28,
              "end": 41,
              "argument": {
                "type": "BinaryExpression",
                "start": 35,
                "end": 40,
                "left": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
  "end": 86,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 63,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 63,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "name": "math",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 21,
          "end": 62,
          "expression": {
            "type": "Literal",
            "start": 29,
            "end": 61,
            "value": "exportImportMultipleFiles_math",
            "raw": "\"exportImportMultipleFiles_math\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 79,
      "expression": {
        "type": "CallExpression",
        "start": 64,
        "end": 78,
        "callee": {
          "type": "MemberExpression",
          "start": 64,
          "end": 72,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "name": "math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 76,
            "end": 77,
            "value": 4,
            "raw": "4"
          }
        ],
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "lib",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 59,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 58,
          "value": "./exportImportMultipleFiles_library",
          "raw": "'./exportImportMultipleFiles_library'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 80,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 79,
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 73,
          "object": {
            "type": "MemberExpression",
            "start": 61,
            "end": 69,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "name": "lib",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "name": "math",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 73,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 77,
            "end": 78,
            "value": 4,
            "raw": "4"
          }
        ],
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
