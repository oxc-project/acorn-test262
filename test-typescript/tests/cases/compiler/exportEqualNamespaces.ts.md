__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 65,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 63,
            "body": {
              "type": "TSInterfaceBody",
              "start": 60,
              "end": 63,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 53,
                "end": 59,
                "expression": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 59,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 44,
              "decorators": [],
              "name": "Server",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 21,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 131,
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 131,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 90,
            "end": 108,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 107,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 94,
                  "end": 107,
                  "left": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 100,
                    "decorators": [],
                    "name": "server",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 107,
                    "decorators": [],
                    "name": "Server",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 129,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 122,
              "decorators": [],
              "name": "startTime",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 128,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 128,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 83,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 142,
            "end": 143,
            "raw": "5",
            "value": 5
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "decorators": [],
            "name": "server",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 158,
            "end": 168,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "decorators": [],
              "name": "Date",
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
      "type": "TSExportAssignment",
      "start": 170,
      "end": 186,
      "expression": {
        "type": "Identifier",
        "start": 179,
        "end": 185,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
