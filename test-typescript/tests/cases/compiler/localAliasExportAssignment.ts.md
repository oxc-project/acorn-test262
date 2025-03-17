__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
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
                    },
                    "typeParameters": null
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
      "start": 31,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 40,
        "end": 46,
        "decorators": [],
        "name": "server",
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
  "start": 55,
  "end": 129,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 55,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "decorators": [],
        "name": "connect",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 72,
        "end": 113,
        "expression": {
          "type": "Literal",
          "start": 80,
          "end": 112,
          "raw": "'./localAliasExportAssignment_0'",
          "value": "./localAliasExportAssignment_0"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 125,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 116,
          "end": 123,
          "decorators": [],
          "name": "connect",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
