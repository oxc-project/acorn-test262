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
          "decorators": [],
          "name": "add",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
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
          "decorators": [],
          "name": "math",
          "optional": false,
          "typeAnnotation": null
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
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "math",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
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
  "end": 101,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "lib",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "lib",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "decorators": [],
              "name": "math",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 73,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
