__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "server",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 12,
                "end": 28,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 18,
                    "end": 26,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 20,
                      "end": 25,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 22,
                        "end": 25
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 46,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 45,
        "decorators": [],
        "name": "server",
        "optional": false
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
  "start": 48,
  "end": 110,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 48,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "connect",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 65,
        "end": 97,
        "expression": {
          "type": "Literal",
          "start": 73,
          "end": 96,
          "raw": "'exportEqualCallable_0'",
          "value": "exportEqualCallable_0"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 99,
        "end": 108,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 99,
          "end": 106,
          "decorators": [],
          "name": "connect",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
