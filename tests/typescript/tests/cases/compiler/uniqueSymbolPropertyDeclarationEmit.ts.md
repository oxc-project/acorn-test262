__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Op",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 9
          },
          "start": 7,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./op",
        "raw": "'./op'",
        "start": 15,
        "end": 21
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 22
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Po",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Po",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "importKind": "value",
          "start": 32,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./po",
        "raw": "'./po'",
        "start": 42,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 23,
      "end": 49
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Op",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 101
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "or",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 104
                      },
                      "optional": false,
                      "computed": false,
                      "start": 99,
                      "end": 104
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 107,
                      "end": 109
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 98,
                    "end": 109
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Po",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 118
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 121
                      },
                      "optional": false,
                      "computed": false,
                      "start": 116,
                      "end": 121
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 124,
                      "end": 126
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 115,
                    "end": 126
                  }
                ],
                "start": 92,
                "end": 130
              },
              "start": 85,
              "end": 131
            }
          ],
          "start": 81,
          "end": 133
        },
        "expression": false,
        "start": 66,
        "end": 133
      },
      "exportKind": "value",
      "start": 51,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Op",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "or",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 33
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 42,
                          "end": 48
                        },
                        "start": 35,
                        "end": 48
                      },
                      "start": 33,
                      "end": 48
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 22,
                    "end": 49
                  }
                ],
                "start": 18,
                "end": 51
              },
              "start": 16,
              "end": 51
            },
            "start": 14,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 51
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Op",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 71
      },
      "exportKind": "value",
      "start": 54,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Po",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 38,
                        "end": 40
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 49,
                            "end": 55
                          },
                          "start": 42,
                          "end": 55
                        },
                        "start": 40,
                        "end": 55
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 29,
                      "end": 56
                    }
                  ],
                  "start": 25,
                  "end": 58
                },
                "start": 23,
                "end": 58
              },
              "start": 21,
              "end": 58
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 58
          }
        ],
        "declare": true,
        "start": 7,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
