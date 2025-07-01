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
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Server",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 44
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 59
                },
                "typeArguments": null,
                "start": 53,
                "end": 59
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 60,
              "end": 63
            },
            "declare": false,
            "start": 28,
            "end": 63
          }
        ],
        "start": 22,
        "end": 65
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 83
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
                    "name": "server",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 100
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Server",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 107
                  },
                  "start": 94,
                  "end": 107
                },
                "typeArguments": null,
                "start": 94,
                "end": 107
              },
              "start": 92,
              "end": 107
            },
            "start": 90,
            "end": 108
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
              "start": 113,
              "end": 122
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
                  "start": 124,
                  "end": 128
                },
                "typeArguments": null,
                "start": 124,
                "end": 128
              },
              "start": 122,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 129
          }
        ],
        "start": 84,
        "end": 131
      },
      "declare": false,
      "start": 67,
      "end": 131
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
            "start": 138,
            "end": 139
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 142,
            "end": 143
          },
          "definite": false,
          "start": 138,
          "end": 143
        }
      ],
      "declare": false,
      "start": 134,
      "end": 144
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
            "start": 149,
            "end": 155
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 166
            },
            "typeArguments": null,
            "arguments": [],
            "start": 158,
            "end": 168
          },
          "definite": false,
          "start": 149,
          "end": 168
        }
      ],
      "declare": false,
      "start": 145,
      "end": 169
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 185
      },
      "start": 170,
      "end": 186
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```
