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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 21,
        "name": "server",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 65,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 44,
              "name": "Server",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 53,
                "end": 59,
                "expression": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 59,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 60,
              "end": 63,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 83,
        "name": "server",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 131,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 90,
            "end": 108,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 107,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 94,
                  "end": 107,
                  "left": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 100,
                    "name": "server",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 107,
                    "name": "Server",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 129,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 122,
              "name": "startTime",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 128,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 128,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 142,
            "end": 143,
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "name": "server",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 158,
            "end": 168,
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "name": "Date",
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
      "type": "TSExportAssignment",
      "start": 170,
      "end": 186,
      "expression": {
        "type": "Identifier",
        "start": 179,
        "end": 185,
        "name": "server",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
