__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 23,
              "end": 25,
              "value": 42,
              "raw": "42"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "value": "vs/foo_0",
        "raw": "\"vs/foo_0\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 56,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 36,
              "end": 56,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 55,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 55,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 43,
                        "end": 55,
                        "typeParameters": null,
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
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 46,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 54,
          "end": 64,
          "value": "vs/foo_0",
          "raw": "\"vs/foo_0\""
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 73,
            "name": "z1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 76,
            "end": 86,
            "left": {
              "type": "MemberExpression",
              "start": 76,
              "end": 81,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 84,
              "end": 86,
              "value": 10,
              "raw": "10"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 142,
            "end": 154,
            "left": {
              "type": "CallExpression",
              "start": 142,
              "end": 149,
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 147,
                "object": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 145,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 152,
              "end": 154,
              "value": 10,
              "raw": "10"
            }
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
