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
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "start": 39,
            "end": 50
          }
        ],
        "start": 16,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 67
      },
      "start": 53,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
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
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./errorsOnImportedSymbol_0",
          "raw": "\"./errorsOnImportedSymbol_0\"",
          "start": 23,
          "end": 51
        },
        "start": 15,
        "end": 52
      },
      "importKind": "value",
      "start": 0,
      "end": 53
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
            "start": 58,
            "end": 59
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 71
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 77
              },
              "optional": false,
              "computed": false,
              "start": 66,
              "end": 77
            },
            "typeArguments": null,
            "arguments": [],
            "start": 62,
            "end": 79
          },
          "definite": false,
          "start": 58,
          "end": 79
        }
      ],
      "declare": false,
      "start": 54,
      "end": 80
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
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 94
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 100
              },
              "optional": false,
              "computed": false,
              "start": 89,
              "end": 100
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 89,
            "end": 102
          },
          "definite": false,
          "start": 85,
          "end": 102
        }
      ],
      "declare": false,
      "start": 81,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
