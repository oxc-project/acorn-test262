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
        "start": 15,
        "end": 19
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
                "start": 40,
                "end": 46
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
                      "start": 49,
                      "end": 57
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 59,
                        "end": 65
                      },
                      "start": 57,
                      "end": 65
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 49,
                    "end": 66
                  }
                ],
                "start": 47,
                "end": 68
              },
              "declare": false,
              "start": 30,
              "end": 68
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 23,
            "end": 68
          }
        ],
        "start": 20,
        "end": 70
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 88
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
                    "start": 99,
                    "end": 103
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Server",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 110
                  },
                  "start": 99,
                  "end": 110
                },
                "typeArguments": null,
                "start": 99,
                "end": 110
              },
              "start": 97,
              "end": 110
            },
            "start": 95,
            "end": 111
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
              "start": 116,
              "end": 125
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
                  "start": 127,
                  "end": 131
                },
                "typeArguments": null,
                "start": 127,
                "end": 131
              },
              "start": 125,
              "end": 131
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 132
          }
        ],
        "start": 89,
        "end": 134
      },
      "declare": false,
      "start": 72,
      "end": 134
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
            "start": 141,
            "end": 142
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 145,
            "end": 146
          },
          "definite": false,
          "start": 141,
          "end": 146
        }
      ],
      "declare": false,
      "start": 137,
      "end": 147
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
            "start": 152,
            "end": 158
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 169
            },
            "typeArguments": null,
            "arguments": [],
            "start": 161,
            "end": 171
          },
          "definite": false,
          "start": 152,
          "end": 171
        }
      ],
      "declare": false,
      "start": 148,
      "end": 172
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 188
      },
      "start": 173,
      "end": 189
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
