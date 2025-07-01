__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                },
                "start": 12,
                "end": 20
              },
              "start": 11,
              "end": 20
            },
            "init": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 23,
              "end": 25
            },
            "definite": false,
            "start": 11,
            "end": 25
          }
        ],
        "declare": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "vs/foo_0",
        "raw": "\"vs/foo_0\"",
        "start": 15,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 49,
                            "end": 55
                          },
                          "start": 46,
                          "end": 55
                        },
                        "start": 43,
                        "end": 55
                      },
                      "start": 41,
                      "end": 55
                    },
                    "start": 40,
                    "end": 55
                  },
                  "init": null,
                  "definite": false,
                  "start": 40,
                  "end": 55
                }
              ],
              "declare": false,
              "start": 36,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 29,
            "end": 56
          }
        ],
        "start": 26,
        "end": 58
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "vs/foo_0",
          "raw": "\"vs/foo_0\"",
          "start": 54,
          "end": 64
        },
        "start": 46,
        "end": 65
      },
      "importKind": "value",
      "start": 33,
      "end": 66
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 73
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 79
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 81
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 84,
              "end": 86
            },
            "start": 76,
            "end": 86
          },
          "definite": false,
          "start": 71,
          "end": 86
        }
      ],
      "declare": false,
      "start": 67,
      "end": 87
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 139
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 145
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 147
                },
                "optional": false,
                "computed": false,
                "start": 142,
                "end": 147
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 142,
              "end": 149
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 152,
              "end": 154
            },
            "start": 142,
            "end": 154
          },
          "definite": false,
          "start": 137,
          "end": 154
        }
      ],
      "declare": false,
      "start": 133,
      "end": 155
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 173
}
```
