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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Sammy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 113,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 22,
            "end": 34,
            "typeParameters": null,
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
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 70,
            "end": 81,
            "typeParameters": null,
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 114,
      "end": 129,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 128,
        "name": "Sammy",
        "typeAnnotation": null,
        "decorators": [],
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
        "name": "Sammy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 84,
        "end": 139,
        "expression": {
          "type": "Literal",
          "start": 92,
          "end": 138,
          "value": "./exportAssignmentOfDeclaredExternalModule_0",
          "raw": "'./exportAssignmentOfDeclaredExternalModule_0'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 149,
            "end": 160,
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "name": "Sammy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 243,
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 241,
              "name": "Sammy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 303,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 303,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 303,
                  "name": "Sammy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 369,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 372,
            "end": 379,
            "callee": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 415,
            "end": 418,
            "callee": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
