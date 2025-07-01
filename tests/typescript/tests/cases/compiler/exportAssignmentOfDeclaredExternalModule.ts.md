__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            "start": 22,
            "end": 34
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
            },
            "start": 70,
            "end": 81
          }
        ],
        "start": 16,
        "end": 113
      },
      "declare": false,
      "start": 0,
      "end": 113
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 128
      },
      "start": 114,
      "end": 129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 130
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
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 81
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./exportAssignmentOfDeclaredExternalModule_0",
          "raw": "'./exportAssignmentOfDeclaredExternalModule_0'",
          "start": 92,
          "end": 138
        },
        "start": 84,
        "end": 139
      },
      "importKind": "value",
      "start": 69,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sammy",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [],
            "start": 149,
            "end": 160
          },
          "definite": false,
          "start": 145,
          "end": 160
        }
      ],
      "declare": false,
      "start": 141,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sammy",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 241
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 236,
            "end": 243
          },
          "definite": false,
          "start": 232,
          "end": 243
        }
      ],
      "declare": false,
      "start": 228,
      "end": 244
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 303
                },
                "typeArguments": null,
                "start": 298,
                "end": 303
              },
              "start": 296,
              "end": 303
            },
            "start": 295,
            "end": 303
          },
          "init": null,
          "definite": false,
          "start": 295,
          "end": 303
        }
      ],
      "declare": false,
      "start": 291,
      "end": 304
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 369
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 377
            },
            "typeArguments": null,
            "arguments": [],
            "start": 372,
            "end": 379
          },
          "definite": false,
          "start": 368,
          "end": 379
        }
      ],
      "declare": false,
      "start": 364,
      "end": 380
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 412
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 416
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 415,
            "end": 418
          },
          "definite": false,
          "start": 411,
          "end": 418
        }
      ],
      "declare": false,
      "start": 407,
      "end": 419
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 69,
  "end": 448
}
```
