vs/foo_0/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 23,
              "end": 25,
              "raw": "42",
              "value": 42
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
foo_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 56,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 36,
              "end": 56,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 55,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 55,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 43,
                        "end": 55,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 46,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 49,
                            "end": 55
                          }
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 15,
        "end": 25,
        "raw": "\"vs/foo_0\"",
        "value": "vs/foo_0"
      }
    }
  ],
  "sourceType": "module"
}
```
foo_2.ts
```json
{
  "type": "Program",
  "start": 33,
  "end": 174,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 46,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 54,
          "end": 64,
          "raw": "\"vs/foo_0\"",
          "value": "vs/foo_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 73,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 76,
            "end": 86,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 76,
              "end": 81,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 84,
              "end": 86,
              "raw": "10",
              "value": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "z2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 142,
            "end": 154,
            "operator": "+",
            "left": {
              "type": "CallExpression",
              "start": 142,
              "end": 149,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 147,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 145,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 152,
              "end": 154,
              "raw": "10",
              "value": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
