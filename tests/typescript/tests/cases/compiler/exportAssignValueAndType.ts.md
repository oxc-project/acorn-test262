__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "http",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Server",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 49
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "openPort",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 60
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 62,
                        "end": 68
                      },
                      "start": 60,
                      "end": 68
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 52,
                    "end": 69
                  }
                ],
                "start": 50,
                "end": 71
              },
              "declare": false,
              "start": 33,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 26,
            "end": 71
          }
        ],
        "start": 23,
        "end": 73
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "http",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 106
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Server",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 113
                  },
                  "start": 102,
                  "end": 113
                },
                "typeArguments": null,
                "start": 102,
                "end": 113
              },
              "start": 100,
              "end": 113
            },
            "start": 98,
            "end": 114
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "startTime",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 134
                },
                "typeArguments": null,
                "start": 130,
                "end": 134
              },
              "start": 128,
              "end": 134
            },
            "accessibility": null,
            "static": false,
            "start": 119,
            "end": 135
          }
        ],
        "start": 92,
        "end": 137
      },
      "declare": false,
      "start": 75,
      "end": 137
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
            "start": 144,
            "end": 145
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 148,
            "end": 149
          },
          "definite": false,
          "start": 144,
          "end": 149
        }
      ],
      "declare": false,
      "start": 140,
      "end": 150
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
            "name": "server",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 161
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 172
            },
            "typeArguments": null,
            "arguments": [],
            "start": 164,
            "end": 174
          },
          "definite": false,
          "start": 155,
          "end": 174
        }
      ],
      "declare": false,
      "start": 151,
      "end": 175
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 191
      },
      "start": 176,
      "end": 192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 194
}
```
