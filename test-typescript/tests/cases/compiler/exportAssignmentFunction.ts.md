__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 28,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 28,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 17,
            "end": 26,
            "argument": {
              "type": "Literal",
              "start": 24,
              "end": 25,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 43,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 83,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "fooFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 54,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 53,
          "raw": "\"exportAssignmentFunction_A\"",
          "value": "exportAssignmentFunction_A",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 73,
            "end": 82,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "decorators": [],
              "name": "fooFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
