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
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 30,
              "end": 68,
              "body": {
                "type": "TSInterfaceBody",
                "start": 47,
                "end": 68,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 66,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 57,
                      "decorators": [],
                      "name": "openPort",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 57,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 59,
                        "end": 65
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 46,
                "decorators": [],
                "name": "Server",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "http",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 134,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 134,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 95,
            "end": 111,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 110,
                "typeArguments": null,
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
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 132,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 125,
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
              "start": 125,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 131,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 131,
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
        "start": 82,
        "end": 88,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
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
      "start": 148,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 171,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 169,
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
  "sourceType": "script",
  "hashbang": null
}
```
