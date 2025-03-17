__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "name": "http",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "Server",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                      "name": "openPort",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "attributes": [],
            "exportKind": "type"
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
        "name": "server",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                    "name": "http",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 110,
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
            "start": 116,
            "end": 132,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 125,
              "name": "startTime",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 137,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "name": "server",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 161,
            "end": 171,
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 169,
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
      "start": 173,
      "end": 189,
      "expression": {
        "type": "Identifier",
        "start": 182,
        "end": 188,
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
