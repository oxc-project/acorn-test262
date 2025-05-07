__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 22,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 21,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 21,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13,
                "end": 21,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 15,
                  "end": 21
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
  "end": 48,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 47,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 31,
          "end": 47,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 33,
              "end": 45,
              "argument": {
                "type": "Literal",
                "start": 40,
                "end": 44,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 25,
          "end": 30,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 27,
            "end": 30
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 100,
  "end": 305,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 100,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 113,
        "end": 148,
        "expression": {
          "type": "Literal",
          "start": 121,
          "end": 147,
          "raw": "\"./aliasUsedAsNameValue_0\"",
          "value": "./aliasUsedAsNameValue_0",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 150,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 158,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 161,
        "end": 196,
        "expression": {
          "type": "Literal",
          "start": 169,
          "end": 195,
          "raw": "\"./aliasUsedAsNameValue_1\"",
          "value": "./aliasUsedAsNameValue_1",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 305,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 207,
        "end": 305,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 211,
            "end": 305,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 305,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 227,
                "end": 305,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 294,
                    "end": 303,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 294,
                      "end": 302,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 298,
                          "end": 301,
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 294,
                        "end": 297,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
  "sourceType": "module",
  "hashbang": null
}
```
