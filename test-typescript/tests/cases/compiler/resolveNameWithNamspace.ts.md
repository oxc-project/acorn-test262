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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "name": "require",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 43,
          "name": "moduleName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 43,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 49,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 46,
          "end": 49
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 166,
      "id": {
        "type": "Literal",
        "start": 67,
        "end": 75,
        "value": "assert",
        "raw": "\"assert\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 166,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 82,
            "end": 164,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 89,
              "end": 164,
              "id": {
                "type": "Identifier",
                "start": 98,
                "end": 103,
                "name": "equal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 115,
                  "name": "actual",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 112,
                      "end": 115
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 130,
                  "name": "expected",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 156,
                  "name": "message",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 156,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 157,
                "end": 163,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 159,
                  "end": 163
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 52,
        "name": "myAssert",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 53,
        "end": 86,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 84,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 66,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 75,
                "name": "cool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 78,
                "end": 84,
                "literal": {
                  "type": "Literal",
                  "start": 78,
                  "end": 84,
                  "value": "cool",
                  "raw": "'cool'"
                }
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
      "kind": "namespace",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 99,
            "name": "myAssert",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 119,
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 109,
              "name": "require",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 110,
                "end": 118,
                "value": "assert",
                "raw": "'assert'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
