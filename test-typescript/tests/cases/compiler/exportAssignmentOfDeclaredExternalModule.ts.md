__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 113,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 113,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 22,
            "end": 34,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 70,
            "end": 81,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 114,
      "end": 129,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 128,
        "decorators": [],
        "name": "Sammy",
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
  "start": 69,
  "end": 448,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 69,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 81,
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 84,
        "end": 139,
        "expression": {
          "type": "Literal",
          "start": 92,
          "end": 138,
          "raw": "'./exportAssignmentOfDeclaredExternalModule_0'",
          "value": "./exportAssignmentOfDeclaredExternalModule_0",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 149,
            "end": 160,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "decorators": [],
              "name": "Sammy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 228,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 243,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 241,
              "decorators": [],
              "name": "Sammy",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 303,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 303,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 303,
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "VariableDeclaration",
      "start": 364,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 369,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 372,
            "end": 379,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 415,
            "end": 418,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "z",
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
