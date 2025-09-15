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
        "start": 18,
        "end": 24
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
              "start": 41,
              "end": 47
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
                  "start": 56,
                  "end": 62
                },
                "typeArguments": null,
                "start": 56,
                "end": 62
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 63,
              "end": 66
            },
            "declare": false,
            "start": 31,
            "end": 66
          }
        ],
        "start": 25,
        "end": 68
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 86
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
                    "start": 97,
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
                  "start": 97,
                  "end": 110
                },
                "typeArguments": null,
                "start": 97,
                "end": 110
              },
              "start": 95,
              "end": 110
            },
            "start": 93,
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
        "start": 87,
        "end": 134
      },
      "declare": false,
      "start": 70,
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
  "end": 189
}
```
