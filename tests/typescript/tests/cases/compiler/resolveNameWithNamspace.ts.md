__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "moduleName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            },
            "start": 35,
            "end": 43
          },
          "start": 25,
          "end": 43
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 46,
          "end": 49
        },
        "start": 44,
        "end": 49
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "assert",
        "raw": "\"assert\"",
        "start": 67,
        "end": 75
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "equal",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 103
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actual",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 112,
                      "end": 115
                    },
                    "start": 110,
                    "end": 115
                  },
                  "start": 104,
                  "end": 115
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expected",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    },
                    "start": 125,
                    "end": 130
                  },
                  "start": 117,
                  "end": 130
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 142,
                          "end": 148
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 156
                          },
                          "typeArguments": null,
                          "start": 151,
                          "end": 156
                        }
                      ],
                      "start": 142,
                      "end": 156
                    },
                    "start": 140,
                    "end": 156
                  },
                  "start": 132,
                  "end": 156
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 159,
                  "end": 163
                },
                "start": 157,
                "end": 163
              },
              "body": null,
              "expression": false,
              "start": 89,
              "end": 164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 82,
            "end": 164
          }
        ],
        "start": 76,
        "end": 166
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 52,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
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
        "type": "Identifier",
        "decorators": [],
        "name": "myAssert",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 52
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "cool",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 75
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "cool",
                  "raw": "'cool'",
                  "start": 78,
                  "end": 84
                },
                "start": 78,
                "end": 84
              },
              "declare": false,
              "start": 66,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 59,
            "end": 84
          }
        ],
        "start": 53,
        "end": 86
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 34,
      "end": 86
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
            "name": "myAssert",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 99
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 109
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "assert",
                "raw": "'assert'",
                "start": 110,
                "end": 118
              }
            ],
            "optional": false,
            "start": 102,
            "end": 119
          },
          "definite": false,
          "start": 91,
          "end": 119
        }
      ],
      "declare": false,
      "start": 87,
      "end": 119
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 34,
  "end": 120
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "equal",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 13
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "myAssert",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 24
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "equal",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 30
          },
          "optional": false,
          "computed": false,
          "start": 16,
          "end": 30
        },
        "start": 0,
        "end": 30
      },
      "directive": null,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 38
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "equal",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 44
          },
          "optional": false,
          "computed": false,
          "start": 31,
          "end": 44
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 31,
        "end": 46
      },
      "directive": null,
      "start": 31,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
