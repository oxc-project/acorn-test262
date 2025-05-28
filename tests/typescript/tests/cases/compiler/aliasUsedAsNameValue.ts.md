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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 22,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 21,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 113,
        "end": 148,
        "expression": {
          "type": "Literal",
          "start": 121,
          "end": 147,
          "value": "./aliasUsedAsNameValue_0",
          "raw": "\"./aliasUsedAsNameValue_0\""
        }
      },
      "importKind": "value"
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 161,
        "end": 196,
        "expression": {
          "type": "Literal",
          "start": 169,
          "end": 195,
          "value": "./aliasUsedAsNameValue_1",
          "raw": "\"./aliasUsedAsNameValue_1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 305,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 207,
        "end": 305,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 211,
            "end": 305,
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
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 227,
                "end": 305,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 294,
                    "end": 303,
                    "expression": {
                      "type": "CallExpression",
                      "start": 294,
                      "end": 302,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 294,
                        "end": 297,
                        "object": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
