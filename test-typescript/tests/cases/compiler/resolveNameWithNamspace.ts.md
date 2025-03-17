__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 50,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 43,
          "decorators": [],
          "name": "moduleName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 43,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 49,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 46,
          "end": 49
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 166,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 166,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 82,
            "end": 164,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 89,
              "end": 164,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 98,
                "end": 103,
                "decorators": [],
                "name": "equal",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 115,
                  "decorators": [],
                  "name": "actual",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 112,
                      "end": 115
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 130,
                  "decorators": [],
                  "name": "expected",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 156,
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 142,
                      "end": 156,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 142,
                          "end": 148
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 151,
                          "end": 156,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 156,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 157,
                "end": 163,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 159,
                  "end": 163
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 67,
        "end": 75,
        "raw": "\"assert\"",
        "value": "assert"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 86,
      "body": {
        "type": "TSModuleBlock",
        "start": 53,
        "end": 86,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 84,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 66,
              "end": 84,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 75,
                "decorators": [],
                "name": "cool",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 78,
                "end": 84,
                "literal": {
                  "type": "Literal",
                  "start": 78,
                  "end": 84,
                  "raw": "'cool'",
                  "value": "cool"
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 52,
        "decorators": [],
        "name": "myAssert",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 99,
            "decorators": [],
            "name": "myAssert",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 119,
            "arguments": [
              {
                "type": "Literal",
                "start": 110,
                "end": 118,
                "raw": "'assert'",
                "value": "assert"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 109,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
