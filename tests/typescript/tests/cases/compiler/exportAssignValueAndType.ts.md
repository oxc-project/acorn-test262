__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "http",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 68,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 30,
              "end": 68,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 46,
                "decorators": [],
                "name": "Server",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 47,
                "end": 68,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 66,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 57,
                      "decorators": [],
                      "name": "openPort",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 57,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 59,
                        "end": 65
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 88,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 134,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 95,
            "end": 111,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 110,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 99,
                  "end": 110,
                  "left": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 103,
                    "decorators": [],
                    "name": "http",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 110,
                    "decorators": [],
                    "name": "Server",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 132,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 125,
              "decorators": [],
              "name": "startTime",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 131,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 137,
      "end": 147,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 145,
            "end": 146,
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 172,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "decorators": [],
            "name": "server",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 161,
            "end": 171,
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 169,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 173,
      "end": 189,
      "expression": {
        "type": "Identifier",
        "start": 182,
        "end": 188,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
